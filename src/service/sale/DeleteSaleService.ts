class DeleteSaleService{
    async execute(id: any){
        if(!id){
            throw new Error("Não foi possivel deletar")
        }
        return {message: "Registro deletado com sucesso"}
    }
}
export {DeleteSaleService}