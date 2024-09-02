import { Request , Response } from "express";
class DeleteCategoriesController{
    async handle (request: Request, response: Response){
        const id = request.params.id;
        return response.json({message: "Excluído com sucesso"})
    }
}
export {DeleteCategoriesController}