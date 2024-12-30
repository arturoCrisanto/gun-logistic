import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
  gunId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gun",
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
    trim: true, // Removes unnecessary whitespace
  },
  issuedDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
    validate: {
      validator: function (value) {
        // Ensure returnDate is after issuedDate
        return !value || value > this.issuedDate;
      },
      message: "Return date must be after the issued date.",
    },
  },
  status: {
    type: String,
    enum: ["Issued", "Returned"],
    default: "Issued",
  },
});

// Ensure `mongoose.models` prevents model overwrite during development
export default mongoose.models.Assignment ||
  mongoose.model("Assignment", AssignmentSchema);
