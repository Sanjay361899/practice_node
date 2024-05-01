const { validationResult } = require("express-validator")
const permissionModel=require("../../models/permission.js")

const setPermission=async(req,res)=>{
    try {
       const errors=validationResult(req); 
        if(!errors.isEmpty()){
            return res.status(200).json({
                success:false,
                msg:"validation error",
                error:errors.array()
            })
        }
        const {permission_name}=req.body
        const isExisting=await permissionModel.findOne({permission_name});
        if(isExisting){
            return res.status(200).json({
                success:false,
                msg:"permission name is already existing"
            })
        }
        var obj={
            permission_name
        }
        if(req.body.isDefault){
            obj.isDefault=req.body.isDefault;
        }
        const permissionStore=new permissionModel(obj);
        const permissionResult=await permissionStore.save();
        return res.status(200).send({
            success:true,
            msg:"permission is created",
            data:permissionResult
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            msg:error.message
        })
    }
}
const getPermission=async(req,res)=>{
    try {
        const data=await permissionModel.find();
        if(!data){
            return res.status(200).json({
                success:"false",
                msg:"No permission created"
            })
        }
     return res.status(200).send({
        success:true,
        data,
        msg:"All permission is here."
     })
    } catch (error) {
        return res.status(400).json({
            success:false,
        })
    }
}
const deletePermission=async(req,res)=>{
    try {
        const errors=validationResult(req.body)
        if(!verify.isEmpty){
            return res.status(200).json({
                success:false,
                error:errors.array()
            })
        }
        const deleteRecord=await permissionModel.findByIdAndDelete(id)
        console.log(deleteRecord,"deleteRecord");
        return res.status(200).json({
            success:true,
            messgae:"permission is deleted."
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            msg:error.message
        })
    }
}
const editPermission=async(req,res)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(200).send({
                success:false,
                msg:errors.message
            })
        }
        const {id,permission_name}=req.body
        const data=await permissionModel.findOne({permission_name});
        if(data.permission_name==permission_name){
            return res.status(200).json({
                success:false,
                msg:"No Updation in the field."
            })
        }
        const updateData=await permissionModel.findByIdAndUpdate(id,{permission_name},{new:true,upsert:true})
        return res.status(200).json({
            success:false,
            msg:"data is updated",
            data:updateData
        })
    } catch (error) {
        res.status(400).json({
            sucess:false,
            msg:error.message
        })
    }
}
module.exports={setPermission,getPermission,deletePermission,editPermission}