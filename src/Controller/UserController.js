const userModel = require("../Models/UserModel");

exports.Ragistration=async (req,res)=>{
    try{
      let reqbody=res.body;
      let user=await userModel.create(reqbody)
      res.status(200).json({status:"success",data:user})  
}
catch(err){
 res.status(200).json({status:"faild",data:err})
}
}