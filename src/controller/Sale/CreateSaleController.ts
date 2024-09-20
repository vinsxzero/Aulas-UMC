import { Response, Request } from "express";
import { CreateSaleService } from "../../service/sale/CreateSaleService";
import { Sale } from "../../entities/sale";

class CreateSaleController{
    async handle(request: Request, response: Response){
        const{productId,userId, clientId, quantity, value} = request.body

        const sale = {
            userId:userId,
            productId: productId,
            clientID: clientId,
            quantity:quantity,
            value:value,
        }
        const saleService = new CreateSaleService
        const ret = await saleService.execute(sale)
        return response.json(ret)
    }
}
export {CreateSaleController}