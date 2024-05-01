const express=require("express")
const { permissionValidation, deletePermissionValidator } = require("../helper.js/adminValidator.js")
const { setPermission, getPermission, deletePermission } = require("../controllers/admin/adminController.js")
const authMiddleware = require("../middleware/auth.js")
const adminRouter=express()
adminRouter.post('/permission',permissionValidation,authMiddleware,setPermission)
adminRouter.get('/getpermission',authMiddleware,getPermission)
adminRouter.delete('/deletepermission',deletePermissionValidator,authMiddleware,deletePermission)
module.exports=adminRouter;