import { Request, Response } from "express";
import { UpdateUserService } from "../../service/user/UpdateUserService";
class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;
    const id= request.params.id; 
    const user = 
    {
       name:name,
       email:email,
       admin:admin,
       password:password
    };
    const userService = new UpdateUserService()
    const ret = userService.execute(user)
    return response.json(ret)    
  }
}
export { UpdateUserController };