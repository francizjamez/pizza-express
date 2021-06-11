import { orders, pizzas } from "./data.js";

export const getOrders = (req, res) => {
  const populate = orders.map(({ pizza, quantity }) => {
    const pizzaFound = pizzas.find((el) => el.id === pizza);
    return { pizza: pizzaFound.name, quantity: quantity };
  });
  res.send(populate);
};

export const getOneOrder = (req, res) => {
  const paramsID = req.params.id;
  let orderFound = orders.find((el) => el.id == paramsID);
  const pizzaFound = pizzas.find((el) => el.id == orderFound.pizza);
  orderFound = { ...orderFound, pizza: pizzaFound };

  res.send(orderFound);
};
