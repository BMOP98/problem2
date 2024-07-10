const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../../modules/dbconect');

router.post('/', async (req, res) => {
    try {
        const { item_valueid, nameproblem2-3, price, stock} = req.body;
        const db = await connectToDatabase();
        const InsertUser = db.collection("problem2-3s");
        const body = {
            idCli: item_valueid,
            name: nameproblem2-3,
            price: price,
            stock: stock,
            image: nameproblem2-3,
        }
        const result = await InsertUser.insertOne(body);
        res.status(201).json("User successfully created");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/:item_valueid', async (req, res) => {
    const { item_valueid } = req.params;
    const db = await connectToDatabase();
    const ConsultReservation = db.collection("problem2-3s");
    const result = await ConsultReservation.find({idCli: item_valueid}).toArray();
    if(result.length){  
        res.status(201).json(result);
    }else{
        res.status(404).json("No problem2-3s available")
    }
});

module.exports = router;
