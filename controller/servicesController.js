// controllers/serviceController.js
import Service from '../model/ServicesModel.js';

// POST - Create a new service
export const createService = async (req, res) => {
  try {
    const { image, name, description, company } = req.body;
    const newService = new Service({ image, name, description, company });
    await newService.save();
    res.status(201).json({ message: "Service created successfully", service: newService });
  } catch (error) {
    res.status(500).json({ message: "Failed to create service", error: error.message });
  }
};

// GET - Get all services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().populate('company', 'name image');
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch services", error: error.message });
  }
};

// GET - Get single service by ID
export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate('company', 'name image');
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch service", error: error.message });
  }
};

// PUT - Update service
export const updateService = async (req, res) => {
  try {
    const { image, name, description, company } = req.body;
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { image, name, description, company },
      { new: true }
    );
    if (!updatedService) return res.status(404).json({ message: "Service not found" });
    res.status(200).json({ message: "Service updated successfully", service: updatedService });
  } catch (error) {
    res.status(500).json({ message: "Failed to update service", error: error.message });
  }
};

// DELETE - Delete service
export const deleteService = async (req, res) => {
  try {
    const deleted = await Service.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Service not found" });
    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete service", error: error.message });
  }
};
