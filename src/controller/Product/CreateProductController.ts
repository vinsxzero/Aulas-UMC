import { Request, Response } from "express";
import { CreateProductService } from "../../service/product/CreateProductService";

class CreateProductController{
    async handle(request: Request, response:Response){
        const {name, description, price, categoryId, } = request.body;

        const product = {
        name: name,
        description:description,
        price:price,
        categoryId:categoryId
        }

        const productService = new CreateProductService
        const ret = await productService.execute(product)

        return response.json(ret)
    }
}
export{CreateProductController}