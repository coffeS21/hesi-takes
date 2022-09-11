const express = require("express")
const takeRouter = express.Router()
const Take = require("../../../modles/schemas/take")

//get all takes
takeRouter.get("/", (req, res, next)=>{
    Take.find((err, takes)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(takes)
    })
})

//create new take
takeRouter.post("/:userId", (req,res,next)=>{
    req.body.user = req.params.userId
    const newTake = new Take(req.body)
    newTake.save((err, savedTake)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedTake)
    })
})

//delete take
takeRouter.delete("/:takeId", (req,res,next)=>{
    Take.findOneAndDelete({_id:req.params.takeId}, (err, deletedTake)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send("take removed")
    })
})

module.exports = takeRouter
