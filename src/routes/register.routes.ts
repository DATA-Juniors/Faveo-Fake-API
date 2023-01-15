import Router from "express"
import {RegisterDto} from "../models/register.model"
import LoginResp from "../helpers/json/register.json"
import RegisterSchema from "../helpers/validation/register.schema"

const router = Router()

router.post("/register", (req, res) => {
    const {error} = RegisterSchema.validate(req.body, {abortEarly: false})
    const {email, password, name, surname, birthday, phone}: RegisterDto = req.body
    if(email == "johndoe@gmail.com" && password=="password" && name == "John" && surname == "Doe" && birthday== "10.01.1996" && phone == "99891 123-45-67") {
        res.status(200).json(
                LoginResp
            )
        }
    else if(error) {
        res.status(400).json({
            message: error.details
        })
    }
    else {
        res.status(400).json({
            message: "One of all is wrong"
        })
    }
})

export default router