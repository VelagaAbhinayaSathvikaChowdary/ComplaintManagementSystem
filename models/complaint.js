import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },

  category: {
    type: String,
    enum: ['Water', 'Road', 'Electricity', 'Food', 'Others'],
    required: true
  },

  description: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Resolved'],
    default: 'Pending'
  }

}, { timestamps: true });

export default mongoose.model("Complaint", ComplaintSchema);
