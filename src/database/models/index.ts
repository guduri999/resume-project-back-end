import mongoose from "mongoose";
import { profileSchema } from "../schema";

export const Profile = mongoose.model('Profile', profileSchema)