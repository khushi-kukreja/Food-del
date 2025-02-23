import mongoose from "mongoose";

export const connectDB=async ()=>{
  await mongoose.connect("mongodb+srv://khushikuk123:roshni1208@cluster0.2lpre.mongodb.net/food-del").then(()=>console.log("DB Connected!"))
}