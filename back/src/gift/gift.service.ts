import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';
import { GiftEntity } from './entities/gift.entity';
import { EventEntity } from 'src/event/entities/event.entity';
import { MailService } from 'src/mail/mail.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GiftService {
  constructor(
    @InjectRepository(GiftEntity)
    private giftRepository: Repository<GiftEntity>,
    @InjectRepository(EventEntity)
    private eventsRepository: Repository<EventEntity>,
    private mailService: MailService,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private readonly configService: ConfigService,
  ) {}
  async create(
    eventId: string,
    createGiftDto: CreateGiftDto,
  ): Promise<GiftEntity> {
    const newGiftCreate = this.giftRepository.create(createGiftDto);
    const newGift = await this.giftRepository.save(newGiftCreate);

    const getEvent = await this.eventsRepository.findOne({
      where: { id: eventId },
      relations: ['gifts'],
    });

    getEvent.gifts.push(newGiftCreate);

    await this.eventsRepository.save(getEvent);

    return newGift;
  }

  async findAll(userId: string): Promise<GiftEntity[] | undefined> {
    const gifts = this.giftRepository.find({
      where: {
        userCreatorId: userId,
      },
    });
    return await gifts;
  }

  findOne(id: string): Promise<GiftEntity | undefined> {
    return this.giftRepository.findOneBy({ id: id });
  }

  async update(
    userId: string,
    id: string,
    updateGiftDto: UpdateGiftDto,
  ): Promise<GiftEntity | undefined> {
    const gift = await this.findOne(id);
    if (gift.userCreatorId === userId) {
      return this.giftRepository.save({ ...gift, ...updateGiftDto });
    }
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Запрещено обновлять чужие Gift',
      },
      403,
    );
  }

  async remove(userId: string, id: string): Promise<GiftEntity | undefined> {
    const gift = await this.findOne(id);
    if (gift.userCreatorId === userId) {
      return this.giftRepository.remove(gift);
    }
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Запрещено удалять чужие Gift',
      },
      403,
    );
  }

  async book(userId: string, id: string): Promise<GiftEntity | undefined> {
    const gift = await this.findOne(id);

    if (gift.userBookId.length > 0) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Подарок уже забронирован',
        },
        403,
      );
    }

    if (userId !== gift.userCreatorId) {
      const user = await this.usersRepository.findOne({
        where: {
          id: gift.userCreatorId,
        },
        relations: {
          profile: true,
        },
      });
      gift.userBookId = userId;
      if (user.profile.emailIsActive) {
        const name =
          user.profile.firstname || user.profile.lastname
            ? user.profile.firstname + ' ' + user.profile.lastname
            : user.username;
        const url =
          this.configService.get('NODE_ENV') === 'development'
            ? `${this.configService.get('HOST_URL_DEV')}/api/v1/event/${
                gift.eventId
              }`
            : `${this.configService.get('HOST_URL')}/api/v1/event/${
                gift.eventId
              }`;
        const mailInfo = {
          emailTo: 'mywishlistapp@mail.ru',
          subject: 'Кто-то забронировал ваш подарок!',
          templateName: 'bookGift',
          context: {
            name: name,
            giftTitle: gift.title,
            url: url,
          },
        };
        await this.mailService.sendMail(mailInfo);
      }
      return this.giftRepository.save({ ...gift });
    } else {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Вы не можете бронировать подарок из своего списка',
        },
        403,
      );
    }
  }

  async unBook(userId: string, id: string): Promise<GiftEntity | undefined> {
    const gift = await this.findOne(id);

    if (userId === gift.userBookId) {
      gift.userBookId = '';
      return this.giftRepository.save({ ...gift });
    } else {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error:
            'Вы не можете отменить бронь подарка, забронированного другим человеком',
        },
        403,
      );
    }
  }
}
