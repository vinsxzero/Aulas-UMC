import { ICategoryRequest } from "../../interface/ICategoryRequest";

class CreateCategoryService{
    async execute({name, description}:ICategoryRequest){
        if(!name){
            throw new Error("Essa categoria nao existe")
        }
        var vcategory = {
            name: name, description: description
        }
        return { message: "Registro incluído com sucesso" }
    }
}

