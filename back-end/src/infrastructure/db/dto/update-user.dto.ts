import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
import { Category } from "src/common/interfaces/category.interfaces";

export class UpdateUserDto {

  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @Transform(({ value }) => value.trim())
  @MinLength(6)
  password?: string;

  @IsNumber()
  @IsOptional()
  readonly phone?: number;

  @IsString()
  @IsOptional()
  readonly imageProfile?: string;

  @IsString()
  @IsOptional()
  readonly isProfessional?: boolean;

  @IsOptional()
  readonly category?: Category[];

  @IsString()
  @IsOptional()
  readonly address?: string;
}
