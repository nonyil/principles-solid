import { PostgressUsersRepository } from './../../repositories/implementations/PostgressUsersRepository';
import { MailTrapMailProvider } from './../../providers/implementations/MailTrapMailProvider';
import { CreateUserUseCase } from './CreateUserUserCase';
import { CreateUserController } from './CreateUserController';

const mailTrapMailProvider = new MailTrapMailProvider();
const  portgressUsersRepository = new PostgressUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  portgressUsersRepository,
  mailTrapMailProvider,
)

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
