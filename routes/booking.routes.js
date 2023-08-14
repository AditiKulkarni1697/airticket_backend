const express = require("express")

const bookingRouter = express.Router()

const {BookModel}= require("../models/booking.model")

bookingRouter.get("/",async(req,res)=>{
   // const {user, flight}= req.body
    try{
    const booking =  await BookModel.find()
   
    res.send(booking)
    }
    catch(err){
        res.send(err.message)
    }
})

bookingRouter.post("/",async(req,res)=>{
    const {user, flight}= req.body
    try{
    const booking = new BookModel({user, flight})
    await booking.save() 
    res.send("booking created")
    }
    catch(err){
        res.send(err.message)
    }
})

module.exports = {bookingRouter}