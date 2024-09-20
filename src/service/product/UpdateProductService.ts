import { getCustomRepository } from "typeorm";
import { IProductRequest } from "../../interface/IProductRequest";
import { ProductRepositories } from "../../repository/ProductRepositories";
import { isDate } from "util";
import { userInfo } from "os";


class UpdateProductService{
    async execute({id, name, description, price, categoryId}:IProductRequest){

        if (!name){
            throw new Error("Não foi possível cadastrar")
        }
        if (!price){
            throw new Error("Não foi possível cadastrar")
        }
        if (!categoryId){
            throw new Error("Não foi possível cadastrar")
        }
        const productRepositories = getCustomRepository(ProductRepositories)
        const product = await productRepositories.findOne({id})
        if (!id){
         throw new Error("Este produto nao foi encontrado")
        }
        product.name = name
        product.description =  description
        product.price = price
        product.categoryId = categoryId
        const ret = await productRepositories.update(id, product)
        return ret
    }
}
export {UpdateProductService}
    