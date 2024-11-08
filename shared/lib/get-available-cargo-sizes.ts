import { ProductItem } from "@prisma/client";
import { CargoType, cargoSizes } from "../constants/cargo";
import { Variant } from "../components/shared/group-variants";

export const getAvailableCargoSizes = (
  type: CargoType,
  items: ProductItem[]
): Variant[] => {
  const filteredCargosByType = items.filter((item) => item.cargoType === type);

  return cargoSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredCargosByType.some(
      (Cargo) => Number(Cargo.size) === Number(item.value)
    ),
  }));
};
