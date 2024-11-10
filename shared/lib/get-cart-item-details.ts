import { CargoSize, CargoType, mapCargoType } from "../constants/cargo";
import { CartStateItem } from "./get-cart-details";

export const getCartItemDetails = (
  ingredients: CartStateItem["ingredients"],
  cargoType: CargoType,
  cargoSize: CargoSize
): string => {
  const details = [];

  if (cargoType && cargoSize) {
    const typeName = mapCargoType[cargoType];
    details.push(`${typeName} ${cargoSize} tons`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(", ");
};
