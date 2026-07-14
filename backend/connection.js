const mongoose = require("mongoose");

const url =
  "mongodb+srv://gaurangyadav317:King1234@cluster0.s4qsu4x.mongodb.net/off-campus-interview?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(url)
  .then(() => {
    console.log("✅ Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;