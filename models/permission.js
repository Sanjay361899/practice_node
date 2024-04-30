const mongoose=require("mongoose");
const permissionSchema=new mongoose.Schema({
    permission_name:{
    type:String,
    required:true
 },
 isDefault:{
    type:Number,
    default:0,//0->Not default permission for all, 1->default permission to all
 }
})
module.exports=mongoose.model("Permission",permissionSchema)



