import { Router } from "express";


const router = Router()

router.get("/categories", (req,res) => {
    try{
        return res.status(200).json({
            "message": "Retrive all categories",
            "categories": [
                {
                    "id": 1,
                    "name": "Foods",
                    "icon": "foods-icon.png",
                },
                {
                    "id": 2,
                    "name": "Drinks",
                    "icon": "drinks-icon.png",
                }
            ]
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Error"
        })
    }
})


router.get("/categories/:id", (req,res) => {
    try{
        return res.status(200).json({
            "message": "Retrive category",
            "category": {
                "id": 1,
                "name": "Foods",
                "icon": "foods-icon.png",
            }
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Error"
        })
    }
})

router.post("/categories", (req,res) => {
    try{ 
        const {name} = req.body
        if(name == "Foods"){
            return res.status(200).json({
                "message": "Category created",
                "category": {
                    "id": 3,
                    "name": "Foods",
                    "icon": "foods-icon.png",
                }
            })
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error"
        })
    }
})


router.put("/categories/:id", (req,res) => {
    try{ 
        const {name} = req.body
        if(name == "Foods"){
            return res.status(200).json({
                "message": "Category updated",
                "category": {
                    "id": 3,
                    "name": "Foods",
                    "icon": "foods-icon.png",
                }
            })
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error"
        })
    }
})



router.delete("/categories/:id", (req,res) => {
    try{ 
        
        
            return res.status(200).json({
                "message": "Category deleted",
                "category": {
                    "id": 3,
                    "name": "Foods",
                    "icon": "foods-icon.png",
                }
            })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Error"
        })
    }
})

export default router