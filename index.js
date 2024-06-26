const express=require("express")
const connect = require("./config/connect")
const app=express()
app.use(express.json())
app.use(express.static('public'))
require('dotenv').config()
app.use(express.urlencoded({extended:true}))
connect();
const authRoutes=require('./routes/authRoutes.js')
app.use('/api',authRoutes);
const adminRoutes=require('./routes/adminRoutes.js')
app.use('/api/admin',adminRoutes);
app.listen(process.env.port,()=>{
    console.log(`port is there on ${process.env.port}`)
})