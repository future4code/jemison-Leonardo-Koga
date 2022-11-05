import express, { Request, Response } from "express"
import { users } from "./data"
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

//-------type para user--------
type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

//------ENUM-------------
enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}


//---------Exercicio1------------
app.get("/users", (req: Request, resp: Response)=>{
    const userList = users.map((user)=>{
        return user.name 
    })
    resp.status(200).send(userList)
})

//a. Qual método HTTP você deve utilizar para isso?
// O método get

//b. Como você indicaria a entidade que está sendo manipulada?
// "/users"

//---------Exercicio2------------
app.get("/users/:type", (req: Request, res: Response)=>{
    let errorCode = 400

    try{
        const desiredType: string = req.params.type
        const verifyType = (desiredType.toUpperCase() === "ADMIN" || desiredType.toUpperCase() === "NORMAL")

        if(!desiredType || !verifyType){
            errorCode = 404
            throw new Error("User type not found");
        }

        const desiredTypeList = users.filter((user)=>{
            return user.type.toUpperCase() === desiredType.toUpperCase()
        })

        if(!desiredType){
            errorCode = 404
            throw new Error("O users found with this requirement."); 
        }

        res.status(200).send(desiredTypeList)

    }catch(error: any){
        res.status(errorCode).send(error.message)
    }
})

//a. Como você passou os parâmetros de type para a requisição? Por quê?
//Usei um ENUM, para poder ter apenas dois valore "ADMIN" e "NORMAL"

//b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
//Criei uma váriavel "verifyType" que verifica e so aceita se o type enviado pelo usuário por params for ADMIN ou NORMAL

//---------Exercicio3------------
app.get("/user", (req: Request, res: Response)=>{
    let errorCode = 400

    try{
        const desiredUser = req.query.name
        if(!desiredUser){
            errorCode = 411
            throw new Error("Please inform a user");
            
        }

        const findUser = users.find((users)=>{
            return users.name.toUpperCase() === desiredUser.toString().toUpperCase()
        })
            if(!findUser){
                errorCode= 404
                throw new Error("User not found");
                
            }
            res.status(200).send(findUser)

    }catch(error:any){
        res.status(errorCode).send(error.message)
    }
})

//a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?
//Tipo query

//b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
//OK

//---------Exercicio4------------

app.post("/user", (req: Request, res: Response)=>{

let errorCode = 400

try{
    const {name, email, type, age} = req.body

    const correctCaseType = type.toUpperCase()

    const verifyEmail = users.find((user)=>{
        return user.email.toLowerCase() === email.toLowerCase()
    })

    const verifyType = (correctCaseType === "ADMIN" || correctCaseType === "NORMAL")

    if(verifyEmail){
        errorCode = 409
        throw new Error("Email already registered in our database");
    }

    if(!verifyType){
        errorCode = 417
        throw new Error("Please use type as ADMIN ou NORMAL");    
    }

    const newUser: user = {
        id: Math.random(),
        name: name,
        email: email,
        type: correctCaseType,
        age: age
    }

    users.push(newUser)

    res.status(200).send("User created successfully")

}catch(error: any){
    res.status(errorCode).send(error.message)
}

})

//a. Mude o método do endpoint para `PUT`. O que mudou?
// Nada muda, apenas a troca da palavra

//b. Você considera o método `PUT` apropriado para esta transação? Por quê?
//Não, pois o PUT ele atualiza, para criar melhor utilizar o POST

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});