const { model, Schema } = require('mongoose');
const flavorSchema = require('./flavors');

//     id: number;
//     name: string;
//     imageUrls: string[];
//     flavors: Flavor[];
//     selectedFlavor: string | undefined;
//     qty: number;
//     note: string;

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

//const Food = model('Food', foodSchema);


module.exports = foodSchema;