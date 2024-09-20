import { getCustomRepository } from "typeorm"
import { SalesRepositories } from "../../repository/SaleRepositories"


class ListSaleService{
    async execute(){
        const salesRepositories = getCustomRepository(SalesRepositories)
        const sales = await salesRepositories.createQueryBuilder()
        .getMany()
        return sales
    }
}
export {ListSaleService}