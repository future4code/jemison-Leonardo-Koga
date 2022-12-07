import { Request, Response } from "express"
import connection from "../database/connection"
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { Product } from "../class/Product"
import { Purchase } from "../class/Purchase"

export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id = req.body.id
        const userId = req.body.userId
        const productId = req.body.productId
        const quantify = req.body.quantify
        const totalPrice = req.body.totalPrice

        if (!userId || !productId || !quantify) {
            throw new Error("Body inválido.")
        }

        // const findUser = await connection(TABLE_USERS)
        // .select()
        // .where({ id: userId })

        // if (findUser.length === 0) {
        //     errorCode = 404
        //     throw new Error("Usuário não encontrado.")
        // }

        // const findProduct = await connection(TABLE_PRODUCTS)
        // .select()
        // .where({ id: productId })

        // if (findProduct.length === 0) {
        //     errorCode = 404
        //     throw new Error("Produto não encontrado.")
        // }
        
        // const product: Product = {
        //     id: findProduct[0].id,
        //     name: findProduct[0].name,
        //     price: findProduct[0].price
        // }

        // const newPurchase: Purchase = {
        //     id: Date.now().toString(),
        //     userId,
        //     productId,
        //     quantity,
        //     totalPrice: product.price * quantity
        // }

        const newPurchase= new Purchase(id, userId, productId, quantify, totalPrice * quantify)

        await connection(TABLE_PURCHASES).insert(newPurchase)

        res.status(201).send({ message: "Compra registrada", purchase: newPurchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}