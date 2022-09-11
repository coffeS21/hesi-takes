const express = require("express")
const server = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const chai = "mongodb+srv://chai:chai@hesi-takes.yraxe8g.mongodb.net/?retryWrites=true&w=majority"

//middlewear
server.use(express.json())
server.use(morgan("dev"))

//routes
server.use("/takes", require("./routes/takeRouter"))
server.use("/opinion", require("./routes/opinionRouter"))
server.use("/users", require("./routes/userRouter"))

//servers
mongoose.connect(chai)
mongoose.connection.on("connected", ()=>{
    console.log("its on baby")
})
server.listen(8000, ()=>{
    console.log("test")
})