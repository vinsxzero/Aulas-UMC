import { Request, Response } from "express";
import { DeleteUserService } from "../../service/user/DeleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response) {

    const id= request.params.id;
    const userService = new DeleteUserService
    const ret = userService.execute(id)
    return response.json({message:"Registro Excluido com Sucesso"});
  }
  
}

export { DeleteUserController };