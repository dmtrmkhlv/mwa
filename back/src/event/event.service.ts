import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GiftEntity } from 'src/gift/entities/gift.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventEntity } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private eventsRepository: Repository<EventEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(GiftEntity)
    private giftRepository: Repository<GiftEntity>,
  ) {}

  async create(userId: string, createEventDto: CreateEventDto) {
    const newEventCreate = this.eventsRepository.create(createEventDto);
    newEventCreate.userCreatorId = userId;
    newEventCreate.gifts = [];

    const newEvent = await this.eventsRepository.save(newEventCreate);
    const user = await this.usersRepository.findOne({
      where: { id: userId },
      relations: ['events'],
    });
    user.events.push(newEventCreate);
    await this.usersRepository.save(user);
    return newEvent;
  }

  async findAll(userId: string) {
    const events = this.eventsRepository.find({
      relations: {
        gifts: true,
      },
      where: {
        userCreatorId: userId,
      },
    });
    return await events;
  }

  findOneById(id: string): Promise<EventEntity | undefined> {
    return this.eventsRepository.findOneBy({ id: id });
  }

  async findOneByEventId(id: string) {
    const event = this.eventsRepository.find({
      relations: {
        gifts: true,
      },
      where: {
        id: id,
      },
    });
    return await event;
  }

  async update(
    userId: string,
    id: string,
    updateEventDto: UpdateEventDto,
  ): Promise<EventEntity> {
    const event = await this.findOneById(id);
    if (event.userCreatorId === userId) {
      return this.eventsRepository.save({ ...event, ...updateEventDto });
    }
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Запрещено обновлять чужие Event',
      },
      403,
    );
  }

  async remove(userId: string, id: string): Promise<EventEntity> {
    const event = await this.findOneById(id);
    if (event.userCreatorId === userId) {
      await this.giftRepository.delete({
        eventId: id,
      });
      return this.eventsRepository.remove(event);
    }
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Запрещено удалять чужие Event',
      },
      403,
    );
  }

  async active(userId: string, id: string): Promise<EventEntity | undefined> {
    const event = await this.findOneById(id);
    event.isActive = true;
    if (event.userCreatorId === userId) {
      return this.eventsRepository.save({ ...event });
    }
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Запрещено обновлять чужие Event',
      },
      403,
    );
  }

  async deactivate(
    userId: string,
    id: string,
  ): Promise<EventEntity | undefined> {
    const event = await this.findOneById(id);
    event.isActive = false;
    if (event.userCreatorId === userId) {
      return this.eventsRepository.save({ ...event });
    }
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Запрещено обновлять чужие Event',
      },
      403,
    );
  }
}
