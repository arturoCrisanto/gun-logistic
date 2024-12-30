import mongoose from "mongoose";

const GunSchema = new mongoose.Schema({
  serialNo: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Removes unnecessary whitespace
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  caliber: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ["Available", "Assigned", "Maintenance"],
    default: "Available",
    required: true,
  },
  maintenanceLogs: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      description: {
        type: String,
        required: true,
        trim: true,
      },
      cost: {
        type: Number,
        min: 0, // Ensures cost is non-negative
      },
    },
  ],
});

// Prevents model overwrite during development
export default mongoose.models.Gun || mongoose.model("Gun", GunSchema, "guns"); // Specify the collection name
