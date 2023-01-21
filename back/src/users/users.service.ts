import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dataSource from 'db/data-source';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);

  }

  async findAll() {
    const userRepository = dataSource.getRepository(User);
    const users = await userRepository.find({
      relations: {
        events: true,
      },
    });
    return users;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ username });

  }

  async update(username: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(username);
    return this.usersRepository.save({ ...user, ...updateUserDto });
  }

  async remove(username: string) {
    const user = await this.findOne(username);
    return this.usersRepository.remove(user);
  }
}
