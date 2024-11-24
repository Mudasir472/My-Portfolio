const nodemailer = require('nodemailer');
const Contact = require('../modals/Contact')
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "bhatmuddu472@gmail.com",
        pass: "iqdr riqu qsna wpct",
    },
});

module.exports.contactPost = async (req, res) => {

    const { name, email, contact, location, message } = req.body;
    // Validate input
    if (!name || !email || !contact || !message || !location) {
        return res.status(400).json({ msg: "All fields are required." });
    }

    try {
        const contactData = new Contact({ name, email, contact, location, message });
        // console.log(contactData)
        await contactData.save();
        const mailOptions = {
            to: 'bhatmuddu472@gmail.com',
            from: email,
            subject: 'Fill all details',
            text: `
        Hello Mudasir,

        You have received a new contact request from your portfolio site. Here are the details:

        - **Name**: ${name}
        - **Contact**: ${contact}
        - **Location**: ${location}
        - **Message**: 
          ${message}

        Please follow up as needed.

        Best regards,
        Mudasir Ahmad Bhat
    `
        };
        const info = await transporter.sendMail(mailOptions, (err) => {
            if (err) return res.status(500).json({ message: 'Error sending email.' });
            return res.status(200).json({ message: 'Thanks , Email has been sent' });
        });
    } catch (error) {
        console.error('Error saving contact data:', error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}
// module.exports.contactGet = async (req, res) => {
//     try {
//         const contacts = await Contact.find({});
//         res.status(200).json({ contacts });
//     } catch (error) {
//         console.error('Error fetching contact data:', error);
//         res.status(500).json({ msg: "Internal Server Error" });
//     }
// }