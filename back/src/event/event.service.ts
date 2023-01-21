import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dataSource from 'db/data-source';
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
    const newEvent = new Event();
    newEvent.title = createEventDto.title;
    newEvent.description = createEventDto.description;
    return await this.eventsRepository.save(newEvent);
  }

  async findAll() {
    const eventRepository = dataSource.getRepository(Event);
    const events = await eventRepository.find({
      relations: {
        user: true,
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
