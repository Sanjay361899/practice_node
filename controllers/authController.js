const user=require('../models/userModel.js')
const {validationResult}=require('express-validator')
const bcrypt=require("bcryptjs");
const jwt = require('jsonwebtoken');
const generateAccessToken=async(data)=>{
    const token= jwt.sign({ id: data._id }, process.env.secretKey);
    return token;
}
const register=async(req,res)=>{
try {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
       return res.status(200).json({
            success:false,
            message:'Error',
            error:errors.array()
        })
    }
    const {name,email,password}=req.body
    const existing=await user.findOne({email});
    if(existing){
       return res.status(200).json({
            success:false,
            message:"User Already Exist with this email."
        })
    }
    const hashPassword=await bcrypt.hash(password,10)
   const User=new user({
    name,
    email,
    password:hashPassword
   })
   const userData=await User.save();
   return res.status(200).json({
    success:true,
    msg:"Registered Successfully",
    data:userData
   })
} catch (error) {
    return res.status(400).json({
        msg:error.message,
        success:false
    })
}
}
const login=async(req,res)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(200).json({
                 success:false,
                 msg:"error is there in the validation of the data.",
                 error:errors.array()
            })
        }
        const {email,password}=req.body;
        const data=await user.findOne({email})
     if(!data){
       return res.status(200).json({
        success:false,
        msg:"email is not there please register to login with this email."
       })
     }
     var token =await generateAccessToken(data);
     const isPassword=await bcrypt.compare(password,data.password)
     if(!isPassword){
        return res.status(200).json({
         success:false,
         msg:"password is not correct"
        })
      }
     return res.status(200).json({
        success:true,
        msg:"Login is done.",
        data,
        token
     })
    } catch (error) {
        return res.status(400).json({
            success:false,
            msg:error.message
        })
    }
}
const profile=async(req,res)=>{
    try {
       const auth_id= req.userId;
       const profile_data=await user.findOne({_id:auth_id});
       if(!profile_data){
        return res.status(200).json({
            success:false,
            msg:"No profile with such id."
        });
       }
       return res.status(200).json({
        success:true,
        msg:"data fetched of profile",
        data:profile_data
       })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
module.exports={register,login,profile};
