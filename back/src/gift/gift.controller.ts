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
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('api/v1/gift')
export class GiftController {
  constructor(private readonly giftService: GiftService) {}

  @ApiOperation({ summary: 'Create gift' })
  @ApiResponse({
    status: 200,
    description: 'The gift has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
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
    return this.giftService.create(eventId, createGiftDto);
  }

  @ApiOperation({ summary: 'Get all gifts' })
  @ApiResponse({ status: 200, description: 'Return all gifts.' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Request() req) {
    return this.giftService.findAll(req.user.userId);
  }

  @ApiOperation({ summary: 'Get gift by {id}' })
  @ApiResponse({ status: 200, description: 'Return gift by {id}.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.giftService.findOne(id);
  }

  @ApiOperation({ summary: 'Update gift' })
  @ApiResponse({
    status: 200,
    description: 'The gift has been successfully updated.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateGiftDto: UpdateGiftDto,
  ) {
    return this.giftService.update(req.user.userId, id, updateGiftDto);
  }

  @ApiOperation({ summary: 'Delete gift' })
  @ApiResponse({
    status: 200,
    description: 'The gift has been successfully deleted.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.giftService.remove(req.user.userId, id);
  }

  @ApiOperation({ summary: 'Book gift' })
  @ApiResponse({
    status: 200,
    description: 'The gift has been successfully booked.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('book/:id')
  book(@Request() req, @Param('id') id: string) {
    return this.giftService.book(req.user.userId, id);
  }

  @ApiOperation({ summary: 'Unbook gift' })
  @ApiResponse({
    status: 200,
    description: 'The gift has been successfully unbooked.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('book/:id')
  unBook(@Request() req, @Param('id') id: string) {
    return this.giftService.unBook(req.user.userId, id);
  }
}
