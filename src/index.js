// load ENV data into process.ENV
require('dotenv').config();

// API server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";

const chalk = require('chalk');
const morgan     = require('morgan');
const express    = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require('../apiRoutes');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', apiRoutes());

app.listen(PORT, () => {
  console.log(chalk.magenta('autoSERV'),`ascension initalization complete, now listening on PORT: ${PORT}`);
});
