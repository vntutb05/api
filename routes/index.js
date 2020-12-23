const { Router } = require('express');
const userRouter = require('./userRouter');

module.exports = (app)=>{
    app.use("/",userRouter)
} 