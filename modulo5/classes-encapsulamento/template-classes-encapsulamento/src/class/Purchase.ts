export class Purchase{
    constructor (private id:string, private userId:string, private productId:string, 
        private quantify:number, private totalPrice:number){
        this.id=id;
        this.userId=userId;
        this.productId=productId;
        this.quantify=quantify;
        this.totalPrice=totalPrice
    }
}