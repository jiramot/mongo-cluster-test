'use strict';

const bodyParser = require('body-parser');

module.exports = function(app){
  console.log("load express config");
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
}
