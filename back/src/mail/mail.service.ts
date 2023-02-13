import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(email: string, name: string) {
    console.log('Отправляется письмо установки');
    return await this.mailerService
      .sendMail({
        to: email,
        subject: 'Greeting from NestJS NodeMailer',
        template: './email',
        context: {
          name: name,
        },
      })
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });

    await this.mailerService.sendMail({
      from: `5259472@gmail.com`,
      to: email,
      subject: 'Greeting from NestJS NodeMailer',
      template: './email',
      context: {
        name: name,
      },
    });
  }
}
