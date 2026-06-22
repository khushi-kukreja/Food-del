import mongoose from "mongoose";

export const connectDB=async ()=>{
  await mongoose.connect("mongodb+srv://khushikuk123:harshiv270423@cluster0.2lpre.mongodb.net/?appName=Cluster0").then(()=>console.log("DB Connected!"))
}