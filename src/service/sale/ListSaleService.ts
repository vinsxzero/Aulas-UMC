

class ListSaleService{
    async execute(){
        const sales = [
            {
                productId: "Caderno",
                clientID: "07", 
                userId: "01",
                quantity: "01",
                value:"25,00"
            },
            {
                productId: "lápis",
                clientID: "08", 
                userId: "01",
                quantity: "10",
                value:"5,00"
            }
        ]
        return sales
    }
}
export {ListSaleService}