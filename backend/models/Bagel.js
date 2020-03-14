/* eslint-disable no-undef */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BagelSchema = new Schema({
  sabor: {
    type: String
  },

  preco: {
    type: Number
  },

  descricao: {
    type: String
  }
});

module.exports = Bagel = mongoose.model("Bagel", BagelSchema);
