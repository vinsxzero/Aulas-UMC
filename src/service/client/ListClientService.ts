class ListClientService{
    async execute(){
        const client = [
            {
                name: "Vinicius", 
                email: "vini123@email.com",
                cpf: "12345678910", 
                address: "Rua oito", 
                phone: "12 34567 8910"
            }
        ]
        return client
    }

}
export {ListClientService}