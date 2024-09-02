import { Request, Response } from "express";

class CreateSaleController{
    async handle(request: Request, response:Response){
        const {productId, clientID,userId,quantity,value} = request.body;
        
        console.log(productId)
        console.log(clientID)
        console.log(userId)
        console.log(quantity)
        console.log(value)

        const clients = {
            productId: productId,
            clientID: clientID,
            userId:userId,
            quantity:quantity,
            value:value
        }

        return response.json({message:"Registro de compra incluído com sucesso!"})
    }
}
export{CreateSaleController}