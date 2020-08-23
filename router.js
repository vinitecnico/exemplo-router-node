/// LIBRARY
const express = require("express");

///API'S
const controllerDemanda = require('./demanda');

/// EXPRESS
const routes = express.Router();

///Demanda
routes.post('/demanda', controllerDemanda.postDemanda);
routes.get('/demanda', controllerDemanda.getDemanda);
routes.get('/demanda/:id', controllerDemanda.getOnlyDemanda);
routes.put('/demanda/:id', controllerDemanda.putDemanda);
routes.delete('/demanda/:id', controllerDemanda.deleteDemanda);

module.exports = routes