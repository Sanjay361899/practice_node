const express=require("express");
const { registerValidator } = require("../helper.js/registerValidator");
const register = require("../controllers/authController");
const router=express();

router.post('/register',registerValidator,register)
module.exports=router;