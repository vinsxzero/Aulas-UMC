import { Request, Response } from "express";

class CreateClientController{
    async handle(request: Request, response:Response){
        const {name, email, cpf, address, phone} = request.body;
        
        

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