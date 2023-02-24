import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMailDto } from './dto/create-mail.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(createMail: CreateMailDto) {
    try {
      return await this.mailerService.sendMail({
        to: createMail.emailTo,
        subject: createMail.subject,
        template: `./${createMail.templateName}`,
        context: createMail.context,
      });
    } catch (error) {
      return error;
    }
  }
}
