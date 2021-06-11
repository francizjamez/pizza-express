import express from "express";
import { getOrders, getOneOrder } from "../controllers/orders.controller.js";

const ordersRouter = express.Router();

ordersRouter.get("/", getOrders);
ordersRouter.get("/:id", getOneOrder);

export default ordersRouter;
