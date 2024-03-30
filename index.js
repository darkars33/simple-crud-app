const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const personInfoRoute = require("./routes/personInfo.route.js");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = 5000;

app.use(cors({origin: "*"}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//routes

app.use("/api/products", productRoute);
app.use("/api/personInfo", personInfoRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


mongoose
  .connect(
    `${process.env.DB_URL}`
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log("Server is running on port 5000"));
  })
  .catch((err) => console.error(err)); 
