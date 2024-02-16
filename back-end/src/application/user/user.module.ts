import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from 'src/infrastructure/db/schemas/user.schema';
import { CloudinaryProvider } from './cloudinary.provider';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [UserService, CloudinaryProvider],
  controllers: [UserController],
  providers: [UserService, CloudinaryProvider],
})
export class UserModule {}
