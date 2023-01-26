import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '../../event/entities/event.entity';

@Entity('gift')
export class Gift {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  eventId: string;

  @Column('varchar')
  userCreatorId: string;

  @Column('varchar')
  userBookId: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  link: string;

  @Column('varchar')
  description: string;

  @ManyToOne(() => Event, (event) => event.gifts)
  event: Event;

  @ManyToOne(() => User, (user) => user.gifts)
  user: User;
}
