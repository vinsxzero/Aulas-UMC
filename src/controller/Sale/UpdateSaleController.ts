import { Request, Response } from "express";
import { UpdateSaleService } from "../../service/sale/UpdateSaleService";

class UpdateSaleController{
    async handle(request:Request, response:Response){
        const {productId, clientID,userId,quantity,value} = request.body;
        const id = request.params.id

        const sale = {
            productId: productId,
            clientID: clientID,
            userId:userId,
            quantity:quantity,
            value:value
        }
        const saleService = new UpdateSaleService
        const ret = await saleService.execute(sale)
        return response.json(ret)
    }
}
export{UpdateSaleController}