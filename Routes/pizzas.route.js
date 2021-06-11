import express from "express";
import { getPizzas } from "../controllers/pizza.controller.js";

const pizzasRouter = express.Router();

pizzasRouter.get("/", getPizzas);

export default pizzasRouter;
