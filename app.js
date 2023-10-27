const express = require('express');
const cronJob = require('./cron');

cronJob();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Agent en cours dexecution');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});