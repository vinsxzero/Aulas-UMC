import { Response, Request } from "express";

class CreateSaleController{
    async handle(request: Request, response: Response){
        const{productId, clientId, userId, quantity, value} = request.body
        console.log(productId)
        console.log(clientId)
        console.log(userId)
        console.log(quantity)
        console.log(value)

        const sale = {
            productId: productId,
            clientId: clientId,
            userId: userId,
            quantity:quantity,
            value:value
        }
        
        return response.json("Registro incluído com sucesso!")
    }
}
export {CreateSaleController}