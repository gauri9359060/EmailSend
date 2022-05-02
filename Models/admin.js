const mongoose = require("mongoose")

const admin = mongoose.Schema({
    "firstName" : {type:String, required:true},
    "lastName" : {type:String, required:true},
    "email" : {type:String, required:true}
})

module.exports = mongoose.model('admin',admin)