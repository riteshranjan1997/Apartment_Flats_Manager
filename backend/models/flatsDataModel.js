const { array } = require("joi");
const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
  {
    apartment_id: {
      type: String,
      required: true,
    },
    resident_type: {
      type: String,
      required: true,
    },
    flat_id: {
      type: String,
      required: true,
    },
    flat_number: {
      type: String,
      required: true,
    },
    flat_image: {
      type: Array,
    },
    block: {
      type: String,
      required: true,
    },
    flat_resident: {
      type: Array,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Flat", flatSchema);
