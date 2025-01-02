const express = require("express")
const cors =require("cors")

const Products = require("./products.json")
const app = express()
app.use(cors())
app.get("/api", async(req , res)=>{
    res.json(Products)
})
app.listen(5000, console.log("Server is running on port 5000"))