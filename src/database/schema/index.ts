import mongoose from "mongoose";

export const profileSchema = new mongoose.Schema({
    name: String,
    email: String,
})

