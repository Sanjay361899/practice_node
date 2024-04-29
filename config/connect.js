const mongoose = require('mongoose');
const connect=()=>mongoose.connect('mongodb://localhost:27017/permission_api');
module.exports=connect;