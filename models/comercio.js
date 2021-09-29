var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ComercioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
});

ComercioSchema.statics.Constructor = function (nombre, direccion) {
  return new this({
    nombre: nombre,
    direccion: direccion,
  });
};

ComercioSchema.statics.todos = function (cb) {
  return this.find({}, cb);
};

module.exports = mongoose.model("Comercio", ComercioSchema);
