import "dotenv/config";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    const mongoURI =
      process.env.MONGODB_URI || "mongodb://localhost:27017/admin-auth";
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const email = "admin@example.com";

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log("Admin already exists with this email.");
      return process.exit(0);
    }

    // Create new admin
    const adminData = {
      email,
      password: "admin123", // Will be hashed by pre-save hook
    };

    const admin = new Admin(adminData);
    await admin.save();

    console.log("Admin user created successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error creating admin:", error.message);
    process.exit(1);
  }
};

createAdmin();
