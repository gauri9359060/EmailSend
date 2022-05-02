const userModel = require("../Models/user")
const emailService = require("../Notifications/EmailService")
const adminModel = require('../Models/admin')
async function register(req,res,next){
       try{
           console.log(req.body)
            let userDetails = req.body;
            let response = await userModel.insertMany([userDetails])
            res.json(response)
       }catch(error){
           res.send(error)
       }
}

async function sendEmail(req,res,next){
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;

        let response = await emailService.sendMail({
          from: '"Gauri patil" <gaurip388@gmail.com>', // sender address
          to: `${email}`, // list of receivers
          subject: `welcome to ABC system ${firstName} ${lastName}`, // Subject line
          text: `Hi ${firstName},Please confirm your email address create a set of admins`, // plain text body
          html: `<b></b>`, // html body
      })
      res.json(true)
      console.log(response)
}

async function createAdmins(req,res,next){
        try{
            let adminDetail = req.body;
            let response = await adminModel.insertMany([adminDetail])
            res.json(response)
        }
        catch(error){
            res.send(error)
        }
}

module.exports= {
    register,
    sendEmail,
    createAdmins
}