import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user && user.password === password) {
      const { password, ...result } = user;

      return result;
    }
  }

  async login(loginUserInput: LoginUserInput) {
    const user = await this.userService.findOne(loginUserInput.email);

    const { password, ...result } = user;

    return {
      access_token: 'jwt',
      user: result,
    };
  }
}
