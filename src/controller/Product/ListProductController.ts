import { Request, Response } from "express";
import { ListProductService } from "../../service/product/ListProductService";
class ListProductController{
    async handle(request:Request, response:Response){
        const productService = new ListProductService
        const ret = await productService.execute()
        return response.json(ret)
    }
}
export {ListProductController}