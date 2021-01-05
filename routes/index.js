const { Router } = require('express');
const userRouter = require('./userRouter');
const cateRoute = require('./cateRoute');

module.exports = (app)=>{
    app.use("/user",userRouter);
    app.use('/cate',cateRoute);
} 