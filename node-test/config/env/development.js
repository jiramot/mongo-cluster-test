'use strict';

const fs = require('fs');
const envFile = require('path').join(__dirname, 'env.json');

let env = {};

if (fs.existsSync(envFile)) {
  env = fs.readFileSync(envFile, 'utf-8');
  env = JSON.parse(env);
  Object.keys(env).forEach(key => process.env[key] = env[key]);
}

module.exports = {
  db: 'mongodb://192.168.99.100:32792/noobjs_dev'
};
