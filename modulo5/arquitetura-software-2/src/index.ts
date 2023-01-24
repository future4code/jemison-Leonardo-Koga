import {app} from "./app"
import { movieRouters } from "./routes/movieRouter"
import {userRouter} from "./routes/userRouter"

app.use("/user", userRouter)

app.use("/movie", movieRouters)