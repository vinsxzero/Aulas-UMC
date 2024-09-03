class DeleteCategoryService{
    async execute(id: any){
        if (!id){
            throw new Error("Não foi possível deletar")
        }
        return {message: "Registro deletado com sucesso"}
    }
}
export{DeleteCategoryService}