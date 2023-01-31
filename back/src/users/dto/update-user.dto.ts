import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  password: string;
}
