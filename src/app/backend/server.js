const express = require('express');
const mongoose = require('mongoose');
const carRoutes = require('./routes/carRoutes'); // Import your routes
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || "mongodb+srv://admin:MxgeNf545birXh1a@sthlmcar.imgb9.mongodb.net/?retryWrites=true&w=majority&appName=STHLMCAR";
mongoose.connect(mongoURI, {

})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Use your routes
app.use('/cars', carRoutes);

// Start the server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});