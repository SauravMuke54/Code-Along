const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes=require('./routes/auth')

require("dotenv").config();
const port = 4000;
const mongoose = require("mongoose");
const DB = process.env.DATABASE;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(DB).then(() => {
    console.log("DB connected");
  });

app.use('/api',authRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});