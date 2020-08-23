const status = require("http-status");

const result = [
  { id: "Find", label: "Find..." },
  { id: "FindAgain", label: "Find Again" },
  { id: "Copy" },
  { id: "CopyAgain", label: "Copy Again" },
  { id: "CopySVG", label: "Copy SVG" },
  { id: "ViewSVG", label: "View SVG" },
  { id: "ViewSource", label: "View Source" },
  { id: "SaveAs", label: "Save As" },
];

///GET demanda
exports.getDemanda = (request, response, next) => {
  response.status(status.OK).send(result);
};

///GET Demanda:ID
exports.getOnlyDemanda = (request, response, next) => {
  const item = result[0];
  item.id = request.params.id;
  response.status(status.OK).send(item);
};

///POST Demanda
exports.postDemanda = (request, response, next) => {
  //request.body.name,
  response
    .status(status.OK)
    .send(JSON.stringify("Demanda cadastrado com sucesso"));
};

///PUT Demanda
exports.putDemanda = (request, response, next) => {
  response
    .status(status.CREATED)
    .send(JSON.stringify("Demanda atualizado com sucesso."));
};

///DELETE Demanda
exports.deleteDemanda = (request, response, next) => {
  response
    .status(status.GONE)
    .send(JSON.stringify("Demanda deletado com sucesso."));
};
