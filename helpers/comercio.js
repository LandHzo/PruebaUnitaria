const Comercio = require("../models/comercio");

const validarComercioExistente = async (req, res, next) => {
  const { id } = req.params;
  const comercio = await Comercio.findById(id);
  if (!comercio) {
    res.status(400).json({ msg: "No existe un comercio con el id solicitado" });
  }

  return next();
};

module.exports = { validarComercioExistente };
