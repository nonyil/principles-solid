import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgressUsersRepository implements IUsersRepository {
  private users: User[] = [];
  // repositório fake para testes

  async findByEmail(email: string): Promise<User> {
    const users = await this.users.find( user => user.email === email )
    return users;
  }

  async save(user: User): Promise<void> {
    await this.users.push(user)
  }
}
