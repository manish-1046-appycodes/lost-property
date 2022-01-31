// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function (req, res) {
  //res.status(200).json({ name: 'John Doe' });

  require('dotenv').config()
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.postmarkapp.com",
    auth: {
      user: process.env.username,
      pass: process.env.password,
    },
    secure: false,
  })
  const mailData = {
    from: 'dazpowell@gmail.com',
    to: 'dazpowell@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)

}