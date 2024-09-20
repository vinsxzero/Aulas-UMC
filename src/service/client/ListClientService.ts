import { getCustomRepository } from "typeorm"
import { ClientRepositories } from "../../repository/ClientRepositories"

class ListClientService{
    async execute(){
        const clientRepositories = getCustomRepository(ClientRepositories)
        const client = await clientRepositories.createQueryBuilder()
        .getMany()
        return client
    }

}
export {ListClientService}