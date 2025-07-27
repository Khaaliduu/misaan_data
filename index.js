import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './Config/db.js';
import userRoutes from './Router/userRoutes.js'; // <= Fiiro gaar ah: r yaree haddii file-ka sidaa yahay
import companyRoutes from './Router/compRouter.js';
import serviceRoutes from './Router/servicesRoutes.js'; // <-- Import routes
import packageRoutes from "./Router/packageRoutes.js";
import orderRoutes from "./Router/OrderRouter.js";



dotenv.config();

const app = express();

// Connect to MongoDB
connectToDb();

const port = process.env.PORT || 4000

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes); // userRoutes should export a valid router



// Use the service routes
app.use('/api/services', serviceRoutes);




// Routes
app.use("/api/companies", companyRoutes);

app.use("/api/packages", packageRoutes);

app.use('/api/orders', orderRoutes);




// Start the server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
