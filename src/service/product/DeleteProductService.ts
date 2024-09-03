class DeleteProductService{
    async execute(id:any){
        if(!id){
            throw new Error("Nao foi possivel deletar")
        }
        return{message: "Deletado com sucesso"}
    }
}
export{ DeleteProductService }