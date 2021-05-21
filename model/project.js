var mongoose = require('mongoose');  
var project = new mongoose.Schema({  
  naziv: String,
  opis: String,
  cijena: Number,
  obavljeno: String,
  pocetak: Date,
  zavrsetak: Date,
  clanovi: String
});
mongoose.model('Project', project);