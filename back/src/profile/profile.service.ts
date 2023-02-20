import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileEntity } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private profileRepository: Repository<ProfileEntity>,
  ) {}
  async create() {
    const newProfile = this.profileRepository.create();
    return await this.profileRepository.save(newProfile);
  }

  async update(updateProfileDto: UpdateProfileDto): Promise<ProfileEntity> {
    return await this.profileRepository.save(updateProfileDto);
  }

  async remove(profile: CreateProfileDto): Promise<ProfileEntity | undefined> {
    return await this.profileRepository.remove(profile);
  }
}
