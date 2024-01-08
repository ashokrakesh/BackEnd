const mongoose = require('mongoose');
const { randomUUID } = require('crypto');
var uuid = require('uuid');

const dataSchema = new mongoose.Schema({
    id: {
        type: 'UUID',
        required: true,
        default: uuid.v4
      },
      username: {
        type: String,
        required: true,
        index: { unique: true }
      },
      password: {
        type: String,
        required: true
      },
      gravatar: {
        type: String
      },
      views: {
        type: Number,
        default: 0,
      }
})

module.exports = mongoose.model('Data', dataSchema)