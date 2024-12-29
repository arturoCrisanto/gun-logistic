import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
  gunId: { type: mongoose.Schema.Types.ObjectId, ref: "Gun", required: true },
  employeeName: { type: String, required: true },
  issuedDate: { type: Date, default: Date.now },
  returnDate: { type: Date },
  status: { type: String, enum: ["Issued", "Returned"], default: "Issued" },
});

export default mongoose.models.Assignment ||
  mongoose.model("Assignment", AssignmentSchema);
