import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from 'src/infrastructure/db/schemas/account.schema';
import { CreateAccountDto } from 'src/infrastructure/db/dto/create-account.dto';
import { UpdateAccountDto } from 'src/infrastructure/db/dto/update-account.dto';
@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const createdAccount = new this.accountModel(createAccountDto);
    return createdAccount.save();
  }
  async findAll(): Promise<Account[]> {
    return this.accountModel.find().exec();
  }

  async findId(id: string): Promise<Account> {
    try {
      const account = await this.accountModel.findById(id);
      if (!account) {
        throw new NotFoundException(`User account #${id} not found`);
      }
      return account;
    } catch (err) {
      console.error(`Error occurred while finding Account #${id}: `, err);
      throw err;
    }
  }

  async findEmail(email: string): Promise<Account> {
    try {
      const account = await this.accountModel.findOne({ email });
      if (!account) {
        throw new NotFoundException(`User account ${email} not found`);
      }
      return account;
    } catch (err) {
      console.error(`Error occurred while finding Account ${email}: `, err);
      throw err;
    }
  }

  async delete(id: string) {
    try {
      const account = await this.accountModel.findById(id);
      if (!account) {
        throw new NotFoundException(`User account #${id} not found`);
      }
      await this.accountModel.findByIdAndDelete(id).exec();
    } catch (err) {
      console.error('Error occurred while deleting account:', err);
      throw err;
    }
  }

  async update(id: string, updateAccountDto: UpdateAccountDto) {
    try {
      const account = await this.accountModel
        .findByIdAndUpdate(id, updateAccountDto, {
          new: true,
        })
        .exec();
      if (!account) {
        throw new NotFoundException(`Account #${id} not found`);
      }
      return account;
    } catch (err) {
      console.error(`Error occurred while updating User Account #${id}:`, err);
      throw err;
    }
  }
}
