// Vendor imports
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// App imports
const config = require("./../config/config").get(process.env.NODE_ENV);

// Global variables
const SALT_I = 10;

// Schema -> Model
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  name: {
    type: String,
    maxlength: 100
  },
  lastname: {
    type: String,
    maxlength: 100
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String
  }
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
