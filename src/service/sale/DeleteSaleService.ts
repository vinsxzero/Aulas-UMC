import { getCustomRepository } from "typeorm"
import { SalesRepositories } from "../../repository/SaleRepositories"

class DeleteSaleService{
    async execute(id: any){
        const salesRepositories = getCustomRepository(SalesRepositories)
        const sale = await salesRepositories.findOne(id)
        if(!id){
            throw new Error("Não foi possivel deletar")
        }
        await salesRepositories.delete(id)
        return {message: "Registro deletado com sucesso"}
    }
}
export {DeleteSaleService}