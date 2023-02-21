import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileEntity } from './entities/profile.entity';
import { jwtConstants } from 'src/auth/constants';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private profileRepository: Repository<ProfileEntity>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly mailService: MailService,
  ) {}
  async create() {
    const newProfile = this.profileRepository.create();
    return await this.profileRepository.save(newProfile);
  }

  async update(updateProfileDto: UpdateProfileDto): Promise<ProfileEntity> {
    return await this.profileRepository.save(updateProfileDto);
  }

  async remove(profile: CreateProfileDto): Promise<ProfileEntity | undefined> {
    return await this.profileRepository.remove(profile);
  }
  async findProfileByEmail(email: string): Promise<ProfileEntity | undefined> {
    return this.profileRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async sendConfirmEmailLink(email: string) {
    const payload = { email };
    const token = this.jwtService.sign(payload, {
      secret: jwtConstants.secret,
      expiresIn: `${this.configService.get('EXPIRESIN') || 60}s`,
    });

    const url = `${this.configService.get(
      'EMAIL_CONFIRMATION_URL',
    )}?token=${token}`;

    const mailInfo = {
      emailTo: email,
      subject: 'Email confirmation',
      templateName: 'emailConfirm',
      context: {
        name: 'User Name',
        url: url,
      },
    };
    return await this.mailService.sendMail(mailInfo);
  }

  async confirmEmail(token: string) {
    try {
      const payload = await this.jwtService.verify(token, {
        secret: jwtConstants.secret, //this.configService.get('JWT_VERIFICATION_TOKEN_SECRET'),
      });

      if (typeof payload === 'object' && 'email' in payload) {
        const profileToConfirm = await this.findProfileByEmail(payload.email);
        profileToConfirm.emailIsActive = true;
        return this.update(profileToConfirm);
      }
      throw new BadRequestException();
    } catch (error) {
      if (error?.name === 'TokenExpiredError') {
        throw new BadRequestException('Email confirmation token expired');
      }
      throw new BadRequestException('Bad confirmation token');
    }
  }
}
