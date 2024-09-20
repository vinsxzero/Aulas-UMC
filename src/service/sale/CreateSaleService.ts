import { getCustomRepository } from "typeorm"
import {ISaleRequest} from "../../interface/ISaleRequest"
import { SalesRepositories } from "../../repository/SaleRepositories"


class CreateSaleService{
    async execute({productId, clientID, userId, quantity, value}: ISaleRequest){
        if (!userId){
            throw new Error("Nao foi possível cadastrar")
        }
        if (!productId){
            throw new Error("N deu")
        }
        if(!clientID){
            throw new Error("Nao foi possivel cadastrar")
        }
        const saleRepositories = getCustomRepository(SalesRepositories)
        const sale = saleRepositories.create({
                userId,
                productId,
                clientID, 
                quantity,
                value
        })
        await saleRepositories.save(sale)
        return sale
    }
}
export {CreateSaleService}