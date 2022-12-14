const express = require("express")
const authRouter = express.Router()
const User = require("../../../modles/schemas/user")
const jwt = require("jsonwebtoken")

//signup route
authRouter.post("/signup", (req, res, next)=> {
    User.findOne({username: req.body.username}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(403)
            return next(new Error("this username is already being used dude"))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if(err){
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            return res.status(201).send({token, user: savedUser})
        })
    })
})
//login route
authRouter.post("/login", (req,res, next)=>{
    User.findOne({username: req.body.username}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        if(!user){
            res.status(403)
            return next(new Error("username or Password are incorrect"))
        }
        if(req.body.password !== user.password){
            res.status(403)
            return next(new Error("username or passwor are incorrect"))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
            return res.status(200).send({token, user})
    })
})

module.exports = authRouter