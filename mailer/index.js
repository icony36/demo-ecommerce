require("dotenv").config();

const nodemailer = require("nodemailer");
// const config = require("./config");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const send = ({ email, name, text }) => {
    const from = name && email ? `${name} <${email}>` : `${name || email}`;
    const message = {
        from,
        to: "icode67658@gmail.com",
        subject: `New message from ${from} at demo ecommerce website.`,
        text,
        replyTo: from
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        );
    });
};

module.exports = send;
