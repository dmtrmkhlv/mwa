import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity, UserEntity])],
  controllers: [ProfileController],
  providers: [ProfileService, JwtService],
  exports: [ProfileService],
})
export class ProfileModule {}
