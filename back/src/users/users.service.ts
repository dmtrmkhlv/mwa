import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    const userByUsername = await this.findOneByUsername(createUserDto.username);

    if (userByUsername) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: `Пользователь с username:${createUserDto.username} уже существует`,
        },
        403,
      );
    }
    const newUser = this.usersRepository.create(createUserDto);
    newUser.events = [];
    return this.usersRepository.save(newUser);
  }

  async findAll(): Promise<User[] | undefined> {
    return await this.usersRepository.find();
  }

  async findOneById(id: string): Promise<User | undefined> {
    const user = this.usersRepository.findOneBy({ id });
    return await user;
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOneBy({ username });
  }

  /**
   * Update, remove работают не корректно
   */

  async update(userId: string, id: string, updateUserDto: UpdateUserDto) {
    if (userId === id) {
      const user = await this.findOneById(id);
      if (updateUserDto.username !== user.username) {
        const findUserByUserName = await this.findOneByUsername(
          updateUserDto.username,
        );
        if (findUserByUserName) {
          throw new HttpException(
            {
              status: HttpStatus.FORBIDDEN,
              error: `Пользователь с username:${updateUserDto.username} уже существует`,
            },
            403,
          );
        }
      }
      return this.usersRepository.save({ ...user, ...updateUserDto });
    }
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Запрещено обновлять чужой Аккаунт',
      },
      403,
    );
  }

  async remove(userId: string, id: string) {
    if (userId === id) {
      const user = await this.findOneById(id);
      return this.usersRepository.remove(user);
    }
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'Запрещено удалять чужой Аккаунт',
      },
      403,
    );
  }
}
