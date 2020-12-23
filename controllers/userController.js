const userModel = require("../models/userModel");
module.exports = {
    get:(req,res,next)=>{
        userModel.find((error,data)=>{
            if(error){
                return res.status(500).json(error);
            }
            return res.status(200).json(data);
        })
    }
}