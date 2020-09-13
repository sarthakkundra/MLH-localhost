const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/workshop", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log('DB connected successfully');

  } catch (e) {
      console.error(`Error: ${e}`)
  }
};

module.exports = connectDB;
