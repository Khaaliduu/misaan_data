// models/Company.js
import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Waxay kusoo dareysaa createdAt iyo updatedAt
});

// Create the model
const Company = mongoose.model("Company", companySchema);

export default Company;
