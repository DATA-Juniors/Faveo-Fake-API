import { Router } from "express";
import { VerifyDto } from "../models/verify.model";
import VerifyJson from "../helpers/json/verify.json"
import VerifySchema from "../helpers/validation/verify.schema";
const router = Router()

router.post("/verify", (req, res) => {
    const {code, verificationId}: VerifyDto = req.body
    const {error} = VerifySchema.validate(req.body, {abortEarly: false})
    if (code == "21391" && verificationId == "aade4420-533c-45bc-8103-cf6632abb342") {
        res.status(200).json(
            VerifyJson
        )
    }
    else if(error) {
        res.status(400).json({
            message: error.details
        })
    }
    else {
        res.status(400).json({
            message: "Code or verificationId wrong"
        })
    }
})

export default router;