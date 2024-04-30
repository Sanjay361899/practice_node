const express=require("express");
const { registerValidator, loginValidator } = require("../helper.js/registerValidator");
const {register, login} = require("../controllers/authController");
const router=express();

router.post('/register',registerValidator,register)
router.post('/login',loginValidator,login)
module.exports=router;