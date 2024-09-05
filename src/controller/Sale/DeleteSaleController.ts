import { Request, Response } from "express";

class DeleteSaleController{
    async handle(request:Request, response:Response){
        const id = request.params.id
        return response.json({message:"Registro deletado com sucesso!"})
    }
}
export {DeleteSaleController}