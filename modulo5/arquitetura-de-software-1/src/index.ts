import {app} from "./app"
import { UserController } from "./controller/UserController"

const userController = new UserController()

app.get("/", async function(){
   console.log("endpoint teste")
})

app.get("/all", userController.get)

app.post("/createUser", userController.createUSer)

app.delete("/:id", userController.deleteUser)
