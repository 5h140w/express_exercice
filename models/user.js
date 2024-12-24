// import mongoose
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      enum: ["hedi", "aziz", "rafaa", "mahdi", "safa", "yosr"],
    },
    lastname: { type: String, required: true },
    age: { type: Number, default: 20 },
    isActive: { type: Boolean },
    birthday: { type: Date },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
