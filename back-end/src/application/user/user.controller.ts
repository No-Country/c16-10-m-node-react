import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from 'src/infrastructure/db/dto/create-user.dto';
import { UpdateUserDto } from 'src/infrastructure/db/dto/update-user.dto';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // @Post()
  // async create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // async findAll(@Res() res: Response) {
  //   return res.status(HttpStatus.OK).json(this.userService.findAll());
  // }

  @Get(':id')
  async findId(@Param('id') id: string, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(this.userService.findId(id));
  }

  @Get('find/:email')
  async findEmail(@Param('email') email: string, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(this.userService.findEmail(email));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUser: UpdateUserDto,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.OK)
      .json(this.userService.update(id, updateUser));
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    const data = await this.userService.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'user deleted',
      data: data.email,
    });
  }

  @Post('image-profile')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    try {
      const data = await this.userService.uploadImage(file);
      return res.status(HttpStatus.OK).json(data.secure_url);
    } catch (error) {
      console.error('Error uploading image:', error);
      throw new Error('Failed to upload image');
    }
  }

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
