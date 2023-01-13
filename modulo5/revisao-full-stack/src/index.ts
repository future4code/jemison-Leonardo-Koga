import express from "express";
import cors from "cors";
import ping from "./endpoints/ping";
import { createClient } from "./endpoints/createClient";
import { getAllClients } from "./endpoints/allClients";
import { getAllProducts } from "./endpoints/allProducts";
import { getStock } from "./endpoints/stock";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003,() => {
    console.log("Servidor rodando na porta 3003");
    
})

app.get("/ping", ping);

//retorna dados dos clientes
app.get("/clients", getAllClients)

//retorna estock
app.get("/stock", getStock)

//retorna dados produtos
app.get("/products", getAllProducts)

//add client
app.post("/client", createClient);

//retorna dados produtos
app.get("/products", getAllProducts)