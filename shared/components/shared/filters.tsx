"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { useFilters, useIngredients, useQueryFilters } from "@/shared/hooks";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  return (
    <div className={cn("", className)}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      {/* Верхние Чекбоксы */}

      <CheckboxFiltersGroup
        title="Cargo Type"
        name="cargoTypes"
        className="mb-5"
        onClickCheckbox={filters.setCargoTypes}
        selected={filters.cargoTypes}
        items={[
          { text: "Standart", value: "1" },
          { text: "Express", value: "2" },
        ]}
      />

      <CheckboxFiltersGroup
        title="Sizes"
        className="mt-5"
        onClickCheckbox={filters.setSizes}
        name="sizes"
        selected={filters.sizes}
        items={[
          { text: "6 ton", value: "6" },
          { text: "8 ton", value: "8" },
          { text: "10 ton", value: "10" },
        ]}
      />

      {/* Фильтр Цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Cost Range</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 1000,
          ]}
          onValueChange={updatePrices}
        />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};
