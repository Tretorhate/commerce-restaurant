import { Ingredient, ProductItem } from "@prisma/client";
import { CargoSize, CargoType } from "../constants/cargo";

/**
 * Function for calc total products price
 * @param items - list of variations
 * @param ingredients - list of ingredients
 * @param type - type of cargo
 * @param size - size of cargo
 * @param selectedIngredients - list of selected ingredients
 * @returns total price
 */
export const calcTotalProductPrice = (
  type: CargoType,
  size: CargoSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const cargoPrice =
    items.find((item) => item.cargoType === type && item.size === size)
      ?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);
  return cargoPrice + totalIngredientsPrice;
};
