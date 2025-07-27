// // controllers/orderController.js
// import Order from '../model/OderModel.js';

// // ➕ Add New Order
// export const createOrder = async (req, res) => {
//   try {
//     const newOrder = await Order.create(req.body);
//     res.status(201).json({ message: 'Order created successfully', data: newOrder });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to create order', error: error.message });
//   }
// };

// // 📥 Get All Orders
// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().populate('user company service package');
//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
//   }
// };

// // 🔍 Get Order By ID
// export const getOrderById = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id).populate('user company service package');
//     if (!order) return res.status(404).json({ message: 'Order not found' });
//     res.status(200).json(order);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to get order', error: error.message });
//   }
// };

// // 📝 Update Order
// export const updateOrder = async (req, res) => {
//   try {
//     const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updated) return res.status(404).json({ message: 'Order not found' });
//     res.status(200).json({ message: 'Order updated successfully', data: updated });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to update order', error: error.message });
//   }
// };

// // ❌ Delete Order
// export const deleteOrder = async (req, res) => {
//   try {
//     const deleted = await Order.findByIdAndDelete(req.params.id);
//     if (!deleted) return res.status(404).json({ message: 'Order not found' });
//     res.status(200).json({ message: 'Order deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to delete order', error: error.message });
//   }
// };




// controllers/orderController.js
import Order from '../model/OderModel.js';

// ➕ Add New Order
export const createOrder = async (req, res) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).json({ message: 'Order created successfully', data: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
};

// 📥 Get All Orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user package');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
  }
};

// 🔍 Get Order By ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user package');
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get order', error: error.message });
  }
};

// 📝 Update Order
export const updateOrder = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json({ message: 'Order updated successfully', data: updated });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order', error: error.message });
  }
};

// ❌ Delete Order
export const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Order not found' });
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete order', error: error.message });
  }
};

