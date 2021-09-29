const Comercio = require("../models/comercio");

const obtenerComercios = async (req, res, next) => {
  try {
    const comercios = await Comercio.find();
    res.status(200).json(comercios);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  obtenerComercios,
};
