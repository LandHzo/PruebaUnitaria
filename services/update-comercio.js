const Comercio = require("../models/comercio");

const validarComercioActualizarData = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ msg: "id del comercio es obligatorio" });
  }

  const { nombre, direccion } = req.body;
  if (!nombre || !direccion) {
    res.status(400).json({ msg: "nombre y direccion son obligatorios" });
  }
  return next();
};

const actualizarComercio = async (req, res, next) => {
  try {
    const { nombre, direccion } = req.body;
    const { id } = req.params;
    const newComercio = await Comercio.findByIdAndUpdate(
      id,
      { nombre, direccion },
      { returnOriginal: false }
    );
    res.status(200).json(newComercio);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  validarComercioActualizarData,
  actualizarComercio,
};
