import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filtercheckbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      {/* Верхние Чекбоксы */}

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Collectable" value="1" />
        <FilterCheckbox text="Newest" value="2" />
      </div>

      {/* Фильтр Цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Cost Range</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            defaultValue={0}
          />
          <Input type="number" placeholder="5000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "Strawberry", value: "1" },
          { text: "Blueberry", value: "2" },
          { text: "Raspberry", value: "3" },
          { text: "Chocolate", value: "4" },
          { text: "Cream", value: "5" },
          { text: "Caramel", value: "6" },
          { text: "Banana", value: "7" },
          { text: "Mango", value: "8" },
          { text: "Orange", value: "9" },
          { text: "Pineapple", value: "10" },
        ]}
        items={[
          { text: "Strawberry", value: "1" },
          { text: "Blueberry", value: "2" },
          { text: "Raspberry", value: "3" },
          { text: "Chocolate", value: "4" },
          { text: "Cream", value: "5" },
          { text: "Caramel", value: "6" },
          { text: "Banana", value: "7" },
          { text: "Mango", value: "8" },
          { text: "Orange", value: "9" },
          { text: "Pineapple", value: "10" },
        ]}
      />
    </div>
  );
};
