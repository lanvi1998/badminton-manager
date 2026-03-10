const mongoose = require("mongoose")

const memberSchema = new mongoose.Schema({

name:String,
level:String

})

module.exports = mongoose.model("Member",memberSchema)