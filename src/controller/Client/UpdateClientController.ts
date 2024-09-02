import { Request, Response } from "express";

class UpdateClientController{
    async handle(request:Request, response:Response){
        const {name, email, cpf, address, phone} = request.body;
        const id = request.params.id
        console.log(name)
        console.log(email)
        console.log(cpf)
        console.log(address)
        console.log(phone)
        const client = {
            name: name,
            email: email,
            cpf: cpf,
            address: address,
            phone: phone
        }
        return response.json({message:"Atualizado com sucesso!"})
    }
}
export{UpdateClientController}