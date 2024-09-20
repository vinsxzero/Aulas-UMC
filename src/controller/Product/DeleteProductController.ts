import { Request, Response } from "express";
import { DeleteProductService } from "../../service/product/DeleteProductService";

class DeleteProductController{
    async handle(request:Request, response: Response){
        const id = request.params.id;
        const productService = new DeleteProductService
        const ret = await productService.execute(id)
        return response.json(ret)
    }
}
export {DeleteProductController}