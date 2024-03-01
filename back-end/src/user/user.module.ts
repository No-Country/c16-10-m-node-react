import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from 'src/infrastructure/db/schemas/post.schema';
import { User, UserSchema } from 'src/infrastructure/db/schemas/user.schema';
import { CloudinaryProvider } from './cloudinary.provider';
import { UserController } from './user.controller';
import { UserService } from './user.service';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  exports: [UserService, CloudinaryProvider],
  controllers: [UserController],
  providers: [UserService, CloudinaryProvider],
})
export class UserModule {}
