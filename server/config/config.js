var env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];

setTimeout(() => {

}, 1200000)

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}