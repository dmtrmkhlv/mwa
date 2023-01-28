import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Gift } from 'src/gift/entities/gift.entity';
import { User } from '../../users/entities/user.entity';

@Entity('event')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  userCreatorId: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  date: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  description: string;

  @OneToMany(() => Gift, (gift) => gift.event)
  gifts: Gift[];

  @ManyToOne(() => User, (user) => user.events)
  user: User;
}
