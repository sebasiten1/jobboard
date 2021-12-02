const nodemailer = require("nodemailer");
module.exports = function(app, con, logger ) {
  
  app.post('/mail/post',function (req,res){
    
    var form_mailer ={
      content: req.body.content
    }
    mailer ("client","client_name","entreprise","title","content","cv")
async function mailer(client ,client_name , entreprise ,title ,content , cv){

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "pablo.premsc@gmail.com", // generated ethereal user
    pass: "tttseqqbxehcayvd", // generated ethereal password
  },
});

var info = await transporter.sendMail({
  from: '"Job Board" <pablo.premsc@gmail.com>', // sender address
  to: "galaxial51@gmail.com", // list of receivers
  subject: "[Job Board] postulation de "+client_name+ " pour votre annonce "+ title, // Subject line
  text: content, // plain text body
  html: `<b>"+content+"</b> <br><a href="https://localhost:9000/dashboard">Aller a l'annonce</a>`, // html body
});

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

console.log("Message sent: %s", info.messageId);

console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}
})
}