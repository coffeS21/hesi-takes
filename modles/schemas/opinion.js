const mongoose = require("mongoose")
const Opinion = mongoose.Schema



const opinionSchema = new Opinion({
    comment: {
        type: String, 
        required: true,
        lowercase: true
    },
    take: {
        type: Opinion.Types.ObjectId,
        ref: "Take",
        required: true
    }
 

})

module.exports = mongoose.model("Opinion", opinionSchema )