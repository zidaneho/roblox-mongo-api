require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Parse JSON bodies (crucial for Roblox POST requests)
app.use(express.json());

// Connect to MongoDB using the Environment Variable we will set in Render
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.error("Could not connect to MongoDB", err));

// Example Route
app.get("/player-data/:id", async (req, res) => {
    // Your Mongoose logic here to find/create the player using req.params.id
    res.send({ message: "Data fetched for " + req.params.id });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});