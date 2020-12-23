const config = require('config');
const mongoose = require('mongoose');

let uriDB = config.get('server.uriDB');

let connectDB = 
    mongoose.connect(uriDB,{ useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
        if(err){
            return console.log("Kết nối database thất bại ....");
        }
        return console.log('Kết nối database thành công');
    })

module.exports = connectDB;