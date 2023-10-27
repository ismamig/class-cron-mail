const cron = require('node-cron');
const sendEmail = require('./mail');

const cronJob = async () => {
    cron.schedule('*/2 * * * *', async () => {
        const data = await fetch('https://dummyjson.com/products?count=2');
        const products = await data.json();

        await sendEmail({
            subject: "Test",
            text: JSON.stringify(products),
            to: "put_email_of_the_recipient",
            from: process.env.EMAIL
        });
    });
}

module.exports = cronJob;