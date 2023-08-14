
const {FlightModel} = require("../models/flights.model")

const express = require("express")

const flightRouter = express.Router()

flightRouter.get("/",async(req,res)=>{
    
    try{
    const flights = await FlightModel.find()
    res.send(flights)
    }
    catch(err){
        res.send(err)
    }
})

flightRouter.get("/:id",async(req,res)=>{
    const id = req.params.id || null
    try{
    const flights = await FlightModel.find({_id:id})
    res.send(flights)
    }
    catch(err){
        res.send(err)
    }
})

flightRouter.post("/",async(req,res)=>{
    try{
    const {airline,
        flightNo,
        departure,
        arrival,
        departureTime,
        arrivalTime,
        seats,
        price}=req.body

        const flight = new FlightModel({airline,
            flightNo,
            departure,
            arrival,
            departureTime,
            arrivalTime,
            seats,
            price})

            await flight.save()

            res.send("flight created")
        }
        catch(err){
            res.send(err)
        }
})

flightRouter.patch("/:id",async(req,res)=>{
    const ID = req.params.id
    const payload = req.body
    const flight = await FlightModel.findOne({_id:ID})
    if(flight){
        try{
        await FlightModel.findByIdAndUpdate({_id:ID},payload)
        res.send("flight updated")
        }
        catch(err){
         res.send(err)
        }
    }
})

flightRouter.delete("/:id",async(req,res)=>{
    const ID = req.params.id
    //const payload = req.body
    const flight = await FlightModel.findOne({_id:ID})
    if(flight){
        try{
        await FlightModel.findByIdAndDelete({_id:ID})
        res.send("flight deleted")
        }
        catch(err){
         res.send(err)
        }
    }
})

module.exports = {flightRouter}