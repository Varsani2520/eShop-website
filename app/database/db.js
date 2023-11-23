import mongoose from "mongoose";

export const connectDatabase = () => {
  try {
    mongoose.connect(process.env.MONGO_URI ,{
      dbName: "erequirement",
      
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("not connect database");
    console.log(error);
  }
};
