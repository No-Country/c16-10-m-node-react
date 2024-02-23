import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreatePostDto } from '../infrastructure/db/dto/postDto/create-post.dto';
import { UpdatePostDto } from '../infrastructure/db/dto/postDto/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Req() req: Request,
    @Body() createPostDto: CreatePostDto,
    @Res() res: Response,
  ) {
    const newPost = await this.postService.create(req.user, createPostDto);
    return res.status(HttpStatus.CREATED).json(newPost);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Res() res: Response,
  ) {
    const posts = await this.postService.findAll(page, limit);
    return res.status(HttpStatus.OK).json(posts);
    //return await this.postService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.postService.findOne(id);
  }

  @Get('professional/:id')
  async findByProfessional(@Param('id') id: string, @Res() res: Response) {
    const newPost = await this.postService.findByProfessional(id);
    return res.status(HttpStatus.OK).json(newPost);
  }

  @Get('category/:category/:limit/:skip')
  async findByCategory(
    @Param('category') category: string,
    @Param('limit') limit: number,
    @Param('skip') skip: number,
    @Res() res: Response,
  ) {
    const newPost = await this.postService.findByCategory(
      category,
      limit,
      skip,
    );
    return res.status(HttpStatus.OK).json(newPost);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
