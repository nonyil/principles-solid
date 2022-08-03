import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
  ) {}
  async execute(data: ICreateUserRequestDTO) {
    const userAlredyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlredyExists) {
      throw new Error("User already exists.");
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe do meu app",
        email: "equipe@meuapp.com"
      },
      subject: "Seja bem-vindo",
      body: "<p>Seja bem-vindo ao app</p>",
    })
  }
}