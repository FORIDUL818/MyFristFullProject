const express=require("express")
const router=express.Router()
const userRagistration=require("../Controller/UserController")


router.post("/user-ragistration",userRagistration.Ragistration)

module.exports=router
