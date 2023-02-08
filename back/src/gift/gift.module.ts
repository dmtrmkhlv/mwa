import { EventModule } from './../event/event.module';
import { Module } from '@nestjs/common';
import { GiftService } from './gift.service';
import { GiftController } from './gift.controller';
import { UserEntity } from 'src/users/entities/user.entity';
import { EventEntity } from 'src/event/entities/event.entity';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GiftEntity } from './entities/gift.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GiftEntity, EventEntity, UserEntity]),
    UsersModule,
    EventModule,
  ],
  controllers: [GiftController],
  providers: [GiftService],
})
export class GiftModule {}
