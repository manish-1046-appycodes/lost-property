// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function (req, res) {
  //res.status(200).json({ name: 'John Doe' });

  require('dotenv').config()
  
  let nodemailer = require('nodemailer');
  
  const transporter = nodemailer.createTransport({
    port: 587,
    host: "mail.bigpepperdesign.com",
    auth: {
      user: "darren@bigpepperdesign.com",
      pass: "sw4Y.yfBz1",
    },
    secure: false,
  })
  
  const mailData = {
    from: 'hello@bigpepperdesign.com',
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
  res.status(200).json({message: 'Done'})

}
