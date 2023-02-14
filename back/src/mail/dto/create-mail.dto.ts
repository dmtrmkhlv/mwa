import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

interface Context {
  [index: string]: string;
}
export class CreateMailDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  emailTo: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  senderName?: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  emailFrom?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  subject: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  templateName: string;

  @ApiProperty()
  @IsNotEmpty()
  context: Context;
}
