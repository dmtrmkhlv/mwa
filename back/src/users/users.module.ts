import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { EventEntity } from 'src/event/entities/event.entity';
import { EventService } from 'src/event/event.service';
import { GiftService } from 'src/gift/gift.service';
import { GiftEntity } from 'src/gift/entities/gift.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, EventEntity, GiftEntity])],
  controllers: [UsersController],
  providers: [UsersService, EventService, GiftService],
  exports: [UsersService],
})
export class UsersModule {}
