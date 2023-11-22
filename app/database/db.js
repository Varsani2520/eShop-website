import mongoose from "mongoose";

export const connectDatabase = () => {
  try {
    mongoose.connect(process.env.MONGO_URL ,{
      dbName: "erequirement",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("not connect database");
    console.log(error);
  }
};
