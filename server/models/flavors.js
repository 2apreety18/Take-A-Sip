const { Schema } = require('mongoose');

const flavorSchema = new Schema({
  name: {
    type: String,
  //  required: true
    default: ''

  },
  color: {
    type: String,
    default: '#000000'
  }
});

module.exports = flavorSchema;