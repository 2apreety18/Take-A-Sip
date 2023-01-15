const { model, Schema } = require('mongoose');
const flavorSchema = require('./flavors');

const foodSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true
  },
  imageUrls: [String],
  flavors: [flavorSchema],
  selectedFlavor: {
    type: String
  },
  qty: {
    type: Number,
    default: 1
  },
  note: {
    type: String,
    default: ''
  }

})


module.exports = foodSchema;