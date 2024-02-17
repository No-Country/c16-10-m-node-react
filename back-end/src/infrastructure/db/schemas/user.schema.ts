import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Category } from 'src/common/interfaces/category.interfaces';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  _id: string;

  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({
    unique: true,
    required: true,
    trim: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: Number })
  phone?: number;

  @Prop({ type: Boolean })
  isProfessional?: boolean;

  @Prop({ type: Array })
  category?: Category[];

  @Prop({ type: String })
  address?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
