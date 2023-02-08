import { Router } from "express";
import products from "../helpers/json/productsGET.json"
import productsCTG from "../helpers/json/productsCATEGORY.json"
import productsByID from "../helpers/json/productsByID.json"
const router = Router()

router.get("/products", (req,res) => {
    try{
        return res.status(200).json(products)
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        })
    }
})


router.get("/products/?category_id=1", (req,res) => {
    try{
        return res.status(200).json(productsCTG)
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        })
    }
})



router.get("/products/:id", (req,res) => {
    try{
        return res.status(200).json(productsByID)
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Internal server error"
        })
    }
})



// JSON file ocavariw jona deydi wunga worni ozinda barb getdim
// JSON file ocavariw jona deydi wunga worni ozinda barb getdim


router.post("/products", (req,res) => {
    try{ 
        const product = req.body
        
        if(product.name == "Hamburger" && product.price == 9.11 && product.category_id == 1){
            return res.status(200).json({
                "message": "Product updated",
                "product":  {
                    "id": 1,
                    "name": "Hamburger",
                    "price" : 9.11,
                    "image" : "images/hamburger-002.png",
                    "category": {
                        "id": 1,
                        "name": "Foods",
                        "icon": "foods-icon.png"
                    }
                }
            })
        }
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message:" INternal server error"
        })
    }
})

router.put("/products/:id", (req,res) => {
    try{
        return res.status(200).json({
            "message": "Product updated",
            "product":  {
                "id": 1,
                "name": "Hamburger",
                "price" : 9.11,
                "image" : "images/hamburger-002.png",
                "category": {
                    "id": 1,
                    "name": "Foods",
                    "icon": "foods-icon.png"
                }
            }
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "INternal server error"
        })
    }
})

// JSON file ocavariw jona deydi wunga worni ozinda barb getdim
// JSON file ocavariw jona deydi wunga worni ozinda barb getdim

router.delete("/products/:id", (req,res) => {
    try{
        return res.status(200).json({
            "message": "Product deleted",
            "product":  {
                "id": 1,
                "name": "Hamburger",
                "price" : 9.11,
                "image" : "images/hamburger-002.png",
                "category_id": 1
            }
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message: "INternal server error"
        })
    }
})

export default router