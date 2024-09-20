import { getCustomRepository } from "typeorm"
import { ClientRepositories } from "../../repository/ClientRepositories"

class DeleteClientService{
    async execute(id:any){
        if (!id){
            throw new Error("Registro não pode ser deletado")
        }
        const clientRepositories = getCustomRepository(ClientRepositories)
        const client = await clientRepositories.delete(id)
        return {message: "Registro deletado com sucesso"}
    }
}
export {DeleteClientService}