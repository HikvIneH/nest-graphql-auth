import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

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

  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1,
    };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  async findOne(email: string) {
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
}
