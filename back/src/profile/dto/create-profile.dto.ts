import { UserEntity } from 'src/users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, Allow, IsEmail } from 'class-validator';

export class CreateProfileDto {
  @Allow()
  id: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  photo = '';

  @ApiProperty()
  @IsString()
  @IsOptional()
  firstname = '';

  @ApiProperty()
  @IsString()
  @IsOptional()
  lastname = '';

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone = '';

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email = '';

  @Allow()
  emailIsActive = false;

  @Allow()
  user: UserEntity;
}
