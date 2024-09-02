import { compare } from "bcryptjs";
import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IAuthenticateRequest } from "../../interface/IAuthenticateRequest";
class AuthenticationUserService{
    async execute({email, password}: IAuthenticateRequest){
        const passwordHash = await hash("umc2024", 8);
        const passwordMatch = await compare(password, passwordHash)
        if(!passwordMatch){
            throw new Error("Password incorrect")
        }
        // gerar token
        const token = sign(
            {
                email:email,
            },
            "Umc-EngSoftware-2024",
            {
                subject: ("others"),
                expiresIn: "1d"
            }
        );
        return token;
    }
}
export {AuthenticationUserService}