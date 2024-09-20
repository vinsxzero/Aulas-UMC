import { getCustomRepository } from "typeorm"
import { ProductRepositories } from "../../repository/ProductRepositories"

class ListProductService{
    async execute(){
        const productRepositories = getCustomRepository(ProductRepositories)
        const product = await productRepositories.createQueryBuilder()
        .getMany()
        return product
    }
}
export { ListProductService}