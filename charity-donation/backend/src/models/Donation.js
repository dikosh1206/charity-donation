const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    charity: { type: mongoose.Schema.Types.ObjectId, ref: "Charity", required: true },
    amountKZT: { type: Number, required: true, min: 100 },
    message: { type: String, default: "" },
    status: { type: String, enum: ["pending", "paid"], default: "paid" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Donation", DonationSchema);