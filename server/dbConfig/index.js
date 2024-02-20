import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB is Connected");
  } catch (error) {
    console.log("MongoDB Error: " + error);
  }
};

export default dbConnection;