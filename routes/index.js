const express = require('express');
let route = express.Router();
const userRouter = require('./userRouter');
const cateRoute = require('./cateRoute');

route.use("/user",userRouter);
route.use('/cate',cateRoute);
module.exports = route;
