const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app;
