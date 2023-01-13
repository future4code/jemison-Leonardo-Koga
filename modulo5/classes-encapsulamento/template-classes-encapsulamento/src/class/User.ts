export class User{
    constructor (private id:string, private email:string, private password:string){
        this.id=id;
        this.email=email;
        this.password=password
    }
    public getId():string {
        return this.id;
    }
    public getEmail():string {
        return this.email;
    }
    public getPassword():string {
        return this.password;
    }
    public setId(newId:string):void {
        this.id=newId;
    }
    public setEmail(newEmail:string):void {
        this.email=newEmail;
    }
    public setPassword(newPasword:string):void {
        this.password=newPasword;
    }
    
}