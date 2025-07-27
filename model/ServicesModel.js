// models/Service.js
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
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
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company', // ✅ sax
    required: true,
  },
}, {
  timestamps: true,
});

const Service = mongoose.model("Service", serviceSchema);
export default Service;
