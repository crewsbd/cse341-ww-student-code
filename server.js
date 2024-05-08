const express = require('express');
const bodyParser = require('body-parser');

const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();

// Catch all
process.on('uncaughtException', (error, origin) => {
  console.log(`Uncaught error: ${error.name}: ${error.message}\n${error.stack} \n${origin}`)
})

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
