import { Request,Response } from "express";
class UpdateCategoriesController{
    async handle (request: Request , response: Response){
        const {name, description}= request.body
        const id = request.params.id
        console.log(name)
        console.log(description)
        const category = {
            name: name,
            description: description
        }
        return response.json({message:"Registro editado com sucesso"})
    }
}
export{UpdateCategoriesController}