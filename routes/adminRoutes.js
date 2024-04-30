const express=require("express")
const { permissionValidation } = require("../helper.js/adminValidator.js")
const { setPermission } = require("../controllers/admin/adminController.js")
const adminRouter=express()
adminRouter.post('/permission',permissionValidation,setPermission)
module.exports=adminRouter;