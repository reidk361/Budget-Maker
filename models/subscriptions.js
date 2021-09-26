const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/my_database");

const Schema = mongoose.Schema;

const schema = new Schema({
  brand: String,
  title: String,
  cost: Number,
  level: Number
});

const Subscription = mongoose.model("Subscription", schema);

module.exports = Subscription;