import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Services } from 'src/common/classes/services.class';
import { User } from './user.schema';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  category: string;

  @Prop({ type: [Services] })
  services: Services[];

  @Prop({ type: String, required: true })
  nameProfessional: string;

  @Prop({ type: Number })
  views: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  idProfessional: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);
