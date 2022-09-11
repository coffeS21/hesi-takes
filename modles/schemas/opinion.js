const mongoose = require("mongoose")
const Opinion = mongoose.Schema



const opinionSchema = new Opinion({
    
    response: {
        type: String, 
        required: true,
        lowercase: true
    },
    user: {
        type: Opinion.Types.ObjectId,
        ref: "User",
        required: true
    },
    take: {
        type: Opinion.Types.ObjectId,
        ref: "Take",
        
    }

})

module.exports = mongoose.model("Opinion", opinionSchema )