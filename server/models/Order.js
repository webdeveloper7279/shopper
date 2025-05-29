const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    productId: String,
    buyerName: String,
    contactInfo: String
});
module.exports = mongoose.model('Order', OrderSchema);
