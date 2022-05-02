const nodemailer = require("nodemailer");
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "06c3c1db29d7d2",
    pass: "5cec6fbb46ca90"
  }
});

module.exports = transport;
