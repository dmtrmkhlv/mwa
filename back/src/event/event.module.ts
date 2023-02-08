import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from './entities/event.entity';

import { UsersModule } from '../users/users.module';
import { UserEntity } from 'src/users/entities/user.entity';
import { GiftEntity } from 'src/gift/entities/gift.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EventEntity, UserEntity, GiftEntity]),
    UsersModule,
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
