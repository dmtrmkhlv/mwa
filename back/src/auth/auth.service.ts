import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async findUser(body: AuthDto) {
    return await this.usersService.findOneByUsername(body.username);
  }

  async login(body: AuthDto) {
    const user = await this.findUser(body);
    if (user && user.password === body.password) {
      const payload = { username: user.username, userId: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: `username или password введены не верно`,
      },
      403,
    );
  }

  async register(createUserDto: CreateUserDto) {
    this.usersService.create({
      username: createUserDto.username,
      password: createUserDto.password,
    });
    return { statusCode: 200, message: 'Регистрация прошла успешно' };
  }
}
