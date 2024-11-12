import { Ingredient, ProductItem } from "@prisma/client";
import { CargoSize, CargoType, mapCargoType } from "../constants/cargo";
import { calcTotalProductPrice } from ".";

export const getCargoDetails = (
  type: CargoType,
  size: CargoSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcTotalProductPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );
  const textDetails = `${size} см, ${mapCargoType[type]} cargo devilery`;

  return { totalPrice, textDetails };
};
