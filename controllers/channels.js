const mongoose = require('mongoose');

const Channel = require('../models/channel');
const Provider = require('../models/provider');

exports.getAllChannels = async (req, res) => {
  try {
    const channels = await Channel.find();
    res.status(200).json(channels);
  } catch (err) {
    console.log(err);
  }
};

exports.postAddChannel = async (req, res) => {
  try {
    const { name } = req.body;
    const { alcPrice } = req.body;
    const { provider } = req.body;
    const { HdCounterpart } = req.body;
    const { quality } = req.body;
    const channel = await Channel.create({
      name,
      alcPrice,
      quality,
      HdCounterpart,
      provider: mongoose.Types.ObjectId(provider),
    });
    const pr = await Provider.findById(provider, 'channels').exec();
    pr.channels.push(channel);
    pr.save();
    res.status(201).end();
  } catch (err) {
    console.log(err);
  }
};
