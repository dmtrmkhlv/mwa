import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { UpdateProfileDto } from 'src/profile/dto/update-profile.dto';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Length(2, 30, {
    message:
      'The username must be at least 2 but not longer than 30 characters',
  })
  username: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Length(6, 30, {
    message:
      'The password must be at least 6 but not longer than 30 characters',
  })
  password: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => UpdateProfileDto)
  profile: UpdateProfileDto;
}
