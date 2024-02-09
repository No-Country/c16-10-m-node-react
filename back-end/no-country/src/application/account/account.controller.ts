import { Controller, Post, Get, Body, ValidationPipe } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createAccount: any) {
    return this.accountService.create(createAccount);
  }

  @Get()
  async findAll() {
    return this.accountService.findAll();
  }
}
