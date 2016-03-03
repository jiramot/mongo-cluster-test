'use strict';

const mongoose = require('mongoose');
const Music = mongoose.model('Music');
const uuid = require('node-uuid');


exports.list = function (req, res) {
  var musics = Music.find({}, function (err, musics){
      res.json(musics);
  })
}

exports.new = function(req, res){
  var music = new Music({name: uuid.v1(), shard: randomIntInc(0,1)});
  var promise = music.save()
  promise.then(function(music){
      res.json({"music": music});
  }).catch(function(error){
    res.status(400).send('Something broke!');
  });

}

function randomIntInc (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
