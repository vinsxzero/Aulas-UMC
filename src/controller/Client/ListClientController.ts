import { Request, Response } from "express";
class ListClientController{
    async handle(request:Request, response:Response){
        const categories = [
            {
                name:"Vinicius",
                email: "vini2004@gmail.com",
                cpf:" 000.000.000-00",
                address: "Rua Antonio Ferreira Lima, 84",
                phone: "(11) 98264-5593"
            },
            {
                name:"Tonho",
                email: "tonho2004@gmail.com",
                cpf:" 000.000.000-01",
                address: "Rua Tonho Ferreira Lima, 84",
                phone: "(11) 98264-5594"
            }
        ]
    }
}
export {ListClientController}