import express, { Request, Response } from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

//--------Exercicio1---------
//retorna mensagem

app.get("/ping",(req:Request, res:Response)=>{
    res.send("Pong! 🏓")
})

//--------Exercicio2---------
// criação de um type

type Todos = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//--------Exercicio3---------
// criação de um array com typagem "Todos"

const toDo: Todos[] = [
    {
        userId: 7,
        id: 1,
        title: "Exercicios",
        completed: false,
    },
    {
        userId: 5,
        id: 13,
        title: "Estudar",
        completed: true,
        },

]

//--------Exercicio4---------
//retorna todo os afazeres do array anterior, usando o metodo get, usando o filter dentro da array


app.get("/do",(req:Request, res: Response)=>{
    const feitas = toDo.filter(tarefa =>{
        return tarefa.completed
    })
    res.status(200).send(feitas)
})

//--------Exercicio5---------
//retorna o array atualizado através do metodo post, usando um if e passando os dados pelo body, tipados pelo type Todos


app.post("/afazeres",(req: Request, res: Response)=>{
    if(req.body.userId && req.body.id && req.body.title) {
        const afazer: Todos = {
            userId: Number(req.body.userId),
            id: Number(req.body.id),
            title: req.body.title,
            completed: false
        }
        const novaTarefa: Todos[] = [...toDo, afazer]
        res.status(200).send(novaTarefa)
    }else{
        res.status(404).send("Falta informação, tente de novo")
    }
})


//--------Exercicio6---------
//altera status do afazer, usando o metodo put, atraves de um map no array


app.put("/afazeres/:toDoid/change",(req: Request, res: Response)=>{
    const novaTarefa = toDo.map(tarefa =>{
        if(Number(req.params.toDoId) === tarefa.id) {
            return {
                ...tarefa, completed: !tarefa.completed
            }
        }else{
            return tarefa
        }
        
    })
    res.status(200).send(novaTarefa)
})

//--------Exercicio7---------
//deleta um afazer atraves do metodo delete, passando o id por params, e fazendo um filter na array

app.delete("/afazeres/:toDoId/delete",(req: Request, res: Response)=>{
    if(req.params.toDoId){
        const novaTarefa: Todos[] = toDo.filter(tarefa=>{
            return tarefa.id !== Number(req.params.toDoId)
        })
        res.status(200).send(novaTarefa)
    }else{
        res.status(400).send("Falta informação, tente de novo")
    }
})

//--------Exercicio8---------
//retorna todos os fazeres de um usuario passado atraves de params e usando um filter dentro do array 


app.get("/:userId/afazeres",(req: Request, res: Response)=>{
    const user: Todos[] = toDo.filter(tarefa => {
        return tarefa.userId === Number(req.params.userId)
    })
    const others: Todos[] = toDo.filter(tarefa=>{
        return tarefa.userId !== Number(req.params.userId)
    })
    res.status(200).send({user})
})


//--------Exercicio9---------
//Documentação Postman

//https://documenter.getpostman.com/view/21113707/2s8YKCH3Yt



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});