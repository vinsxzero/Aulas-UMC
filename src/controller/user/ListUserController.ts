import { Request, Response } from "express";
import { ListUserService } from "../../service/user/ListUserService";
class ListUserController {
    async handle(request: Request, response: Response) {    
      const userService = new ListUserService
      const ret = userService.execute()
      return ret
    }
  } 
  export { ListUserController };