import { User } from 'src/users/entities/user.entity';

export class CreateEventDto {
  title: string;
  description: string;
  creator: User;
}
