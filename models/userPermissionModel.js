const mongoose=require("mongoose");
const userPermissionSchema=new mongoose.Schema({
user_id:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
},
permissions:[{
    permissionRole:String,
    permissions:[Number]
}]
})
module.exports=mongoose.model("UserPermission",userPermissionSchema)