'use strict';


const musics = require('../app/controllers/musics');

module.exports = function(app){
  app.get('/musics', musics.list);
  app.post('/musics', musics.new);
}
