const userModel = require("../models/userModel");
module.exports = {
    get:(req,res) => {
        userModel.find((error,data) => {
            if(error){
                return res.status(500).json(error);
            }
            return res.status(200).json(data);
        })
    },
    getAdd:(req,res) => { 
        return res.send("Get add users");
    },
    postAdd:(req,res)=>{
        let data = req.body;
        userModel.create(data,(error,data)=>{
            if(error){
                return res.status(500).json(error);
            }
            return res.status(200).json(data);
        })
    },
    getEdit:(req,res) => {
        let id = req.params.id;
        userModel.findById({_id:id},(error,data)=>{
            if(error){
                return res.status(500).json(error);
            }
            if(data == null){
                return res.status(500).send("Id không chính xác");
            }
            return res.status(200).json(data);
        })
    },
    postEdit:(req,res) => {
        let id = req.params.id;
        let dataUpdate = req.body;
        userModel.find({_id:id},(error,data)=>{
            if(data == null || error){
                return res.send("Id không chính xác");
            }
            userModel.updateOne({_id:id},{$set:dataUpdate},(err,_data)=>{
                if(err){
                    return res.status(500).json(err);
                }
                return res.status(200).json(_data)
            })
        })
        
    },
    delete:(req,res)=>{
        let id = req.params.id;
        userModel.find({_id:id},(error,data)=>{
            if(data == null || error || data.length ==0){
                return res.send("Id không chính xác");
            }
            userModel.deleteOne({_id:id},(err,_data)=>{
                if(err){
                    return res.status(500).json(err);
                }
                return res.status(200).json(_data);
            })
        });
        
    }
    
}