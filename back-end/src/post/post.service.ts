import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/infrastructure/db/schemas/post.schema';
import { UserService } from 'src/user/user.service';
import { CreatePostDto } from '../infrastructure/db/dto/postDto/create-post.dto';
import { UpdatePostDto } from '../infrastructure/db/dto/postDto/update-post.dto';
import { CategoriesEnum } from 'src/common/enums/categories.enum';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
    private userService: UserService,
  ) {}

  async create(userPayload: any, createPostDto: CreatePostDto): Promise<Post> {
    try {
      if (userPayload.isProfessional != true)
        throw new BadRequestException('is user not professional');

      const { title, description, category, services } = createPostDto;
      const user = await this.userService.findId(userPayload.id);

      if (!user) throw new BadRequestException('user no exist');

      const newPost = new this.postModel({
        title,
        description,
        category,
        services,
        nameProfessional: user.name,
        idProfessional: userPayload.id,
      });
      if (!(newPost.services.length >= 0))
        throw new BadRequestException('the service cannot be empty');

      return newPost.save();
    } catch (error) {
      throw error;
    }
  }

  async findAll(page: string, limit: string): Promise<Post[]> {
    const pageInt = parseInt(page);
    const limitInt = parseInt(limit);
    const skip = (pageInt - 1) * limitInt;
    const postsProfessionals = await this.postModel
      .find()
      .skip(skip)
      .limit(limitInt)
      .lean();
    return postsProfessionals;
  }

  async findOne(id: string): Promise<Post> {
    try {
      const post = await this.postModel.findById(id).lean().select('-password');
      if (!post) {
        throw new NotFoundException(`Post #${id} not found`);
      }
      return post;
    } catch (err) {
      console.error(`Error occurred while finding Post #${id}: `, err);
      throw err;
    }
  }

  async findByProfessional(id: string): Promise<Post[]> {
    try {
      const posts = await this.postModel.find({ idProfessional: id });
      if (posts.length == 0) {
        throw new NotFoundException(`Posts by professional #${id} not found`);
      }
      return posts;
    } catch (err) {
      console.error(
        `Error occurred while finding posts by Professional #${id}: `,
        err,
      );
      throw err;
    }
  }

  async findByCategory(
    category: string,
    page: string,
    limit: string,
  ): Promise<Post[]> {
    try {
      const categoryEnum = CategoriesEnum[category];
      console.log(categoryEnum, limit, page);
      const pageInt = parseInt(page);
      const limitInt = parseInt(limit);
      const skip = (pageInt - 1) * limitInt;
      const posts = await this.postModel
        .find({
          category: { $all: categoryEnum },
        })
        .skip(skip)
        .limit(limitInt)
        .lean();

      if (posts.length == 0) {
        throw new NotFoundException(
          `Posts with category #${category} not found`,
        );
      }
      return posts;
    } catch (err) {
      console.error(
        `Error occurred while finding posts with category #${category}: `,
        err,
      );
      throw err;
    }
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    try {
      const post = await this.postModel
        .findByIdAndUpdate(id, updatePostDto, {
          new: true,
        })
        .exec();
      if (!post) {
        throw new NotFoundException(`Post #${id} not found`);
      }
      return post;
    } catch (err) {
      console.error(`Error occurred while updating Post Post #${id}:`, err);
      throw err;
    }
  }

  async remove(id: string) {
    try {
      const post = await this.postModel.findById(id);
      if (!post) {
        throw new NotFoundException(`Post post #${id} not found`);
      }
      const postDeleted = await this.postModel.findByIdAndDelete(id).exec();
      return postDeleted;
    } catch (err) {
      console.error('Error occurred while deleting post:', err);
      throw err;
    }
  }
}
