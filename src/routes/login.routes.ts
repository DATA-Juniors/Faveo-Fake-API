import { Router } from "express";
import { LoginDto } from "../models/login.model";
import LoginResponse from "../helpers/json/login.json"
import LoginSchema from "../helpers/validation/login.schema";

const router = Router()

router.post("/login", (req, res) => {
    const logindto: LoginDto = req.body
    const {error} = LoginSchema.validate(req.body, {abortEarly: false})
    if(logindto.email == "johndoe@gmail.com" && logindto.password == "password") {
        res.status(200).json(LoginResponse)
    }
    else if (error) {
        res.status(200).json({
            message: error.details
        })
    }
    else {
        res.status(400).json({
            message: "Username or password wrong"
        })
    }
})

export default router;