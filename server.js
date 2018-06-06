const http = require('http');
const nodemailer = require('nodemailer');

http.createServer(function (req, res) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'weaselwiz7@gmail.com',
            pass: ''
        }
    });

    var mailOptions = {
        from: 'weaselwiz7@gmail.com',
        to: 'weaselwiz7@gmail.com',
        subject: 'Node.js email',
        text: "blablabla"
    };

    transporter

}).listen(8081);