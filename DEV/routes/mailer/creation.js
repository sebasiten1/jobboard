const nodemailer = require("nodemailer");
module.exports = function(app, con, logger, jwt ) {
  
  app.post('/mail/post',function (req,res){
    
    var form_mailer ={
      content: req.body.content,
      client: req.body.client,
      client_name: req.body.client_name,
      entreprise: req.body.entreprise,
      title: req.body.title,
      cv: req.body.cv
    }
    mailer (form_mailer.client,form_mailer.client_name,form_mailer.entreprise,form_mailer.title,form_mailer.content,form_mailer.cv)
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
  to: entreprise, // list of receivers
  subject: "[Job Board] postulation de "+client_name+ " pour votre annonce "+ title, // Subject line
  text: content, // plain text body
  html: `<b>${content}</b> <br><b>Aller voir les annonces  <a href="https://localhost:3000/jobBoard">Aller a l'annonce</a> </b>`, // html body
  attachments: [
    {   //utf-8 string as an attachment
        filename: 'text1.txt',
        content: cv
    },
  ]
});

// con.connect(function(err) {
//   var cache = 'DELETE FROM `client` WHERE `client`.`id_client` = '+req.params.id+';'
// })

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