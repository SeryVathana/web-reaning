import { Router } from "express";
import foodRouter from "./food.router";

const indexRouter = Router();

indexRouter.use("/food", foodRouter);

export default indexRouter;
