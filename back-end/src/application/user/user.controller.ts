import {
  Controller,
  Post,
  Get,
  Body,
  ValidationPipe,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/infrastructure/db/dto/create-user.dto';
import { UpdateUserDto } from 'src/infrastructure/db/dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findId(@Param('id') id: string) {
    return this.userService.findId(id);
  }

  @Get('find/:email')
  async findEmail(@Param('email') email: string) {
    return this.userService.findEmail(email);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateUser: UpdateUserDto,
  ) {
    return this.userService.update(id, updateUser);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
