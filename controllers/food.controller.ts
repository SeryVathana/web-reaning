import { Request, Response } from "express";
import { FoodModel } from "../models/food.model";

export async function GetAllFoods(req: Request, res: Response) {
  try {
    const { title } = req.query;

    let foods;
    if (title) {
      foods = await FoodModel.find({ title: title });
    } else {
      foods = await FoodModel.find({});
    }

    res.status(200).json({ message: "success", data: foods });
  } catch (error) {
    console.log(error);
    res.send("unexpected error");
  }
}
