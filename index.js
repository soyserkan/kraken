const express = require('express');
const bodyParser = require('body-parser');
const { port } = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const krakenRouter = require('./app/routes/kraken');

app.use('/', krakenRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});