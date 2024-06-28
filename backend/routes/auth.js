const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Dummy user for demonstration
const users = [
    {
        id: 1,
        username: 'test',
        password: bcrypt.hashSync('test123', 8)
    }
];

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: 86400 });
        res.json({ auth: true, token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    users.push({ id: users.length + 1, username, password: hashedPassword });
    res.send('User registered successfully');
});

module.exports = router;
