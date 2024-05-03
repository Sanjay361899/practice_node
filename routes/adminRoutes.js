const express=require("express")
const { permissionValidation, deletePermissionValidator, permissionUpdateValidator } = require("../helper.js/adminValidator.js")
const { setPermission, getPermission, deletePermission, editPermission } = require("../controllers/admin/adminController.js")
const authMiddleware = require("../middleware/auth.js")
const adminMiddleware = require("../middleware/adminMiddleware.js")
const adminRouter=express()
adminRouter.post('/permission',permissionValidation,authMiddleware,setPermission)
adminRouter.get('/getpermission',authMiddleware,getPermission)
adminRouter.delete('/deletepermission',deletePermissionValidator,authMiddleware,adminMiddleware,deletePermission)
adminRouter.put('/updatepermission',permissionUpdateValidator,authMiddleware,editPermission)
module.exports=adminRouter;




