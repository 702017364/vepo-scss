const fs = require('fs');
const formatDate = require('./date');

const getDate = () => {
  const date = formatDate(
    new Date(),
    'HH时MM分SS秒'
  );
  const uuid = Math.random().toString().replace('0.', '');
  return [
    date,
    `(${uuid})`
  ];
};

const printDate = (...args) => console.log(...getDate(), ...args);

const printSass = (src, varName) => {
  fs.readFile(src, (err, data) => {
    if(err) return new Error(err);
    let value = data.toString();
  });
};

module.exports = {
  getDate,
  printDate,
  printSass
};