import { Request, Response } from "express";
class ListProductController{
    async handle(request:Request, response:Response){
        const categories = [
            {
                name: "NOTEBOOK",
                description:"NOTEBOOK I5",
                price:"2590,00",
                categoryId:"TECNOLOGIA",
            }
        ]
    }
}
export {ListProductController}