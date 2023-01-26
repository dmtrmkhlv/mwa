import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Event) private eventsRepository: Repository<Event>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(newUser);
  }

  async findAll() {
    const user = this.usersRepository.find({
      relations: {
        events: true,
        gifts: true,
      },
      // where: {
      //   userCreatorId: user,
      // },
    });

    return await user;
  }

  async findOneById(id: string) {
    const user = this.usersRepository.find({
      relations: {
        events: true,
        gifts: true,
      },
      where: {
        id: id,
      },
    });
    return await user;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ username });
  }

  /**
   * Update, remove работают не корректно
   */

  async update(userId: string, id: string, updateUserDto: UpdateUserDto) {
    if (userId === id) {
      const user = await this.findOneById(id);
      return this.usersRepository.save({ ...user, ...updateUserDto });
    }
    return { statusCode: 403, message: 'Запрещено обновлять чужой Аккаунт' };
  }

  async remove(userId: string, id: string) {
    if (userId === id) {
      const user = await this.findOne(id);
      return this.usersRepository.remove(user);
    }
    return { statusCode: 403, message: 'Запрещено удалять чужой Аккаунт' };
  }
}
