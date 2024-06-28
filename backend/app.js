const express = require('express');
const app = express();

app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;
