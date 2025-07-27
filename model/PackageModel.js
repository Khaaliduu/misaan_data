// models/Package.js
import mongoose from 'mongoose';
const packageSchema = new mongoose.Schema({
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
    price: {
      type: String,
      required: true,
    },
    offerPrice: {
      type: String,
      required: true,
    },
    
    validity: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company', // ✅ sax
      required: true,
    },
  service: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: 'Service',
     required: true,

    // ✅ sax 
    }
}, {
  timestamps: true,
});



const Package = mongoose.model("Package", packageSchema);
export default Package;
