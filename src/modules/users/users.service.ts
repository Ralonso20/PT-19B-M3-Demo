//create class UserService

import { IUser } from './users.interfaces';
import { CreateUserDTO } from './dtos/create.user.dto';
import { CredentialsService } from '../auth/credentials.service';
import { ICredentials } from '../auth/credentials.interefaces';

export class UserService {
  constructor(
    private readonly usersArray: Array<IUser>,
    private readonly credentialsService: CredentialsService,
  ) {}

  async getUsers(): Promise<Array<IUser>> {
    return this.usersArray;
  }

  async getUserById(id: number): Promise<IUser | null> {
    return this.usersArray.find((u) => u.id === id) || null;
  }

  async registerUser(newUser: CreateUserDTO): Promise<IUser> {
    const newCredentiasl: ICredentials = {
      username: newUser.email,
      password: newUser.password,
    };
    const credentialsId = await this.credentialsService.create(newCredentiasl);

    const user: IUser = {
      ...newUser,
      id: this.usersArray.length + 1,
      credentialsID: credentialsId,
    };

    this.usersArray.push(user);
    return user;
  }

  async login(username: string, password: string): Promise<number | undefined> {
    return this.credentialsService.login(username, password);
  }
}
