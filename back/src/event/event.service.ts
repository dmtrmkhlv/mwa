import { Injectable, Request } from '@nestjs/common';
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
  ) {}

  async create(createEventDto: CreateEventDto) {
    const newEvent = this.eventsRepository.create(createEventDto);
    return await this.eventsRepository.save(newEvent);
  }

  async findAll(@Request() req) {
    const events = this.eventsRepository.find({
      relations: {
        gifts: true,
      },
      where: {
        userCreatorId: req.user.userId,
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
