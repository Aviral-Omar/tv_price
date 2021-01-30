const mongoose = require('mongoose');

const Provider = require('../models/provider');
const Bouquet = require('../models/bouquet');

exports.postAddBouquet = async (req, res) => {
  try {
    const { name } = req.body;
    const { price } = req.body;
    const { provider } = req.body;
    const { channels } = req.body;
    const bouquet = await Bouquet.create({ name, price, provider, channels });
    const pr = await Provider.findById(provider, 'bouquets').exec();
    pr.bouquets.push(bouquet);
    pr.save();
    res.status(201).end();
  } catch (err) {
    console.log(err);
  }
};

exports.getBouquets = async (req, res) => {
  try {
    const bouquets = await Bouquet.find().exec();
    res.status(200).json(bouquets);
  } catch (err) {
    console.log(err);
  }
};
