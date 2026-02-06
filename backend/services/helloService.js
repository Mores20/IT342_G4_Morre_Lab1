const helloRepository = require('../repositories/helloRepository');

exports.getGreeting = async () => {
  // business logic can go here
  const data = helloRepository.fetchGreeting();
  return { message: data.text };
};
