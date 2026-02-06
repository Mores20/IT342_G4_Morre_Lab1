const helloService = require('../services/helloService');

exports.getHello = async (req, res, next) => {
  try {
    const result = await helloService.getGreeting();
    res.json(result);
  } catch (err) {
    next(err);
  }
};
