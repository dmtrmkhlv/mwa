import { ApiProperty } from '@nestjs/swagger';
import { Allow, IsNotEmpty, IsString } from 'class-validator';

export class CreateEventDto {
  @Allow()
  userCreatorId: string;

  @Allow()
  dateCreate?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Allow()
  isActive: boolean;
}
