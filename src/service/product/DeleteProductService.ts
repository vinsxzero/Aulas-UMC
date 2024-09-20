import { getCustomRepository } from "typeorm"
import { ProductRepositories } from "../../repository/ProductRepositories"

class DeleteProductService{
    async execute(id:any){
        const productRepositories = getCustomRepository(ProductRepositories)
        const product = await productRepositories.findOne(id) 
        if(!id){
            throw new Error("Nao foi possivel deletar")
        }
        await productRepositories.delete(id)
        return {message: "Deletado com sucesso"}
    }
}
export{ DeleteProductService }