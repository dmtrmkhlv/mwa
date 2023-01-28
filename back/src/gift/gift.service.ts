import { ServerResponse } from './../dto/server-response.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';
import { Gift } from './entities/gift.entity';
import { Event } from 'src/event/entities/event.entity';

@Injectable()
export class GiftService {
  constructor(
    @InjectRepository(Gift) private giftRepository: Repository<Gift>,
    @InjectRepository(Event) private eventsRepository: Repository<Event>,
  ) {}
  async create(eventId: string, createGiftDto: CreateGiftDto): Promise<Gift> {
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

  async findAll(userId: string): Promise<Gift[] | undefined> {
    const gifts = this.giftRepository.find({
      where: {
        userCreatorId: userId,
      },
    });
    return await gifts;
  }

  findOne(id: string): Promise<Gift | undefined> {
    return this.giftRepository.findOneBy({ id: id });
  }

  async update(
    userId: string,
    id: string,
    updateGiftDto: UpdateGiftDto,
  ): Promise<Gift | undefined> {
    const gift = await this.findOne(id);
    if (gift.userCreatorId === userId) {
      return this.giftRepository.save({ ...gift, ...updateGiftDto });
    }
    // return { statusCode: 403, message: 'Запрещено обновлять чужие Gift' };
  }

  async remove(userId: string, id: string): Promise<Gift | undefined> {
    const gift = await this.findOne(id);
    if (gift.userCreatorId === userId) {
      return this.giftRepository.remove(gift);
    }
    // return { statusCode: 403, message: 'Запрещено удалять чужие Gift' };
  }

  async book(
    userId: string,
    id: string,
  ): Promise<Gift | undefined | ServerResponse> {
    const gift = await this.findOne(id);
    console.log(gift.userCreatorId);

    if (gift.userBookId.length > 0) {
      return {
        statusCode: 403,
        message: 'Подарок уже забронирован',
      };
    }

    if (userId !== gift.userCreatorId) {
      gift.userBookId = userId;
      return this.giftRepository.save({ ...gift });
    } else {
      return {
        statusCode: 403,
        message: 'Вы не можете бронировать подарок из своего списка',
      };
    }
  }

  async unBook(
    userId: string,
    id: string,
  ): Promise<Gift | undefined | ServerResponse> {
    const gift = await this.findOne(id);

    if (userId === gift.userBookId) {
      gift.userBookId = '';
      return this.giftRepository.save({ ...gift });
    } else {
      return {
        statusCode: 403,
        message:
          'Вы не можете отменить бронь подарка, забронированного другим человеком',
      };
    }
  }
}
