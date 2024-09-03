class DeleteClientService{
    async execute(id:any){
        if (!id){
            throw new Error("Registro não pode ser deletado")
        }
        return {message: "Registro deletado com sucesso"}
    }
}
export {DeleteClientService}