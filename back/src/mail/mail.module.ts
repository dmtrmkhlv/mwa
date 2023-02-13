import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { resolve } from 'path';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        transport: `smtps://${config.get('MAIL_USER')}:${config.get(
          'MAIL_PASSWORD',
        )}@smtp.mail.ru`,
        // transport: {
        //   service: 'gmail',
        //   host: config.get('MAIL_HOST'),
        //   port: 465,
        //   secure: true,
        //   auth: {
        //     user: config.get('MAIL_USER'),
        //     pass: config.get('MAIL_PASSWORD'),
        //   },
        // },
        defaults: {
          from: `"No Reply" <${config.get('MAIL_FROM')}>`,
        },
        template: {
          dir: resolve(__dirname, '..', '..', 'mail/templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
