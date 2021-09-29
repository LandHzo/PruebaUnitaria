const Comercio = require("../models/comercio");

const validarComercioEliminarData = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ msg: "id del comercio es obligatorio" });
  }

  return next();
};

const eliminarComercio = async (req, res, next) => {
  const { id } = req.params;
  await Comercio.findOneAndRemove(id);
  res.status(200).json({ msg: "El comercio ha sido eliminado" });
};

module.exports = {
  validarComercioEliminarData,
  eliminarComercio,
};
