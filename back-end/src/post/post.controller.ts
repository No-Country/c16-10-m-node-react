import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserService } from 'src/user/user.service';
import { CreatePostDto } from '../infrastructure/db/dto/postDto/create-post.dto';
import { UpdatePostDto } from '../infrastructure/db/dto/postDto/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
    private readonly userServices: UserService,
  ) {}

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

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('image/:idPost')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImagePost(
    @UploadedFile() file: Express.Multer.File,
    @Param('idPost') idPost: string,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    try {
      const permission = await this.postService.security(req.user, idPost);
      if (permission === false) throw new UnauthorizedException();
      const data = await this.userServices.uploadImage(file);
      await this.postService.saveImagePost(data.secure_url, idPost);
      return res.status(HttpStatus.OK).json('the image was loaded correctly');
    } catch (error) {
      throw error;
    }
  }
}
