import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('event')
export class Event {
  @PrimaryGeneratedColumn()
  id_event: number;
  @Column('text')
  creator: string;
  @Column('text')
  title: string;
  @Column('text')
  description: string;
  @ManyToOne(() => User, (user) => user.events)
  user: User;
}
