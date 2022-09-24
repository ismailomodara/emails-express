const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
    // let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'gilda.lueilwitz@ethereal.email',
            pass: 'ntaBYtG43Ehy2x2rKJ'
        }
    });

    let info = await transporter.sendMail({
        from: '"Ismail Omodara" <ismailomodara.io@gmail.com>',
        to: 'bar@example.com',
        subject: "Testing Email",
        text: "Hello world",
        html: '<h2>Sending emails with Node</h2>'
    })

    res.status(200).json({
        success: true,
        info
    })
}

module.exports = { sendEmail }
