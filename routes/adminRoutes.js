const express=require("express")
const { permissionValidation, deletePermissionValidator, permissionUpdateValidator } = require("../helper.js/adminValidator.js")
const { setPermission, getPermission, deletePermission, editPermission } = require("../controllers/admin/adminController.js")
const authMiddleware = require("../middleware/auth.js")
const adminRouter=express()
adminRouter.post('/permission',permissionValidation,authMiddleware,setPermission)
adminRouter.get('/getpermission',authMiddleware,getPermission)
adminRouter.delete('/deletepermission',deletePermissionValidator,authMiddleware,deletePermission)
adminRouter.delete('/updatepermission',permissionUpdateValidator,authMiddleware,editPermission)
module.exports=adminRouter;




