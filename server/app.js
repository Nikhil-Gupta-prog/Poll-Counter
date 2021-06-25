require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const pollRoutes = require("./routes/poll");

const url = process.env.DATABASE || "mongodb://127.0.0.1:27017/test-poll-db";

// Database Connect
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => console.log(`Can't Connect to DB : ${err}`));

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/user", authRoutes);
app.use("/poll", pollRoutes);

const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
  console.log(`Server is running at Port : ${port}`);
});
