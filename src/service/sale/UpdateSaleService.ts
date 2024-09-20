import { getCustomRepository } from "typeorm"
import { ISaleRequest } from "../../interface/ISaleRequest"
import { SalesRepositories } from "../../repository/SaleRepositories"
import { validate } from "uuid"

class UpdateSaleService{
    async execute({id, productId, clientID, userId, quantity, value}: ISaleRequest){
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
        const sale = await saleRepositories.findOne({id})
        if(!productId){
            throw new Error("Esta venda nao existe")
        }
        sale.productId = productId
        sale.clientID = clientID
        sale.userId = userId
        sale.quantity = quantity
        sale.value = value
        const ret = saleRepositories.update(id, sale)
        return ret
    }
}
export{ UpdateSaleService }
