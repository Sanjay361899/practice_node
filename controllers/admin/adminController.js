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
        const deleteRecord=await permissionModel.deleteOne({_id:id})
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
module.exports={setPermission,getPermission,deletePermission}