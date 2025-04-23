// Import required libraries
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Import files
const dbConnection = require("./config/dataBase");
const globalError = require("./middleWares/errorMiddleware");
const ApiError = require("./utils/apiError");
const courseRoute = require("./routes/courseRoute");

// usage
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config({ path: "config.env" });

// Connect to MongoDB Database
dbConnection();

// Routes
app.use("/api/courses", courseRoute);
app.use((req, res, next) => {
  next(new ApiError(`can not find this route : ${req.originalUrl}`, 400));
});

// Handle Errors In Express
app.use(globalError);

// Server
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// Handle Rejections Out Side Express
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection Errors : ${err.name} | ${err.message}`);
  server.close(() => {
    console.log(`shutting down ....`);
    process.exit(1);
  });
});
