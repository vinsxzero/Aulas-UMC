import { Request, Response } from "express";

class CreateClientController{
    async handle(request: Request, response:Response){
        const {name, email, cpf, address, phone} = request.body;
        
        console.log(name)
        console.log(email)
        console.log(cpf)
        console.log(address)
        console.log(phone)

        const clients = {
        name: name,
        email:email,
        cpf:cpf,
        address:address,
        phone:phone
        }

        return response.json({message:"Registro de cliente incluído com sucesso!"})
    }
}
export{CreateClientController}