const mongoose = require("mongoose");

const CharitySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    city: { type: String, default: "Kazakhstan" },
    description: { type: String, required: true },
    tags: [{ type: String }],
    imageQuery: { type: String, default: "charity" } // для картинок
  },
  { timestamps: true }
);

module.exports = mongoose.model("Charity", CharitySchema);