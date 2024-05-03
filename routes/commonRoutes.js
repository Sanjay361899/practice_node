const express=require("express");
const { categoryValidator, deleteCategoryValidator } = require("../helper.js/categoryValidator");
const { addCategory, getCategory,deleteCategory } = require("../controllers/categoryController");
const authMiddleware = require("../middleware/auth");
const commonRouter=express();
commonRouter.post('/addCategory',authMiddleware,categoryValidator,addCategory);
commonRouter.post('/deleteCategory',authMiddleware,deleteCategoryValidator,deleteCategory);
commonRouter.post('/addCategory',authMiddleware,getCategory);
module.exports=commonRouter;
