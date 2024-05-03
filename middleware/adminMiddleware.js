const userModel = require("../models/userModel");

const adminMiddleware= async(req,res,next)=>{
    try {
    console.log(req.userId)
    const user= userModel.findById(req.userId)
    if(user.role!=1){
        return res.status(200).json({
            success:false,
            msg:"something went wrong in the access is not for the user it is for the admin not for the normal user."
        })
    }
    } catch (error) {
        return res.status(400).json({
            success:false,
            msg:error.message
        })
    }
    return next();
}
module.exports=adminMiddleware;