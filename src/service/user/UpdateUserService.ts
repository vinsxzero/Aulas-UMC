import { hash } from "bcryptjs";
import { IUserRequest } from "../../interface/IUserRequest";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repository/UserRepositories";

class UpdateUserService{
    async execute({id, name, email, admin = false, password}: IUserRequest){
        if(!email){
            throw new Error("Email incorreto");
        }
        if(!password){
            throw new Error("Senha incorreta")
        }
        const passwordHash = await hash(password, 8)
        const usersRepository = getCustomRepository(UsersRepositories)
        const user = await usersRepository.findOne({id})
        if(!user){
            throw new Error("User doesn't exist")
        }
        user.name = name
        user.admin = admin
        user.password = passwordHash
        const ret = await usersRepository.update(id, user)
        return ret
    }
}
export{UpdateUserService}