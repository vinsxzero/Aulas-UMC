import { Request, Response } from "express";
import { ListSaleService } from "../../service/sale/ListSaleService";

class ListSaleController{
    async handle(request:Request, response:Response){
        const saleService = new ListSaleService
        const ret = await saleService.execute()
        return response.json(ret)
    }
}
export{ListSaleController}