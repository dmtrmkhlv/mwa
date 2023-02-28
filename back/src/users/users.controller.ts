import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateMailDto } from 'src/mail/dto/create-mail.dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Generate 10 fake Users' })
  @Get('generateFakeUsers')
  async generate() {
    return await this.usersService.generateFakeUsers();
  }

  @ApiOperation({ summary: 'Send a test email' })
  @Post('test')
  async test(@Body() createMail: CreateMailDto) {
    return await this.usersService.test(createMail);
  }

  @ApiOperation({ summary: 'Delete ALL!!! Users from DB' })
  @Get('deleteAllUsers')
  async deleteAllUsers() {
    return await this.usersService.deleteAllUsers();
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Get user by {id}' })
  @ApiResponse({ status: 200, description: 'Return user by {id}.' })
  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully created.',
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Get user`s profile' })
  @ApiResponse({ status: 200, description: 'Return user`s profile.' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('profile')
  getProfile(@Request() req) {
    return this.usersService.getUserProfile(req.user.userId);
    // return this.usersService.getUserProfileWithoutPassword(req.user.userId);
  }

  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(req.user.userId, id, updateUserDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully deleted.',
  })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Request() req) {
    return this.usersService.remove(req.user.userId);
  }
}
