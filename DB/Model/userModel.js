const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:String,
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:String,
    picurl:String

})

const userModel = mongoose.model("user",schema)
module.exports = userModel