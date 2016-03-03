'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MusicSchema = new Schema({
  name: { type: String, default: '' },
  shard: { type: Number}
});


MusicSchema.path('name').required(true, 'name cannot be blank');

mongoose.model('Music', MusicSchema);
