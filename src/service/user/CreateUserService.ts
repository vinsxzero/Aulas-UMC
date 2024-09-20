import { IUserRequest } from "../../interface/IUserRequest";
import { hash } from "bcryptjs";
import { UsersRepositories } from "../../repository/UserRepositories";
import { getCustomRepository } from "typeorm";
class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }
    if (!password) {
      throw new Error("Password incorrect");
    }
        
    const usersRepository = getCustomRepository(UsersRepositories);
    const user = usersRepository.create({
        name,
        email,
        admin,
        password
    });
    await usersRepository.save(user);  
    return user;
}
}
export { CreateUserService };
