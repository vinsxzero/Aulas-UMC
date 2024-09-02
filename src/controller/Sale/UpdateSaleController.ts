import { Request, Response } from "express";

class UpdateSaleController{
    async handle(request:Request, response:Response){
        const {productId, clientID,userId,quantity,value} = request.body;
        const id = request.params.id
        console.log(productId)
        console.log(clientID)
        console.log(userId)
        console.log(quantity)
        console.log(value)
        const client = {
            productId: productId,
            clientID: clientID,
            userId:userId,
            quantity:quantity,
            value:value
        }
        return response.json({message:"Atualizado com sucesso!"})
    }
}
export{UpdateSaleController}