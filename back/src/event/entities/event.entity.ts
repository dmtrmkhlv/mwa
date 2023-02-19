import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GiftEntity } from 'src/gift/entities/gift.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity('event')
export class EventEntity {
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

  @ManyToOne((type) => UserEntity, (user) => user.events)
  user: UserEntity;

  @OneToMany((type) => GiftEntity, (gift) => gift.event, { eager: true })
  @JoinColumn()
  gifts: GiftEntity[];
}
