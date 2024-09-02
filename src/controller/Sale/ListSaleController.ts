import { Request, Response } from "express";
class ListSaleController{
    async handle(request:Request, response:Response){
        const categories = [
            {
                productId: "01",
                clientID: "06",
                userId:"03",
                quantity:"26",
                value:"100000000000"
            }
        ]
    }
}
export {ListSaleController}