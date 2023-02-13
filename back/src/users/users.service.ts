import fetch from 'node-fetch';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { EventService } from 'src/event/event.service';
import { GiftEntity } from 'src/gift/entities/gift.entity';
import { GiftService } from 'src/gift/gift.service';
import { MailService } from 'src/mail/mail.service';
// const nodeFetch = fetch as typeof fetch;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    @InjectRepository(GiftEntity)
    private giftRepository: Repository<GiftEntity>,
    private readonly eventService: EventService,
    private readonly giftService: GiftService,
    private mailService: MailService,
  ) {}

  async generateFakeUsers() {
    const fakeData = {
      users: [],
      gifts: [],
      events: [
        {
          title: 'Birthday',
          description:
            'My birthday is coming! Here is a sample list of what I would like to receive.',
        },
        {
          title: 'New dwelling',
          description:
            'We have finally moved into a new house! We invite you to a housewarming party. These things would be very useful to us.',
        },
        {
          title: 'New Year',
          description: 'Hello Santa! Please give me all these gifts!',
        },
        {
          title: 'Wedding anniversary',
          description: 'We invite you to our celebration',
        },
      ],
    };
    const fakeUsers = await fetch('https://fakestoreapi.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        fakeData.users = users;
      });
    const fakeGifts = await fetch('https://fakestoreapi.com/products')
      .then((response) => {
        return response.json();
      })
      .then((gifts) => {
        fakeData.gifts = gifts;
      });

    const createFakeUsers = async (fakeUser, fakeData) => {
      /**
       * Создаем FakeUser
       */
      const fakeUsername =
        fakeUser.username + (Math.random() * 1000).toFixed(0);
      try {
        await this.create({
          username: fakeUsername,
          password: fakeUser.password,
        });
      } catch (error) {
        console.log(error);
      }
      const newFakeUser = await this.findOneByUsername(fakeUsername);
      /**
       * Создаем FakeEvents
       */
      const fakeEventCount = Math.round(Math.random() * 10);
      for (let i = 0; i < fakeEventCount; i++) {
        const fakeEvent =
          fakeData.events[Math.floor(Math.random() * fakeData.events.length)];
        const newEvent = await this.eventService.create(newFakeUser.id, {
          title: fakeEvent.title,
          description: fakeEvent.description,
          userCreatorId: newFakeUser.id,
          isActive: Math.random() < 0.5,
        });
        /**
         * Создаем FakeGifts
         */
        const fakeGiftCount = Math.round(Math.random() * 10);
        for (let i = 0; i < fakeGiftCount; i++) {
          const fakeGift =
            fakeData.gifts[Math.floor(Math.random() * fakeData.gifts.length)];
          try {
            await this.giftService.create(newEvent.id, {
              title: fakeGift.title,
              description: fakeGift.description,
              link: fakeGift.image,
              eventId: newEvent.id,
              userCreatorId: newFakeUser.id,
              userBookId: '',
            });
          } catch (error) {
            console.log(error);
          }
        }
        const getAllUsers = await this.findAll();
        const idOfAllUsers: string[] = getAllUsers.map((user) => {
          if (user.id !== newFakeUser.id) {
            return user.id;
          }
        });
        const bookRandomUserGift = async (idOfAllUsers: string[]) => {
          if (idOfAllUsers.length === 0) {
            return;
          }
          const randomUserId =
            idOfAllUsers[Math.floor(Math.random() * idOfAllUsers.length)];
          const allGiftsOfRandomUser = await this.giftService.findAll(
            randomUserId,
          );
          const randomGift =
            allGiftsOfRandomUser[
              Math.floor(Math.random() * allGiftsOfRandomUser.length)
            ];

          if (randomGift && randomGift.id !== newFakeUser.id) {
            const gift = await this.giftService.findOne(randomGift.id);
            if (gift.userBookId.length === 0) {
              try {
                await this.giftService.book(newFakeUser.id, randomGift.id);
              } catch (error) {
                console.log(error);
              }
            } else {
              await bookRandomUserGift(idOfAllUsers);
            }
            const index = idOfAllUsers.indexOf(randomGift.id);
            idOfAllUsers.splice(index, 1);
          }
        };
        await bookRandomUserGift(idOfAllUsers);
      }
    };

    Promise.all([fakeUsers, fakeGifts]).then(
      async () => {
        for (const fakeUser of fakeData.users) {
          await createFakeUsers(fakeUser, fakeData);
        }
        console.log({ fakeUsersGenerated: 'ok' });
      },
      (reason) => {
        console.log(reason);
      },
    );
    return '10 fake Users generated';
  }

  async deleteAllUsers() {
    const allUsers = await this.findAll();
    for (const user of allUsers) {
      await this.remove(user.id);
    }
    return await this.findAll();
  }

  async test() {
    return await this.mailService.sendMail('mywishlistapp@mail.ru', 'name');
  }

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
