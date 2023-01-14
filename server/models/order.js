const { model, Schema } = require('mongoose');
const foodSchema = require('./food');

//  user,
//  [food],
//  time

const OrderSchema = new Schema({
    id: {
        type: Number,
    },
    user: {
        type: Object,
        // required: true,
        // unique: true
    },
    foods: [foodSchema],
    status: {
      type: String,
      default: 'created'
    },
    orderfor: {
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