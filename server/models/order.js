const { model, Schema } = require('mongoose');
const foodSchema = require('./food');

const OrderSchema = new Schema({
    id: {
        type: Number,
    },
    user: {
        type: Object,
    },
    foods: [foodSchema],
    status: {
      type: String,
      default: 'created'
    },
    orderfor: {
      type: String
    },
    room: {
      type: String
    },
    createdAt: {  
      type: Date,
      default: new Date
    },
    updatedAt: {
      type: Date,
      default: new Date
    },
    deletedAt: {
        type: Date,
    },
})

const Order = model('Order', OrderSchema);


module.exports = Order;