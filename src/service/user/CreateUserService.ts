import { IUserRequest } from "../../interface/IUserRequest";
import {hash} from "bcryptjs";
class CreateUserService{
    async execute({name, email, admin = false, password}: IUserRequest){
        if(!email){
            throw new Error("Email incorreto");
        }
        if(!password){
            throw new Error("Senha incorreta")
        }
        var vuser = {
            name: name, email: email, admin: admin, password: password
        }
    const passwordHash = await hash(password, 8)
    return { message: "Registro incluído com sucesso" }
    }
}
