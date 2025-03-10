const express = require('express');
const sequelize = require('./config/sequelize');
const User = require('./models/user');

const app = express();
const port = 3000;

sequelize.sync().then(() => {
    console.log('Database connected and models synced');
}).catch((err) => {
    console.error('Error syncing models:'. err);
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err});
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

