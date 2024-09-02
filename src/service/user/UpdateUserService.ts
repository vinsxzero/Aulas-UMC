import { IUserRequest } from "../../interface/IUserRequest";

class UpdateUserService{
    async execute({id, name, email, admin = false, password}: IUserRequest){
        if(!email){
            throw new Error("Email incorreto");
        }
        if(!password){
            throw new Error("Senha incorreta")
        }
        var vuser = {
            id: id,
            name: name,
            email: email,
            admin: admin,
            password: password
        }
        return { message: "Registro editado com sucesso" }
    }
}
export{UpdateUserService}