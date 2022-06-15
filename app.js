require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const helper = require('./helpers/response');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(helper);
app.use(`${process.env.BASE_URL}`, routes);

app.listen(PORT, () => {
  console.log('running on port', PORT);
});
