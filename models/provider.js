const mongoose = require('mongoose');

const { Schema } = mongoose;

const providerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bouquets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Bouquet',
    },
  ],
  channels: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Channel',
    },
  ],
});

module.exports = mongoose.model('Provider', providerSchema);
