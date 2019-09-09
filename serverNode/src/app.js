'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = express.Router();

// Carrega as Rotas
const indexRoute = require('./routes/index');
const productRoute = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.2"
    });
});

app.use('/users', indexRoute);
app.use('/users', productRoute);


module.exports = app;