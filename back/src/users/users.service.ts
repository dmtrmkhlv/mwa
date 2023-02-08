import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { EventService } from 'src/event/event.service';
import { GiftEntity } from 'src/gift/entities/gift.entity';
import { GiftService } from 'src/gift/gift.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(GiftEntity)
    private giftRepository: Repository<GiftEntity>,
    private readonly eventService: EventService,
    private readonly giftService: GiftService,
  ) {}
  async create(
    createUserDto: CreateUserDto,
  ): Promise<UserEntity | HttpException> {
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

  async findAll(): Promise<UserEntity[] | undefined> {
    return await this.usersRepository.find();
  }

  async findOneById(id: string): Promise<UserEntity | undefined> {
    return await this.usersRepository.findOneBy({ id });
  }

  async findOneByUsername(username: string): Promise<UserEntity | undefined> {
    return this.usersRepository.findOneBy({ username });
  }

  async update(
    userId: string,
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserEntity | HttpException> {
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

  async remove(userId: string): Promise<UserEntity | undefined> {
    const giftBookedByUser = await this.giftRepository.find({
      where: {
        userBookId: userId,
      },
    });
    if (giftBookedByUser.length > 0) {
      for (const gift of giftBookedByUser) {
        await this.giftService.unBook(userId, gift.id);
      }
    }
    const user = await this.findOneById(userId);
    if (user.events.length > 0) {
      for (const event of user.events) {
        await this.eventService.remove(userId, event.id);
      }
    }
    return await this.usersRepository.remove(user);
  }
}
