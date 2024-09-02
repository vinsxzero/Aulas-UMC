import { Request, Response } from "express";
class ListUserController {
    async handle(request: Request, response: Response) {    
      const users = [ 
        {          
            name:"Fabio",
            email:"fabio@gmail.com",admin:false,
            password:"1234"             
      }, {          
        name:"Marcio",
        email:"marcio@gmail.com", admin:false,
        password:"1234"             
     }     
    ];
    return response.json(users);
    }
  } 
  export { ListUserController };