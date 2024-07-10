const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../../modules/dbconect');
//const fetch = require('node-fetch');

router.post('/', async (req, res) => {
    try {
        const { name, lastname, email, pass } = req.body;
        const db = await connectToDatabase();
        const InsertUser = db.collection("users");
        const body = {
            name: name,
            lastname: lastname,
            mail: email,
            password: pass
        }
        const result = await InsertUser.insertOne(body);
        res.status(201).json("User successfully created");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
