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
  HdCounterpart: {
    type: Schema.Types.ObjectId,
    ref: 'Channel',
  },
  SdCounterpart: {
    type: Schema.Types.ObjectId,
    ref: 'Channel',
  },
  quality: {
    type: String,
    required: true,
  },
  provider: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Provider',
  },
});

module.exports = mongoose.model('Channel', channelSchema);
