const express = require("express");
const router = express.Router();

const { obtenerComercios } = require("../services/obtener-comercios");
const {
  validarComercioData,
  crearComercio,
} = require("../services/create-comercio");
const {
  validarComercioActualizarData,
  actualizarComercio,
} = require("../services/update-comercio");
const {
  validarComercioEliminarData,
  eliminarComercio,
} = require("../services/delete-comercio");
const { validarComercioExistente } = require("../helpers/comercio");

router.get("/comercio", obtenerComercios);

router.post("/comercio", validarComercioData, crearComercio);

router.put(
  "/comercio/:id",
  validarComercioExistente,
  validarComercioActualizarData,
  actualizarComercio
);

router.delete(
  "/comercio/:id",
  validarComercioEliminarData,
  validarComercioExistente,
  eliminarComercio
);

module.exports = router;
