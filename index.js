const express = require("express")

const {connection} = require("./db")

const {userRouter} = require("./routes/user.routes")

const {flightRouter} = require("./routes/flights.routes")

const {bookingRouter} = require("./routes/booking.routes")

const {dashboardRouter} = require("./routes/dashboard.routes")


const {auth} = require("./middleware/auth")

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/user",userRouter)

//app.use(auth)

app.use("/flight", flightRouter)

app.use("/booking", bookingRouter)

app.use("/dashboard", dashboardRouter)

app.listen(8080,async()=>{
    try{
    await connection
    console.log("db is connected")
    }
    catch(err){
     console.log(err)
    }
    console.log("server is running at port 8080")
})