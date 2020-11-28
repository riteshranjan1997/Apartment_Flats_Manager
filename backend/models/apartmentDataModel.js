const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apartmentSchema = new Schema(
  {
    apartment_id: {
      type: String,
      required: true,
      trim: true,
    },
    apartment_name: {
      type: String,
      trim: true,
    },
    apartment_blocks: {
      type: Array,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Apartments", apartmentSchema);
