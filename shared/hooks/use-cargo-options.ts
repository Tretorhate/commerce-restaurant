import { ProductItem } from "@prisma/client";
import { CargoSize, CargoType } from "../constants/cargo";
import { Variant } from "../components/shared/group-variants";
import React from "react";
import { useSet } from "react-use";
import { getAvailableCargoSizes } from "../lib";

interface ReturnProps {
  size: CargoSize;
  type: CargoType;
  selectedIngredients: Set<number>;
  availableSizes: Variant[];
  currentItemId?: number;
  setSize: (size: CargoSize) => void;
  setType: (size: CargoType) => void;
  addIngredient: (id: number) => void;
}

export const useCargoOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<CargoSize>(8);
  const [type, setType] = React.useState<CargoType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const availableSizes = getAvailableCargoSizes(type, items);
  const currentItemId = items.find(
    (item) => item.cargoType === type && item.size === size
  )?.id;

  React.useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as CargoSize);
    }
  }, [type]);

  return {
    size,
    type,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  };
};
