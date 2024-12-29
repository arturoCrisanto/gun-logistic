import mongoose from "mongoose";

const GunSchema = new mongoose.Schema({
  serialNo: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  model: { type: String, required: true },
  caliber: { type: String },
  status: {
    type: String,
    enum: ["Available", "Assigned", "Maintenance"],
    default: "Available",
  },
  maintenanceLogs: [
    {
      date: { type: Date, default: Date.now },
      description: String,
      cost: Number,
    },
  ],
});

export default mongoose.models.Gun || mongoose.model("Gun", GunSchema);
