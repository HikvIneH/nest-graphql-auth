import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      firstName: 'Aditya',
      lastName: 'Rifky',
      email: 'aditya.rifky@email.com',
      password: 'password',
    },
    {
      id: 2,
      firstName: 'Thomas',
      lastName: 'Anderson',
      email: 'thomas.a.anderson@email.com',
      password: 'password',
    },
  ];

  async create(createUserInput: CreateUserInput) {
    if (!this.isPasswordValid(createUserInput.password)) {
      console.log('here');
      throw new UnprocessableEntityException(
        'Minimum 8 character for password.',
      );
    }
    const user = {
      ...createUserInput,
      id: this.users.length + 1,
    };
    let data = undefined;

    data = await this.findOneByEmail(createUserInput.email);

    if (data) {
      throw new UnprocessableEntityException('Email already exists.');
    }

    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  async findOne(id: number) {
    const res = this.users.filter((el) => {
      return el.id == id;
    });

    return res[0];
  }

  async findOneByEmail(email: string) {
    const res = this.users.filter((el) => {
      return el.email == email;
    });

    return res[0];
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  isPasswordValid(password) {
    return password.length >= 8;
  }
}
