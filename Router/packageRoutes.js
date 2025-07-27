import express from "express";
import {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage
} from "../controller/PackageController.js";

const router = express.Router();

// POST /api/packages — Create a new package
router.post("/", createPackage);

// GET /api/packages — Get all packages
router.get("/", getAllPackages);

// GET /api/packages/:id — Get a specific package
router.get("/:id", getPackageById);

// PUT /api/packages/:id — Update a package
router.put("/:id", updatePackage);

// DELETE /api/packages/:id — Delete a package
router.delete("/:id", deletePackage);

export default router;
