import { getCustomRepository } from "typeorm"
import {IClientRequest} from "../../interface/IClientRequest"
import { ClientRepositories } from "../../repository/ClientRepositories"
import { Product } from "../../entities/product"

class CreateClientService{
    async execute({name, email, cpf, address, phone}:IClientRequest){
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
        const client = clientRepositories.create({
            name,
            email,
            cpf,
            address,
            phone
        })
        await clientRepositories.save(client)
        return client
    }
}
