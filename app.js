require('dotenv').config;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Start the server on port 3000
app.listen(3000, "localhost", () => {
  console.info("App is starting...");
});