import { Controller, Get, Post, Query, UseGuards, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @ApiOperation({ summary: 'Send сonfirmation Email Link' })
  @ApiResponse({
    status: 200,
    description: 'Link has been sent.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('confirm-email/:email')
  sendConfirmEmailLink(@Param('email') email: string) {
    return this.profileService.sendConfirmEmailLink(email);
  }

  @Get()
  confirmEmail(@Query('token') token: string) {
    return this.profileService.confirmEmail(token);
  }
}
