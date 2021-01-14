const Provider = require('../models/provider');

exports.postAddProvider = async (req, res) => {
  try {
    const { name } = req.body;
    await Provider.create({ name });
    res.status(201).end();
  } catch (err) {
    console.log(err);
  }
};
