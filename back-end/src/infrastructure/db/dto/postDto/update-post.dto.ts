import { IsEnum, IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { Services } from 'src/common/classes/services.class';
import { CategoriesEnum } from 'src/common/enums/categories.enum';

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  @MinLength(4)
  title?: string;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  description?: string;

  @IsString()
  @IsOptional()
  @IsEnum(CategoriesEnum)
  category?: CategoriesEnum;

  @IsOptional()
  services?: Services[];

  @IsString()
  @IsOptional()
  nameProfessional?: string;

  @IsOptional()
  @IsString()
  comments?: string;

  @IsNumber()
  @IsOptional()
  views?: number;
}
