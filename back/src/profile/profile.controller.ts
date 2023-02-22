import {
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  Param,
  Request,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('api/v1/auth/user-profile')
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
  sendConfirmEmailLink(@Param('email') email: string, @Request() req) {
    return this.profileService.sendConfirmEmailLink(req.user.userId, email);
  }

  @ApiOperation({ summary: 'Service entrypoint to confirm Email' })
  @Get()
  confirmEmail(@Query('token') token: string) {
    return this.profileService.confirmEmail(token);
  }
}
