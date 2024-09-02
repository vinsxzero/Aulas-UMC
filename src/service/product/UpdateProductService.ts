import { IProductRequest } from "../../interface/IProductRequest";


class UpdateProductRequest{
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
        var vproduct = {
            name:name, description:description, price:price, categoryId:categoryId
        }
        return {message: "Registro editado com sucesso"}
    }
}
export {UpdateProductRequest}
    