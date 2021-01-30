const mongoose = require('mongoose');

const { Schema } = mongoose;

const channelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  alcPrice: {
    type: Number,
    required: true,
  },
  quality: {
    type: String,
    required: true,
  },
  HdCounterpart: {
    type: Schema.Types.ObjectId,
    ref: 'Channel',
  },
  provider: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Provider',
  },
});

module.exports = mongoose.model('Channel', channelSchema);
