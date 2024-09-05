import { Request, Response } from "express";

class ListSaleController{
    async handle(request:Request, response:Response){
        const sales =[
            {
                productId: "",
                clientId: "",
                userId: "",
                quantity:"",
                value:""
            }
        ]
    }
}
export{ListSaleController}