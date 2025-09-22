const nodemailer = require("nodemailer");
const fs = require("fs");

// Configure SMTP
let transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  auth: {
    user: "username",
    pass: "password",
  },
});

// Email options
let mailOptions = {
  from: "jkpatel141@gmail.com",
  to: "jkpatle141@gmail.com",
  subject: "Latest Cypress Test Report",
  text: "Hi Team,\n\nPlease find attached the latest Cypress HTML report.\n\nRegards,\nCI/CD Pipeline",
  attachments: [
    {
      filename: "report.html",
      content: fs.readFileSync("cypress/reports/report.html"),
      contentType: "text/html",
    },
  ],
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) console.log(error);
  else console.log("Email sent: " + info.response);
});
