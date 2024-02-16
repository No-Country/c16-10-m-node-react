import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Category } from 'src/common/interfaces/category.interfaces';
import { Services } from 'src/common/interfaces/services.interface';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
  @Prop({ type: String, required: true })
  title: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop()
  category: Category[];

  @Prop()
  services: Services[];

  @Prop()
  nameProfessional: string;

  @Prop({ type: Number })
  views: number;

  @Prop()
  idProfessional: object;
}

export const PostSchema = SchemaFactory.createForClass(Post);
