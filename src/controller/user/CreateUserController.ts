import { Request, Response } from "express";
import { CreateUserService } from "../../service/user/CreateUserService";
class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;
   
   const user = 
   {
      name:name,
      email:email,
      admin:admin,
      password:password
    };    
    const userService = new CreateUserService
    const ret = await userService.execute(user)
    return response.json(ret);
  }
}
export { CreateUserController };