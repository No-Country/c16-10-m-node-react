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
import { AccountService } from './account.service';
import { CreateAccountDto } from 'src/infrastructure/db/dto/create-account.dto';
import { UpdateAccountDto } from 'src/infrastructure/db/dto/update-account.dto';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createAccountDto: CreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }

  @Get()
  async findAll() {
    return this.accountService.findAll();
  }

  @Get(':id')
  async findId(@Param('id') id: string) {
    return this.accountService.findId(id);
  }

  @Get('find/:email')
  async findEmail(@Param('email') email: string) {
    return this.accountService.findEmail(email);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateAccount: UpdateAccountDto,
  ) {
    return this.accountService.update(id, updateAccount);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.accountService.delete(id);
  }
}
