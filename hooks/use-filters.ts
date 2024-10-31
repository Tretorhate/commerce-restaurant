import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import React from "react";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  donutTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  donutTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setDonutTypes: (value: string) => void;
  setSizes: (value: string) => void;
  setSelectedIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchparams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  /* filter of ingredients */
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchparams.get("ingredients")?.split(","))
  );

  /* filter of sizes */
  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchparams.has("sizes") ? searchparams.get("sizes")?.split(",") : []
    )
  );

  /* filter of donuttypes */
  const [donutTypes, { toggle: toggleDonutTypes }] = useSet(
    new Set<string>(
      searchparams.has("donutTypes")
        ? searchparams.get("donutTypes")?.split(",")
        : []
    )
  );
  /* filter of prices */
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchparams.get("priceFrom")) || undefined,
    priceTo: Number(searchparams.get("priceTo")) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    sizes,
    donutTypes,
    selectedIngredients,
    prices,
    setPrices: updatePrice,
    setDonutTypes: toggleDonutTypes,
    setSizes: toggleSizes,
    setSelectedIngredients: toggleIngredients,
  };
};
