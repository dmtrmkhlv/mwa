import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServerResponse } from 'src/dto/server-response.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventsRepository: Repository<Event>,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(userId: string, createEventDto: CreateEventDto) {
    const newEventCreate = this.eventsRepository.create(createEventDto);
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

  findOneById(id: string): Promise<Event | undefined> {
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
  ): Promise<Event | ServerResponse> {
    const event = await this.findOneById(id);
    if (event.userCreatorId === userId) {
      return this.eventsRepository.save({ ...event, ...updateEventDto });
    }
    return { statusCode: 403, message: 'Запрещено обновлять чужие Event' };
  }

  async remove(userId: string, id: string): Promise<Event | ServerResponse> {
    const event = await this.findOneById(id);
    if (event.userCreatorId === userId) {
      return this.eventsRepository.remove(event);
    }
    return { statusCode: 403, message: 'Запрещено удалять чужие Event' };
  }
}
