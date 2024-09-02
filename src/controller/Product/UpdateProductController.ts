import { Request, Response } from "express";

class UpdateProductController{
    async handle(request:Request, response:Response){
        const {name, description, price, categoryId, } = request.body;
        const id = request.params.id
        console.log(name)
        console.log(description)
        console.log(price)
        console.log(categoryId)

        const clients = {
        name: name,
        description:description,
        price:price,
        categoryId:categoryId,
        }

        return response.json({message:"Registro de produto incluído com sucesso!"})
    }

}

export{UpdateProductController}