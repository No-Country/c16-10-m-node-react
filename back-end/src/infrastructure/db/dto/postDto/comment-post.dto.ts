import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CommentDto {
  @IsOptional()
  idClient: string;

  @IsNotEmpty()
  @IsString()
  nameClient: string;

  @IsNotEmpty()
  @IsString()
  textClient: string;

  @IsOptional()
  @IsString()
  answer: string;
}
