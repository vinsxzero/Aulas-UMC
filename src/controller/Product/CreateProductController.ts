import { Request, Response } from "express";

class CreateProductController{
    async handle(request: Request, response:Response){
        const {name, description, price, categoryId, } = request.body;
        
        console.log(name)
        console.log(description)
        console.log(price)
        console.log(categoryId)

        const clients = {
        name: name,
        description:description,
        price:price,
        categoryId:categoryId
        }

        return response.json({message:"Registro de produto incluído com sucesso!"})
    }
}
export{CreateProductController}