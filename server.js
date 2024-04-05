require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const errMiddleware = require("./middleware/errorMiddleware");
var cors = require("cors");
const FRONTEND = process.env.FRONTEND;

const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

app.use(express.json());

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello Client");
});

app.use(errMiddleware);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
