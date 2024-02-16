import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import {
  UploadApiErrorResponse,
  UploadApiResponse,
  v2 as cloudinary,
} from 'cloudinary';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/infrastructure/db/dto/create-user.dto';
import { UpdateUserDto } from 'src/infrastructure/db/dto/update-user.dto';
import { User } from 'src/infrastructure/db/schemas/user.schema';

const streamifier = require('streamifier');
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    //TODO agregar saltOrRounds a dotenv
    const saltOrRounds = 10;
    const { password } = createUserDto;

    createUserDto.password = await bcrypt.hash(password, saltOrRounds);
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findId(id: string): Promise<User> {
    try {
      const user = await this.userModel.findById(id).lean().select('-password');
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
      const user = await this.userModel
        .findOne({ email })
        .lean()
        .select('-password');
      if (!user) {
        throw new NotFoundException(`User user ${email} not found`);
      }
      return user;
    } catch (err) {
      console.error(`Error occurred while finding User ${email}: `, err);
      throw err;
    }
  }

  async delete(id: string): Promise<User> {
    try {
      const user = await this.userModel.findById(id);
      if (!user) {
        throw new NotFoundException(`User user #${id} not found`);
      }
      const userDeleted = await this.userModel.findByIdAndDelete(id).exec();
      return userDeleted;
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

  uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise<UploadApiResponse | UploadApiErrorResponse>(
      (resolve, reject) => {
        const uploadOptions = {
          folder: 'trabajoListo',
        };
        const uploadStream = cloudinary.uploader.upload_stream(
          uploadOptions,
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          },
        );
        streamifier.createReadStream(file.buffer).pipe(uploadStream);
      },
    );
  }

  async saveImageProfile(urlFile: string, id: string) {
    const user = await this.userModel.findById(id).exec();
    if (!user) throw new NotFoundException(`User user #${id} not found`);
    user.imageProfile = urlFile;
    user.save();
  }
}
