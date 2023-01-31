import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Allow, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateGiftDto } from './create-gift.dto';

export class UpdateGiftDto extends PartialType(CreateGiftDto) {
  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  link: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Allow()
  userBookId: string;
}
