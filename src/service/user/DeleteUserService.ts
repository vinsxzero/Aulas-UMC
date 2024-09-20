import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repository/UserRepositories";

class DeleteUserService {
  //fazer um método com o id no parametro para deletar a tupla a partir do ID
  async execute(id:any) {
    if (!id) {
      throw new Error("Id Incorrect")
    }
    //abrir um objeto com o repositório
    const usersRepository = getCustomRepository(UsersRepositories)
    //pedir para achar o user através do ID
    const user = await usersRepository.findOne({id})
    //se nao existir, exibir mensagem
    if(!user){
      throw new Error("User does not exist")
    }
    //deletar através do id com o repository
    await usersRepository.delete(id)
    
    var messageDelete = {
      message: "Registro excluído com sucesso"
    }
    return messageDelete
  }
}
export { DeleteUserService };
