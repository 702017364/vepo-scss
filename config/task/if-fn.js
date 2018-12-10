const {
  produce,
  sourceMap,
  ...defaultEnv
} = require('../dev');

module.exports = {
  produce,
  defaultEnv,
  sourceMap: !!sourceMap,
  produceFn: !!produce,
  rf: !!defaultEnv.rf
};