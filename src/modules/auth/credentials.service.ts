//create CredentialsService class native
import { ICredentials } from './credentials.interefaces';
export class CredentialsService {
  constructor(private readonly credentialsArray: Array<ICredentials>) {}

  async create(credentials: ICredentials): Promise<number> {
    const id = this.credentialsArray.push({
      ...credentials,
      id: this.credentialsArray.length + 1,
    });
    return id;
  }

  async login(username: string, password: string): Promise<number | undefined> {
    const credentials = this.credentialsArray.find(
      (c) => c.username == username && c.password == password,
    );
    if (!credentials) {
      throw new Error('Invalid credentials');
    }
    return credentials.id;
  }
}
