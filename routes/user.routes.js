const {UserModel}= require("../models/user.model")

const express = require("express")


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.get("/",async(req,res)=>{
    const data = await UserModel.find()
    res.send(data)
})

userRouter.post("/register",async(req,res)=>{
   const {name, email, password}=req.body

 bcrypt.hash(password, 8, async function (err,hash){
    if(hash){
        try{
       const user =  new UserModel({name,email,password:hash})
        await user.save()
       // const data = await UserModel.find()
        res.send({msg:"user created" })
        }
        catch(err){
           // console.log(UserModel)
            console.log(err)
        }
    }
    else{
        res.send(err)
    }
 });
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body

    const user = await UserModel.findOne({email})

    if(user){
        bcrypt.compare(password, user.password,(err,result)=>{
            if(result){
                const token = jwt.sign({userID: user._id}, "token")
                res.send({msg:"user logged in", token})
            }
            else{
                res.send("wrong credentials")
            }
        })
    }
})

module.exports = { userRouter }