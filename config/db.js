const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
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
