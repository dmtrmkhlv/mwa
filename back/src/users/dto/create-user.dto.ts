import { Event } from 'src/event/entities/event.entity';

export class CreateUserDto {
  id: number;
  firstName: string;
  events: Event[];
}
