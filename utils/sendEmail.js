const nodeMailer = require("nodemailer")
const   sendEmail = async(options)=>{
let testAccount = await nodeMailer.createTestAccount();
const transporter = await nodeMailer.createTransport({
    host:"smtp.ethereal.email",
    port:587,
    auth:{
      user: 'edwardo.dubuque40@ethereal.email',
      pass: 'd6ZyD6SeGwZMME6ny1'
    },
})
   console.log(options.email)
const mailOptions = {
    from:"jagriti",
    to:options.email,
    subject:options.subject,
    text: options.message,
}

  await transporter.sendMail(mailOptions)
}

module.exports = sendEmail