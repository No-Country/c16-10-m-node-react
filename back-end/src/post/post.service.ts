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

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
    private userService: UserService,
  ) {}

  async create(userPayload: any, createPostDto: CreatePostDto): Promise<Post> {
    try {
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
      if (!newPost.services.length)
        throw new BadRequestException('services is not empty');
      return newPost.save();
    } catch (error) {
      throw error;
    }
  }

  async findAll(): Promise<Post[]> {
    return await this.postModel.find();
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
    limit: number = 0,
    skip: number = 0,
  ): Promise<Post[]> {
    try {
      const posts = await this.postModel
        .find({
          category: { $all: category },
        })
        .limit(limit)
        .skip(skip);

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

  update(id: string, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: string) {
    return `This action removes a #${id} post`;
  }
}
