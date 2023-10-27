const express = require('express');
const cronMailer = require("./agent");

// Démarrage de l'agent
cronMailer();

// Démarrage de l'appli express
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Agent en cours d'execution");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});