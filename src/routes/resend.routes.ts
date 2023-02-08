import { Router } from "express";
import { resendDto } from "../models/resend.model";
import ResendJson from '../helpers/json/resend.json'




const router = Router()

// Jaloladdino Joi iwlatw wart amas dadi  wuna qowmadm

router.post('/resend', (req,res) => {
    // Tokennam tekwrb otrw wartmas akan
    try{
        const resendBody: resendDto = req.body
        
        if(resendBody.email == "johndoe@gmail.com"){
            res.status(200).json(ResendJson)
        }

    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "INternal server error"
        })
    }
})


export default router