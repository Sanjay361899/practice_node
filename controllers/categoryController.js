const { validationResult } = require("express-validator");
const categoryModel = require("../models/categoryModel");

const addCategory=async(req,res)=>{
try {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
     return res.status(200).json({
        success:false,
        msg:"validation error",
        error:errors.array()
     })
    }
    const {category_name}=req.body;
    const isExist=await categoryModel.findOne({
        name:{
            $regex:category_name,
            $options:'i'
        }
    })
    if(isExist){
        return res.status(200).json({
            success:false,
            msg:"category name is already exist."
        })
    }
    const data=new categoryModel({
        name:category_name
    })
    await data.save()
    return res.status(200).json({
        success:true,
        msg:"Category is recorded."
    })
} catch (error) {
    return res.status(400).json({
        success:false,
        msg:error.message
    })
}
}
const getCategory=async(req,res)=>{
    try {
        const data=await categoryModel.find();
        return res.status(200).json({
            sucess:false,
            msg:"categry data is fetched.",
            data
        })
    } catch (error) {
        return res.status(200).json({
            success:false,
            msg:error.message
        })
    }
}
const deleteCategory=async(req,res)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(200).json({
                success:false,
                msg:"validation error.",
                error:errors.array()
            })
        }
        const {id}=req.body;
        await categoryModel.findByIdAndDelete(id);
        return res.status(200).json({
            success:true,
            msg:"category is deleted successfully."
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            msg:error.message
        })
    }
}
module.exports={
    addCategory,
    getCategory,
    deleteCategory
}