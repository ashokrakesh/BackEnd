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
        required: true
      },
      title: {
        type: String,
        required: true
      },
      body: {
        type: String,
        required: true
      },
      tagname: {
        type: String,
        required: true
      }
})

module.exports = mongoose.model('PostData', dataSchema)