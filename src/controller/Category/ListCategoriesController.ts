import { Request, Response } from "express";
class ListCategoriesController {
    async handle(request: Request, response: Response) {    
        const categories = [ 
            {          
            name:"Fabio",
            description:"Sim"             
            },
            {          
            name:"Marcio",
            description:"Não"             
            }     
        ];
        return response.json(categories);
    }
} 
export { ListCategoriesController };