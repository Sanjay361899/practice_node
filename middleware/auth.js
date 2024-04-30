const authMiddleware=async(req,res,next)=>{
    const token =req.body.token||req.query.token||req.headers["authorization"]
    if(token){
      console.log("token",token)
    }
    try {

        
    } catch (error) {
        return res.status(400).json({
            success:false,
            msg:error.message
        })
    }
}