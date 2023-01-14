const { model, Schema } = require('mongoose');

const UserSchema = new Schema({

    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    designation: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    username: {
        type: String,
        default:'',
        lowercase: true
    },
    usertype: {
        type: String
    }
  
  })
  
  const User = model('User', UserSchema);
  
  
  module.exports = User;