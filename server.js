import express from "express";
import connectDB from "./config/db.js";
import { createComplaint, getComplaints, updateStatus } from "./controllers/complaintController.js";

const app = express();
app.use(express.json());

connectDB();

// Routes
app.post("/complaint", createComplaint);
app.get("/complaint", getComplaints);
app.put("/complaint/:id", updateStatus);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
