import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/infrastructure/db/schemas/user.schema';
import { CloudinaryProvider } from './cloudinary.provider';
import { UserController } from './user.controller';
import { UserService } from './user.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [UserService, CloudinaryProvider],
  controllers: [UserController],
  providers: [UserService, CloudinaryProvider],
})
export class UserModule {}
