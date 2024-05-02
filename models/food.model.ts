import mongoose, { Mongoose, Schema } from "mongoose";

const foodSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    price: { type: Number },
    img_url: { type: String },
  },
  { timestamps: true }
);

export const FoodModel = mongoose.model("foods", foodSchema);
