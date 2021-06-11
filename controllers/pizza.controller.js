import { pizzas } from "./data.js";

export const getPizzas = (req, res) => {
  let ingredients = req.query.ingredients.split(",");

  console.log(ingredients);

  if (ingredients) {
    res.send(
      pizzas.filter((el) => {
        let count = 0;
        for (let i = 0; i < ingredients.length; i++) {
          if (el.ingredients.includes(ingredients[i])) {
            count++;
          }
        }
        return count === ingredients.length;
      })
    );
  } else {
    res.send(pizzas);
  }
};
