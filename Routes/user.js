const express = require("express")
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json());
const userController = require("../Controllers/user")

app.post('/register', userController.register)

app.post('/sendEmail',userController.sendEmail)

app.post('/admins',userController.createAdmins)

module.exports = app;