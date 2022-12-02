import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { connection } from "./data/connection"

export const app = express()

app.use(express.json())
app.use(cors())

export default async function selectUsersByName():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})