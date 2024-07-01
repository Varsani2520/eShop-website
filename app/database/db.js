import mongoose from "mongoose";

export const connectDatabase = () => {
  try {
    mongoose.connect("mongodb+srv://Rni:Rni@cluster0.avoq4cu.mongodb.net/", {
      dbName: "erequirement",
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("not connect database");
    console.log(error);
  }
};
