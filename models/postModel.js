const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    categories:{
        type:Array,
        required:false
    }
});

//Export the model
module.exports = mongoose.model('Post', postSchema);