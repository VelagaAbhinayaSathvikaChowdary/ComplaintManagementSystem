import Complaint from "./models/Complaint.js";

// Create complaint
export const createComplaint = async (req, res) => {
  const { studentName, category, description } = req.body;

  const complaint = await Complaint.create({
    studentName,
    category,
    description
  });

  res.json(complaint);
};

// Get all complaints
export const getComplaints = async (req, res) => {
  const complaints = await Complaint.find();
  res.json(complaints);
};

// Update complaint status
export const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const updated = await Complaint.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );

  res.json(updated);
};
