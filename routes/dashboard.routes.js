const express = require("express")

const dashboardRouter = express.Router()

const {BookModel}= require("../models/booking.model")

dashboardRouter.get("/",async(req,res)=>{
    try{
        const booking =  await BookModel.find().populate("user").populate("flight")
       
        res.send(booking)
        }
        catch(err){
            res.send(err.message)
        }
    }
)

dashboardRouter.patch("/:id",async(req,res)=>{
    const ID = req.params.id
    const payload =req.body
    
        const booking =  await BookModel.find({_id:ID})
       
        if(booking){
               try{
                 await BookModel.findByIdAndUpdate({_id:ID},payload)
                 res.send("booking updated")
               }
               catch(err){
                res.send(err)
               }
        }
        else{
            res.send("wrong credentials")
        }
        
    }
)

dashboardRouter.delete("/:id",async(req,res)=>{
    const ID = req.params.id
    
    
        const booking =  await BookModel.find({_id:ID})
       
        if(booking){
               try{
                 await BookModel.findByIdAndDelete({_id:ID})
                 res.send("booking deleted")
               }
               catch(err){
                res.send(err)
               }
        }
        else{
            res.send("wrong credentials")
        }
        
    }
)

module.exports = {dashboardRouter}