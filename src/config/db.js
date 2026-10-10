const mongoose = require("mongoose");

async function connectToDB() {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
        console.error("MONGO_URI is missing from environment variables.");
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}

module.exports = connectToDB;