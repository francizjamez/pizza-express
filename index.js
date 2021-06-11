import express from "express";
import mongoose from "mongoose";
import ordersRouter from "./Routes/orders.route.js";
import pizzasRouter from "./Routes/pizzas.route.js";
const PORT = 4000;

//mongo initialization
mongoose.connect("mongodb://127.0.0.1:27017/PizzaExpress", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

//express initialization
const app = express();

//middlewares
app.use(express.json());

//routes
app.use("/api/orders", ordersRouter);
app.use("/api/pizzas", pizzasRouter);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
