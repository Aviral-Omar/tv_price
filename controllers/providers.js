const Provider = require('../models/provider');

exports.getAllProviders = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (err) {
    console.log(err);
  }
};

exports.postAddProvider = async (req, res) => {
  try {
    const { name } = req.body;
    await Provider.create({ name });
    res.status(201).end();
  } catch (err) {
    console.log(err);
  }
};
