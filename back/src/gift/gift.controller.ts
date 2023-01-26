import {
  Controller,
  Get,
  Post,
  Request,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { GiftService } from './gift.service';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('gift')
export class GiftController {
  constructor(private readonly giftService: GiftService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post(':eventId')
  create(
    @Param('eventId') eventId: string,
    @Request() req,
    @Body() createGiftDto: CreateGiftDto,
  ) {
    createGiftDto.eventId = eventId;
    createGiftDto.userCreatorId = req.user.userId;
    return this.giftService.create(createGiftDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req) {
    return this.giftService.findAll(req.user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.giftService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('book/:id')
  book(@Request() req, @Param('id') id: string) {
    return this.giftService.book(req.user.userId, id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('unBook/:id')
  unBook(@Request() req, @Param('id') id: string) {
    return this.giftService.unBook(req.user.userId, id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGiftDto: UpdateGiftDto) {
    return this.giftService.update(id, updateGiftDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.giftService.remove(id);
  }
}
