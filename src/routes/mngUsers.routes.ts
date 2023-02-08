import { Router } from "express";
import mngUsers from "../helpers/json/mngUser.json"
import mngDetails from "../helpers/json/mngDetails.json"
import mngAccess from "../helpers/json/mngAccess.json"
import mngDelete from "../helpers/json/mngDelete.json"


const router = Router()

// Token tekwiriw wartmas dadila

router.get("/users", (req,res) => {
    try{
        return res.status(200).json(mngUsers)
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "INternal sever error"
        })
    }
})

// Karocci Hec narsani tekwirmin basavar dayanlari ucn iwinnin cod yazdm, manga sokinb otirma yozgan codimni bir tin atbdi dab

router.put("/users/:id/details", (req,res) => {
    try{
        const menegeUser = req.body

        if(menegeUser.email == "johndoe@gmail.com" && menegeUser.name == "John" && menegeUser.surname == "Doe" && menegeUser.birthday == "10.01.1996" && menegeUser.phone == "99891 123-45-67"){
            return res.status(200).json(mngDetails)
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "INternal server error"
        })
    }
})


router.put("/users/:id/access", (req,res) => {
    try{

        const user = req.body

        if(user.password == "newPassword" && user.role == "admin"){
            return res.status(200).json(mngAccess)
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "INternal serve    r error"
        })
    }
})

router.delete("/users/:id", (req,res) => {
    try{
        return res.status(200).json(mngDelete)
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "INternal server error"
        })
    }
})

export default router


