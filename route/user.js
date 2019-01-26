
const express=require('express');
const path =require('path');
const router = require('express').Router();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth:{
		user: 'focado11@gmail.com',
		pass: 'schoolportal'
	},
	tls: {
		rejectUnauthorized: false
	}


});
router.get('/',function(req,res){
    res.send('hello');
})

router.post('/email',function(req,res){
    console.log(req);
    var mailOptions = {
        from: 'focado11@gmail.com',
        to: 'mohankukreja1@gmail.com',
        subject: req.body.subject,
        text: `firstname : ${req.body.fname},
               lastname : ${req.body.lname},
               email : ${req.body.email},
               message: ${req.body.message},
               subject: ${req.body.subject}
        `
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.redirect('/');
        }
    })
})
module.exports = router;