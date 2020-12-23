const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const userSchema ={
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
}
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;