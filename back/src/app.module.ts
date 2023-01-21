import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UsersModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
