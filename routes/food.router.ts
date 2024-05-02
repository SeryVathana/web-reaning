import { Router } from "express";
import { GetAllFoods } from "../controllers/food.controller";

const foodRouter = Router();

foodRouter.get("/getAllFoods", GetAllFoods);

export default foodRouter;
