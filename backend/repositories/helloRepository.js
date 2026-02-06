const HelloModel = require('../models/helloModel');

exports.fetchGreeting = () => {
  // simulate data access layer
  const model = new HelloModel('Hello from backend (model)');
  return model;
};
