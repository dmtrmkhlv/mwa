import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EventEntity } from '../../event/entities/event.entity';
import { ProfileEntity } from 'src/profile/entities/profile.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  username: string;

  @Column('varchar')
  password: string;

  @OneToMany((type) => EventEntity, (event) => event.user, { eager: true })
  @JoinColumn()
  events: EventEntity[];

  @OneToOne(() => ProfileEntity, {
    cascade: true,
  })
  @JoinColumn()
  profile: ProfileEntity;
}
