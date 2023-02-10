import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { CreateMailDto } from './dto/create-mail.dto';

@Controller('api/v1/mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @ApiOperation({ summary: 'Send Email' })
  @ApiBearerAuth()
  @Post('send')
  async sendEmail(@Body() body: CreateMailDto) {
    return await this.mailService.sendMail(body.email, body.name);
  }
}
