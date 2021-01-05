const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const cateSchema = {
    name:{
        type:String,
        required:true
    },
    delete:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    }
}
const cateModel = mongoose.model('cates', cateSchema);
module.exports = cateModel;