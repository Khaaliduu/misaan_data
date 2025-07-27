// routes/orderRoutes.js
import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder
} from '../controller/OrderController.js';

const router = express.Router();

// /api/orders
router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;





  // company: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Company',
  //   required: true
  // },
  // service: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Service',
  //   required: true
  // },