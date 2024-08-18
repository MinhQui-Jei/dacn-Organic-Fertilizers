import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://minhqui:2003@cluster0.doo3n.mongodb.net/oganic').then(() => console.log("DB Connected"));
}