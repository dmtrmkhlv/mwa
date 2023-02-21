import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEmail,
  Allow,
  IsNotEmpty,
} from 'class-validator';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  @Allow()
  id: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  photo: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  firstname: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  lastname: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Allow()
  emailIsActive: boolean;

  @Allow()
  user: UserEntity;
}
