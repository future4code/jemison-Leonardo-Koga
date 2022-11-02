import { produto } from './type';
import { produtos } from './data';
import express, { Request, Response } from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())


//---------------Exercício1--------------------

app.get("/test",(req: Request, res: Response)=>{
    res.status(200).send("Servidor rodando na porta (colocar porta)!”")
} )

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

//---------------Exercício4--------------------

let products: produto[] = produtos

app.post("/products",(req: Request, res: Response)=>{

    try{
        if(!req.body.name && !req.body.price){
            const erro= new Error("Precisa passar nome e preço")
            erro.name="namePriceNotFound"
            throw erro
        }
        if(req.body.name !== "string"){
            const erro= new Error("O nome precisa ser uma string")
            erro.name="namePriceNotFound"
            throw erro
        }
        if(req.body.price !== "number"){
            const erro= new Error("O preço precisa ser uma Number")
            erro.name="namePriceNotFound"
            throw erro
        }
        if(req.body.price <= 0){
            const erro= new Error("O preço deve ser maior que 0")
            erro.name="namePriceNotFound"
            throw erro
           
        }
    }

    const newProducts = {
        id: Date.now().toString(), ...req.body,
        name: (req.body.name),
        price: Number(req.body.price)
    }
    products = [...products, newProducts]
    res.status(201).send(products)
})

//---------------Exercício5--------------------

app.get("/allproducts", (req: Request, res: Response)=>{
    const products = produtos.map((produto)=>{
        return produto.name
    })
    
    res.status(200).send(products)
})

//---------------Exercício6--------------------



//---------------Exercício7--------------------
//peguei por query o id do produto que quero deletar,
//fiz um find para encontrar o Id do produto dentro da array,
//depois através do Id iria fazer um filter para retornar o primeiro Id, mais esta dando erro


// app.delete("/products/produtos", (req: Request, res: Response)=>{
 
//     const productId = Number(req.query.id)

//     if(!productId){
//         res.status(400).send("Coloque um ID existente")
//     }

//     let productsFilter = produtos.find((produto)=>{
//         return Number(produto.id) === productId
//     })

//     let productsActual

//     if(productsFilter){
//         productsActual = productsFilter.filter((produto)=>{
//             return Number(produto.id) !== productId
//         })
//     }else{
//         res.status(400).send("Usuario não encontrado")
//     }

//     productsFilter=productsActual
//     res.status(200).send(productsFilter)


// })
