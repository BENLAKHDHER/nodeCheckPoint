const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "SENDER@gmail.com",
        pass: "your-app-password"
    }
});

const mailOptions = {
    from: "SENDER@gmail.com",
    to: "RECEIVER@gmail.com",
    subject: "Test Email from Node.js",
    text: "Hello! This is a test email from my Node.js program."
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("Error sending email:", error);
    } else {
        console.log("Email sent:", info.response);
    }
});
