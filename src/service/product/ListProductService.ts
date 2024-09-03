class ListProductService{
    async execute(){
        const product = [
            {
                name: "Caderno",
                description: "Caderno.", 
                price: "10",
                categoryId: "05"
            }
        ]
        return product
    }
}