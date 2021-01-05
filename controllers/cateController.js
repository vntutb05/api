const cateModel = require('../models/cateModels');

module.exports = {
    get :(req,res)=>{
        cateModel.find({delete:0},(error,data) => {
            if(error){
                return res.status(500).json(error);
            }
            return res.status(200).json(data);
        })
    },
    getAdd : (req,res) =>{
        return res.send("Get add Category");
    },
    postAdd :(req,res) =>{
        let data = req.body;
        cateModel.create(data,(error,data) =>{
            if(error){
                return res.status(500).json(error);
            }
            return res.status(200).json(data);
        })
    },
    getEdit :(req,res) =>{
        let id      = req.params.id;
        cateModel.findOne({_id:id},(error,data)=>{
            if(error){
                return res.status(500).json(error);
            }
            return res.status(200).json(data);
        })
    },
    postEdit :(req,res) =>{
        let id = req.params.id;
        if(id == null){
            return  res.status(500).send("Id is empty");
        };
        cateModel.findById({_id:id},(error,data)=>{
            if(error){
                return res.status(500).json(error);
            }
            let dataForm = req.body;
            cateModel.updateOne({_id:id},{$set:dataForm},(err,_data)=>{
                if(err){
                    return res.status(200).json(err);
                }
                return res.status(200).json(_data);
            })
        })
    },
    delete:(req,res)=>{
        let id = req.params.id;
        if(id == null){
            return res.status(500).send("Id is empty");
        }
        let data = {
             delete : 1
        }
        cateModel.updateOne({_id:id},{$set:data},(error,data)=>{
            if(error){
                return res.status(500),json(error);
            }
            return res.status(200).json(data);
        })
    }


}