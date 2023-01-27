import { Gift } from 'src/gift/entities/gift.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Event } from '../../event/entities/event.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  username: string;

  @Column('varchar')
  password: string;

  // @OneToMany(() => Event, (event) => event.user)
  // events: Event[];

  // @OneToMany(() => Gift, (gift) => gift.user)
  // gifts: Gift[];

  @OneToMany((type) => Event, (event) => event.user, { eager: true })
  @JoinColumn()
  events: Event[];
}
