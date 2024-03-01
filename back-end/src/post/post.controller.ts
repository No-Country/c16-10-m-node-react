import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
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
import { CommentDto } from 'src/infrastructure/db/dto/postDto/comment-post.dto';

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
  async findAll(
    @Query('page') page: string = '0',
    @Query('limit') limit: string = '0',
    @Res() res: Response,
  ) {
    const posts = await this.postService.findAll(page, limit);
    return res.status(HttpStatus.OK).json(posts);
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

  @Get('category/:category')
  async findByCategory(
    @Param('category') category: string,
    @Query('page') page: string = '0',
    @Query('limit') limit: string = '0',
    @Res() res: Response,
  ) {
    console.log('get category', category, page, limit);
    const newPost = await this.postService.findByCategory(
      category,
      page,
      limit,
    );
    return res.status(HttpStatus.OK).json(newPost);
  }

  @UseGuards(JwtAuthGuard)
  @Post('comment/:idPost')
  async comments(
    @Req() req: Request,
    @Param('idPost') idPost: string,
    @Body() comment: CommentDto,
    @Res() res: Response,
  ) {
    const data = await this.postService.newComments(req.user, idPost, comment);
    return res.status(HttpStatus.OK).json(data);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const permission = await this.postService.security(req.user, id);
    if (permission === false) throw new UnauthorizedException();
    const data = await this.postService.update(id, updatePostDto);
    return res.status(HttpStatus.OK).json(data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
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
