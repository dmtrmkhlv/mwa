
import { Injectable, Request } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dataSource from 'db/data-source';
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

  async create(createEventDto: CreateEventDto) {
    const newEvent = this.eventsRepository.create(createEventDto);
    return await this.eventsRepository.save(newEvent);
  }

  async findAll(@Request() req) {
    console.log(req.user);
    const user = this.usersRepository.findOneBy({
      userId: req.user.userId,
    });
    console.log(await user);
    const events = this.eventsRepository.find({
      relations: {
        creator: true,
      },
      where: {
        creator: await user,

      },
    });
    return events;
  }

  findOne(id: number) {
    return this.eventsRepository.findOneBy({ id_event: id });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.findOne(id);
    return this.eventsRepository.save({ ...event, ...updateEventDto });
  }

  async remove(id: number) {
    const event = await this.findOne(id);
    return this.eventsRepository.remove(event);
  }
}
