import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '../../event/entities/event.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;
  @Column('text')
  firstName: string;
  @OneToMany(() => Event, (event) => event.creator)
  events: Event[];
}
