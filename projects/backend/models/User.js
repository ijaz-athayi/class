const mongoose = require("mongoose")
const userschema = new mongoose.Schema({
    name : String,
    email: String,
    age : Number
})

module.exports = mongoose.model('User', userschema, "testing")