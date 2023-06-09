const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

connectDB = async () => {
  mongoose
    .connect(process.env.DB_URL, {})
    .then(() => {
      console.log("MongoDB is connected successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDB;
