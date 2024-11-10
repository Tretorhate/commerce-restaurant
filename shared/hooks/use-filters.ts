import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import React from "react";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

interface QueryFilters extends PriceProps {
  cargoTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  cargoTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (name: keyof PriceProps, value: number) => void;
  setCargoTypes: (value: string) => void;
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

  /* filter of cargotypes */
  const [cargoTypes, { toggle: toggleCargoTypes }] = useSet(
    new Set<string>(
      searchparams.has("cargoTypes")
        ? searchparams.get("cargoTypes")?.split(",")
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

  return React.useMemo(
    () => ({
      sizes,
      cargoTypes,
      selectedIngredients,
      prices,
      setPrices: updatePrice,
      setCargoTypes: toggleCargoTypes,
      setSizes: toggleSizes,
      setSelectedIngredients: toggleIngredients,
    }),
    [sizes, cargoTypes, prices, selectedIngredients]
  );
};
