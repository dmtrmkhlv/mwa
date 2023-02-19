import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMailDto } from './dto/create-mail.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(createMail: CreateMailDto) {
    return await this.mailerService
      .sendMail({
        // from: createMail.emailFrom
        //   ? `${createMail.senderName || 'No Reply'} <${createMail.emailFrom}>`
        //   : undefined,
        to: createMail.emailTo,
        subject: createMail.subject,
        template: `./${createMail.templateName}`,
        context: createMail.context,
      })
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }
}
