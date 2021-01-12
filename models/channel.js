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
  provider: {
    type: Schema.Types.ObjectId,
    ref: 'Provider',
  },
});

module.exports = mongoose.model('Channel', channelSchema);
