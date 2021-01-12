const mongoose = require('mongoose');

const { Schema } = mongoose;

const bouquetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: 'Provider',
  },
  channels: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Channel',
    },
  ],
});

module.exports = mongoose.model('Bouquet', bouquetSchema);
