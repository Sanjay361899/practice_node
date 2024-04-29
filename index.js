const express=require("express")
const app=express()
app.use(express.json())
require('dotenv').config()
app.use(express.urlencoded({extended:true}))
app.listen(process.env.port,()=>{
    console.log(`port is there on ${process.env.port}`)
})