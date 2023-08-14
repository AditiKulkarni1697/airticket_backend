const express = require("express")

const jwt = require("jsonwebtoken")

const auth = async(req,res,next)=>{
    const token = req.headers.authentication

    const decoded = await jwt.verify(token, "token")

    if(decoded){
        next()
    }
    else{
        res.send("Please login")
    }
}