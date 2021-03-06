const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  city: {
    type: String,
    required: true
  }, latitude: {
    type: Number,
    required: true
  }, Longitude: {
    type: Number,
    required: true
  }
});

const City = mongoose.model("City", citySchema);

module.exports = City;