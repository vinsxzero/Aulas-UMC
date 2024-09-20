import { Request, Response } from "express";
import { UpdateProductService } from "../../service/product/UpdateProductService";

class UpdateProductController{
    async handle(request:Request, response:Response){
        const {name, description, price, categoryId, } = request.body;
        const id = request.params.id
        
        const product = {
            name: name,
            description:description,
            price:price,
            categoryId:categoryId,
        }
        
        const productService = new UpdateProductService
        const ret = await productService.execute(product)

        return response.json(ret)
    }

}

export{UpdateProductController}