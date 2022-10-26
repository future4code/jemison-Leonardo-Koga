import express, { Request, response, Response } from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

// -------------Exercício 1--------------

app.get('/',(req: Request,res: Response)=>{
    res.status(201).send("Hello from Express")
})

// -------------Exercício 2--------------

type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
}

// -------------Exercício 3--------------

const users: User[] = [
    {
        id: 1,
        name: "Leonardo",
        phone: "11999999",
        email: "leo@leo.com.br",
        website: "www.leo.com.br",
    },
    {
        id: 2,
        name: "Juliane",
        phone: "1188888888",
        email: "ju@ju.com.br",
        website: "www.ju.com.br",
    }
]

// -------------Exercício 4--------------

app.get('/users', (req: Request, resp: Response)=> {
    resp.status(200).send(users)
})

// -------------Exercício 5--------------

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

// -------------Exercício 6--------------

// Acredito que criando um array fora do array de usuarios fica mais limpo o código e mais fácil de acessar

const posts: Post[] = [
    {
        id: 100,
        title: "Codando",
        body: "Codando a vida",
        userId: 77
    },
    {
        id: 200,
        title: "42",
        body: "A vida, o universo e tudo mais",
        userId: 66
    }
]

// -------------Exercício 7--------------

app.get('/posts',(req: Request, resp: Response)=> {
    resp.status(200).send(posts)
})

// -------------Exercício 8--------------
//Construa um endpoint que retorne os posts de um usuário em particular.
//Use o JSONPlaceholder como exemplo para a construção da rota.

// app.get('/posts/:userId',(req: Request, resp: Response)=>{
//     const id = req.params.userId
//     console.log(id);

//     const userPost = posts.filter((post) => {
//         return post.id === Number(id)
//     })
//     console.log(userPost);
    
//     const post = posts.filter((i) => {
//         if(!id){
//             return i.body
//         }else if(!userPost){
//             return "ID não encontrado"
//         }else{
//             return i.userId === Number(id)
//         }
//     })
    
//     response.status(200).send(post)
// })

app.get('/:userId/posts',(req: Request, resp: Response)=>{
    resp.send(posts.filter(post => {
        return post.userId === Number(req.params.userId)
    }))
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});