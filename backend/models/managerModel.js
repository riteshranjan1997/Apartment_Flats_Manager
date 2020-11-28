const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managerSchema = new Schema(
  {
    manager_id: {
      type: String,
      required: true,
      trim: true,
    },
    manager_name: {
      type: String,
      required: true,
      trim: true,
    },
    manager_apartment_id: {
      type: String,
      required: true,
    },
    manager_user_id: {
      type: String,
      required: true,
      trim: true,
    },
    manager_password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Manager", managerSchema);
