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
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { UpdateUserDto } from 'src/infrastructure/db/dto/userDto/update-user.dto';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/infrastructure/db/dto/userDto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const user = await this.userService.create(createUserDto);
    return res
      .status(HttpStatus.CREATED)
      .json({ message: 'user created', name: user.name });
  }

  @Get()
  async findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
    @Res() res: Response,
  ) {
    const users = await this.userService.findAll(page, limit);
    return res.status(HttpStatus.OK).json(users);
  }

  @Get(':id')
  async findId(@Param('id') id: string, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(await this.userService.findId(id));
  }

  @UseGuards(JwtAuthGuard)
  @Post('find')
  async findEmail(@Body() email: any, @Res() res: Response) {
    return res
      .status(HttpStatus.OK)
      .json(await this.userService.findEmail(email.email));
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUser: UpdateUserDto,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.OK)
      .json(await this.userService.update(id, updateUser));
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const data = await this.userService.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'user deleted',
      data: data.email,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('image/:id')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
    @Res() res: Response,
  ) {
    try {
      const data = await this.userService.uploadImage(file);
      await this.userService.saveImageProfile(data.secure_url, id);
      return res.status(HttpStatus.OK).json(data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
      throw new Error('Failed to upload image');
    }
  }
}
