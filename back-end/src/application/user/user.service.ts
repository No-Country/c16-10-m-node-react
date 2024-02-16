import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/infrastructure/db/schemas/user.schema';
import { CreateUserDto } from 'src/infrastructure/db/dto/create-user.dto';
import { UpdateUserDto } from 'src/infrastructure/db/dto/update-user.dto';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findId(id: string): Promise<User> {
    try {
      const user = await this.userModel.findById(id);
      if (!user) {
        throw new NotFoundException(`User user #${id} not found`);
      }
      return user;
    } catch (err) {
      console.error(`Error occurred while finding User #${id}: `, err);
      throw err;
    }
  }

  async findEmail(email: string): Promise<User> {
    try {
      const user = await this.userModel.findOne({ email });
      if (!user) {
        throw new NotFoundException(`User user ${email} not found`);
      }
      return user;
    } catch (err) {
      console.error(`Error occurred while finding User ${email}: `, err);
      throw err;
    }
  }

  async delete(id: string) {
    try {
      const user = await this.userModel.findById(id);
      if (!user) {
        throw new NotFoundException(`User user #${id} not found`);
      }
      await this.userModel.findByIdAndDelete(id).exec();
    } catch (err) {
      console.error('Error occurred while deleting user:', err);
      throw err;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userModel
        .findByIdAndUpdate(id, updateUserDto, {
          new: true,
        })
        .exec();
      if (!user) {
        throw new NotFoundException(`User #${id} not found`);
      }
      return user;
    } catch (err) {
      console.error(`Error occurred while updating User User #${id}:`, err);
      throw err;
    }
  }
}
