// Vendor imports
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// App imports
const config = require("./config/config").get(process.env.NODE_ENV);

const app = express();

// Mongoose config
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Routes

// Server run
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("SERVER RUNNING");
});
