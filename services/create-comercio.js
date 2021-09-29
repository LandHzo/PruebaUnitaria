const Comercio = require("../models/comercio");

const validarComercioData = (req, res, next) => {
  const { nombre, direccion } = req.body;
  if (!nombre || !direccion) {
    res.status(400).json({ msg: "nombre y direccion son obligatorios" });
  }
  return next();
};

const crearComercio = async (req, res) => {
  try {
    const { nombre, direccion } = req.body;
    const comercio = new Comercio({ nombre, direccion });
    await comercio.save();
    res.status(200).json(comercio);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  validarComercioData,
  crearComercio,
};
