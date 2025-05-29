const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.json({ message: 'Buyurtma qabul qilindi' });
});

router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

module.exports = router;
