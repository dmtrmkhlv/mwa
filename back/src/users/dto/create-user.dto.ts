import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(2, 30, {
    message:
      'The username must be at least 2 but not longer than 30 characters',
  })
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(6, 30, {
    message:
      'The password must be at least 6 but not longer than 30 characters',
  })
  password: string;

  @ApiProperty()
  @IsOptional()
  profile: CreateProfileDto;
}
