const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/.env" });

const userRouter = require("./routes/userRoute");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user", userRouter);

module.exports = app;
