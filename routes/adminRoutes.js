const express=require("express")
const { permissionValidation } = require("../helper.js/adminValidator.js")
const { setPermission } = require("../controllers/admin/adminController.js")
const authMiddleware = require("../middleware/auth.js")
const adminRouter=express()
adminRouter.post('/permission',permissionValidation,authMiddleware,setPermission)
module.exports=adminRouter;