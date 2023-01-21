import { User } from 'src/users/entities/user.entity';

export class CreateEventDto {
  id_event: number;
  creator: string;
  title: string;
  description: string;
  user: User;
}
