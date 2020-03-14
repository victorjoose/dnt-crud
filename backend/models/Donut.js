/* eslint-disable no-undef */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonutSchema = new Schema({
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

module.exports = Donut = mongoose.model("Donut", DonutSchema);
