const mongoose = require("mongoose")

class mongo{
    constructor(){
        this.createMongoConnection()
    }

    createMongoConnection(){

        mongoose.connect('mongodb+srv://gauripatil:Gauri7920@user.z3mld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        mongoose.connection.once('open',()=>{
            console.log("MongoDB is connected")
        })
        mongoose.connection.on('error',()=>{
            console.log("error is occured")
        })
    }
}

module.exports =  mongo