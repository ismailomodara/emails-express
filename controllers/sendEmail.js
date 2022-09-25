const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail')

const welcome = require("../template/welcome");

const sendEmailEthereal = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    });

    let info = await transporter.sendMail({
        from: '"Ismail Omodara" <ismailomodara.io@gmail.com>',
        to: 'bar@example.com',
        subject: "Testing Email",
        text: "Hello world",
        html: welcome
    })

    res.status(200).json({
        success: true,
        info
    })
}

const sendEmail =  async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: 'ismailomodara.io@gmail.com', // Change to your recipient
        from: 'omodara145@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: welcome,
    }
    sgMail
        .send(msg)
        .then((response) => {
            res.status(200).json({
                success: true,
                response
            })
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

module.exports = { sendEmail }
