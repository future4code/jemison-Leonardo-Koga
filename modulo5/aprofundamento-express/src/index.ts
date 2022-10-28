import express, { Request, Response } from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

//--------Exercicio1---------

app.get("/ping",(req:Request, res:Response)=>{
    res.send("Pong! 🏓")
})

//--------Exercicio2---------

type Todos = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//--------Exercicio3---------

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

app.get("/do",(req:Request, res: Response)=>{
    const feitas = toDo.filter(tarefa =>{
        return tarefa.completed
    })
    res.status(200).send(feitas)
})

//--------Exercicio5---------

// app.post("/afazeres",(req: Request, res: Response)=>{
//     if(req.body.userId && req.body.id && req.body.title) {
//         const afazer: Todos = {
//             userId: Number(req.params.userId),
//             id: Number(req.params.id),
//             title: (req.params.title),
//             completed: false
//         }
//         const novaTarefa: Todos[] = [...toDo, afazer]
//         res.status(200).send(novaTarefa)
//     }else{
//         res.status(404).send("Falta informação, tente de novo")
//     }
// })


//--------Exercicio6---------

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

// app.delete("/afazeres/:toDoId/delete",(req: Request, res: Response)=>{
//     if(req.params.toDoId){
//         const novaTarefa: Todos[] = toDo.filter(tarefa=>{
//             return tarefa.id !== Number(req.params.toDoId)
//         })
//         res.status(200).send(novaTarefa)
//     }else{
//         res.status(400).send("Falta informação, tente de novo")
//     }
// })

//--------Exercicio8---------

app.get("/:userId/afazeres",(req: Request, res: Response)=>{
    
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});