import express from "express";
import cors from "cors";
import LoginRoute from "./routes/login.routes"
import RegisterRoute from "./routes/register.routes"
import VerifyRoute from "./routes/verify.routes"
import StatusRoute from "./routes/status.routes"
import InfoRoute from "./routes/info.routes"
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/v1/auth", LoginRoute)
app.use("/api/v1/auth", RegisterRoute)
app.use("/api/v1/auth", VerifyRoute)
app.use("/api/v1/auth", StatusRoute)
app.use("/api/v1/", InfoRoute)

app.listen(8080, () => {
    console.log("Server is running on port localhost:8080")
})