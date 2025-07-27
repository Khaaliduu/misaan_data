// routes/servicesRoutes.js
import express from 'express';
import {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService
} from '../controller/servicesController.js';

const router = express.Router();

// POST - Create new service
router.post('/', createService);

// GET - Get all services
router.get('/', getAllServices);

// GET - Get service by ID
router.get('/:id', getServiceById);

// PUT - Update service
router.put('/:id', updateService);

// DELETE - Delete service
router.delete('/:id', deleteService);

export default router;
