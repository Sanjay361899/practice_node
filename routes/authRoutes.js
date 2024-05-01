const express=require("express");
const { registerValidator, loginValidator } = require("../helper.js/registerValidator");
const {register, login, profile} = require("../controllers/authController");
const authMiddleware = require("../middleware/auth");
const router=express();

router.post('/register',registerValidator,register)
router.post('/login',loginValidator,login)
router.get('/profile',authMiddleware,profile)
module.exports=router;