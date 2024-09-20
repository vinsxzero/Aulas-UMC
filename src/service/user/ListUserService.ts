import { UsersRepositories } from "../../repository/UserRepositories";

class ListUserService {
    async execute() {
        const userRepositories = new UsersRepositories
        const users = await userRepositories.createQueryBuilder("user")
        .getMany()
        return users
    }
  }
  export { ListUserService };
  