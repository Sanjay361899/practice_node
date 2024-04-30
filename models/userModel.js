
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:Number,
        default:0 //0->Normal user, 1->Admin, 2->sub-admin
    }
});

//Export the model
module.exports = mongoose.model('User', userSchema);