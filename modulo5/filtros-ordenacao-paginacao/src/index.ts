import { getUsersByName } from './endpoints/getUsersByName';
import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsers } from "./endpoints/getAllUsers";
// import {getUser} from "./endpoints/getUser"

app.get("/recipes", getAllRecipes)

app.get("/users", getAllUsers)

app.get("/username", getUsersByName)

// app.get("/users/{}", getUser)



