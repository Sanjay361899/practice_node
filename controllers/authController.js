const user=require('../models/userModel.js')
const {validationResult}=require('express-validator')
const register=async(req,res)=>{
try {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.status(200).json({
            success:false,
            message:'Error',
            error:errors.array()
        })
    }
} catch (error) {
    return res.status(400).json({
        msg:error.message,
        success:false
    })
}
}
module.exports=register;
