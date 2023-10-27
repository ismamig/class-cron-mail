const cron = require('node-cron');
const sendEmail = require("./nodemailer");

const cronMailer = () => {
    cron.schedule('*/2 * * * *', async () => {
        console.log('Cron running')
        try {
            console.log('Fetching data')
            const data = await fetch('https://dummyjson.com/products?_quantity=2');
            const json = await data.json();

            await sendEmail({
                from: "CRON",
                to: process.env.EMAIL_ADDRESS_RECEIVER,
                subject: "CRON",
                html: `<h1>CRON</h1><p>${JSON.stringify(json)}</p>`
            })
            console.log('Email sent')
        } catch (e) {
            console.error('Error sending email', e)
        }
    })
}

module.exports = cronMailer;