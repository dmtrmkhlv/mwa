import {
  Column,
  Entity,
  JoinColumn,
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
  dateCreate: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  description: string;

  @Column({ type: 'boolean', default: () => true })
  isActive: boolean;

  @ManyToOne((type) => User, (user) => user.events)
  user: User;

  @OneToMany((type) => Gift, (gift) => gift.event, { eager: true })
  @JoinColumn()
  gifts: Gift[];
}
