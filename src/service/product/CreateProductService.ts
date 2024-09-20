import { getCustomRepository } from "typeorm";
import { IProductRequest } from "../../interface/IProductRequest";
import { ProductRepositories } from "../../repository/ProductRepositories";
import { SalesRepositories } from "../../repository/SaleRepositories";

class CreateProductService{
    async execute({name, description, price, categoryId}:IProductRequest){
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
        const prod = productRepositories.create({
            name,
            description,
            price,
            categoryId
        })
        await productRepositories.save(prod)
        return prod
    }
}
export{CreateProductService}
