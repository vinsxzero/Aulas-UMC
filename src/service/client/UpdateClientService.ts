import { getCustomRepository } from "typeorm";
import { IClientRequest } from "../../interface/IClientRequest";
import { ClientRepositories } from "../../repository/ClientRepositories";


class UpdateClientRequest{
    async execute({id, name, email, cpf, address, phone}:IClientRequest){
        if (!name){
            throw new Error("Este cliente não consta no banco de dados")
        }
        if (!cpf){
            throw new Error("Este cliente não consta no banco de dados")
        }
        if (!address){
            throw new Error("Este cliente não consta no banco de dados")
        }
        if (!phone){
            throw new Error("Este cliente não consta no banco de dados")
        }
        const clientRepositories = getCustomRepository(ClientRepositories)
        const client = await clientRepositories.findOne({id})
        if (!id){
            throw new Error("Nao foi encontrado este cliente")
        }
        client.name = name
        client.email = email
        client.cpf = cpf
        client.address = address
        client.phone = phone
        const ret = await clientRepositories.update(id, client)
        return ret
    }
}
export {UpdateClientRequest}