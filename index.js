///Constante 
const express = require('express');
const routespath = require("./router");
const status = require('http-status')
// const conf = require("../conf/config");
var cors = require('cors')
const bodyParser = require('body-parser');
const port = process.env.PORT || 8081;
// var jwt = require('jsonwebtoken');


/// Criando Configurações para Utilização dos VERBS [POST, GET, PUT, DELETE]
/// e criação de middleware atraves do express
const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json())

app.use("/crm/v2", routespath);

///MIDDLEWARE 404: url's não encontradas;
app.use((request, response, next) => {
    response.status(status.NOT_FOUND).send()
})

///MIDDLEWARE 500: ;
app.use((error, request, response, next) => {
    response.status(status.INTERNAL_SERVER_ERROR).json({ error })
})

/// Criando Servidor
const server = require('http').createServer(app)

/// Listen 
server.listen(port, () => {
    console.log(`Servidor em execução na Port:${port}`)
});