import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsNotEmpty, IsString } from 'class-validator';

export class CreateGiftDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  link: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Allow()
  eventId: string;

  @Allow()
  userCreatorId: string;

  @Allow()
  userBookId: string;
}
