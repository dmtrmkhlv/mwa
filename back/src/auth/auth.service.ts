import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

import { User } from '../users/entities/user.entity';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async findUser(body: AuthDto) {
    return await await this.usersService.findOne(body.username);
  }

  async login(user: any) {
    const payload = { username: user.username, userId: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: any) {
    this.usersService.create({
      username: user.username,
      password: user.password,
    });
    return { statusCode: 200, message: 'Регистрация прошла успешно' };
  }
}
