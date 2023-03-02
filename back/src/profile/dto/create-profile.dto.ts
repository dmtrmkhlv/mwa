import { UserEntity } from 'src/users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, Allow, IsEmail } from 'class-validator';

export class CreateProfileDto {
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
  @IsOptional()
  // @IsEmail()
  email: string;

  @Allow()
  emailIsActive: boolean;

  @Allow()
  user: UserEntity;
}
