const express = require("express")
const server = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

server.use(express.json())
server.use(morgan("dev"))





//servers

server.listen(8000, ()=>{
    console.log("test")
})