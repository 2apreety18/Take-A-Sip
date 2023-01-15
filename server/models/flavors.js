const { Schema } = require('mongoose');

const flavorSchema = new Schema({
  name: {
    type: String,
    default: ''

  },
  color: {
    type: String,
    default: '#000000'
  }
});

module.exports = flavorSchema;