import { Router } from "express";
import InfoJson from "../../src/helpers/json/info.json"
import validation from "../helpers/validation/info"
const route = Router()

route.get("/info", (req, res) => {
    try {
        var authheader = req.headers.authorization;
        let token = "asdf";
        if (authheader === 'Bearer') {
            authheader = token;
        }
        if (authheader != token) {
            var err = new Error('You are not authenticated!');
            console.log(err)
            return res.status(401).json({
                message: "Error authent",
                err
            })
        }    
        res.status(200).json(
            InfoJson
        )
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})
route.put("/info", (req, res) => {
    try {
        var authheader = req.headers.authorization;
        let token = "asdf";
        if (authheader === 'Bearer') {
            authheader = token;
        }
        if (authheader != token) {
            var err = new Error('You are not authenticated!');
            console.log(err)
            return res.status(401).json({
                message: "Error authent",
                err
            })
        }
        const {name, geo, address, phone} = req.body
        const {error} = validation.validate(req.body, {abortEarly: false})
        if(error) {
            res.status(500).json({
                message: error.details[0].message
            })
        }
        res.status(200).json({
            name,
            location: {
                geo,
                address
            },
            phones: [
                phone
            ]
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
})

export default route;