import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EventEntity } from '../../event/entities/event.entity';

@Entity('gift')
export class GiftEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  eventId: string;

  @Column('varchar')
  userCreatorId: string;

  @Column({ default: '' })
  userBookId: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  link: string;

  @Column('varchar')
  description: string;

  @ManyToOne((type) => EventEntity, (event) => event.gifts)
  event: EventEntity;
}
