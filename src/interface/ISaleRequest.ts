interface ISaleRequest{
    id?: string,
    userId:string
    productId: string,
    clientID: string,
    quantity:string,
    value:string,
}
export{ISaleRequest}