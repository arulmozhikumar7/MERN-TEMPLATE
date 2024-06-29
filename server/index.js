const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
connectDB();

app.use(express.json());

app.listen(port, () => console.log(`Server running on port ${port}`));
