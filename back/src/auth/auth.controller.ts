import {
  Controller,
  Post,
  Request,
  HttpCode,
  BadRequestException,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ALREADY_REGISTERED_ERROR } from './auth.constants';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully logged.',
  })
  @HttpCode(200)
  @ApiBody({ type: AuthDto })
  @Post('login')
  async login(@Body() body: AuthDto) {
    return this.authService.login(body);
  }

  @ApiOperation({ summary: 'Register user' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully registered.',
  })
  @ApiBody({ type: AuthDto })
  @Post('register')
  async register(@Request() req) {
    const oldUser = await this.authService.findUser(req.body);
    if (oldUser) {
      throw new BadRequestException(ALREADY_REGISTERED_ERROR);
    }

    return await this.authService.register(req.body);
  }
}
