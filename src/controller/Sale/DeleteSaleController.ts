import { Request, Response } from "express";

class DeleteSaleController{
    async handle(request:Request, response: Response){
        const id = request.params.id;
        return response.json({message:"Resultado deletado com sucesso!"})
    }
}
export {DeleteSaleController}