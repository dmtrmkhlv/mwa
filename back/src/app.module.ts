import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { GiftModule } from './gift/gift.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    AuthModule,
    EventModule,
    GiftModule,
  ],
})
export class AppModule {}
