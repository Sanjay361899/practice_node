const jwt=require("jsonwebtoken")
const authMiddleware= async (req,res,next)=>{
    const token =await req.body.token||req.query.token||req.headers["authorization"]
    if(!token){
      return res.status(403).json({
       success:false,
       msg:"Authentication Required token." 
      })
    }
    try {
       const bearer= token.split(' ');
       const bearerToken=bearer[1];
       const userId= jwt.verify(bearerToken,process.env.secretKey)
       req.userId=userId.id
    } catch (error) {
        return res.status(400).json({
            success:false,
            msg:error.message
        })
    }
    return next();
}
module.exports=authMiddleware;