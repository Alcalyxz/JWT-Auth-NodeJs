import mongoose from "mongoose";
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlass"))
  .catch((error) => console.error(error));
