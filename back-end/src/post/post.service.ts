import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/infrastructure/db/schemas/posts.schema';
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

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
