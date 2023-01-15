import { Router } from "express";
import StatusJson from "../helpers/json/status.json"
const router = Router()

router.get("/status/", (req, res) => {
    req.query.id
    res.status(200).json(
        StatusJson
    )
})

export default router;