import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '../../event/entities/event.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()

  userId: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Event, (event) => event.creator)
  events!: Event[];

}
