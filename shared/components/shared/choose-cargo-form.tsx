"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { ProductImage } from "./product-image";
import { Title } from "./title";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import { CargoSize, CargoType, cargoTypes } from "@/shared/constants/cargo";
import { Ingredient, ProductItem } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { getCargoDetails } from "@/shared/lib";
import { useCargoOptions } from "@/shared/hooks";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  loading?: boolean;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  className?: string;
}

export const ChooseCargoForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  loading,
  onSubmit,
  className,
}) => {
  const {
    size,
    type,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  } = useCargoOptions(items);

  const { totalPrice, textDetails } = getCargoDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <ProductImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-secondary p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as CargoSize)}
          />

          <GroupVariants
            items={cargoTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as CargoType)}
          />
        </div>

        <div className="bg-background p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Add to cart - {totalPrice} $
        </Button>
      </div>
    </div>
  );
};

// "use client";

// import { cn } from "@/shared/lib/utils";
// import React from "react";
// import { ProductImage } from "./product-image";
// import { Title } from "./title";
// import { Button } from "../ui";
// import { GroupVariants } from "./group-variants";
// import { CargoSize, CargoType, cargoTypes } from "@/shared/constants/cargo";
// import { Ingredient, ProductItem } from "@prisma/client";
// import { IngredientItem } from "./ingredient-item";
// import { getCargoDetails } from "@/shared/lib";
// import { useCargoOptions } from "@/shared/hooks";

// interface Props {
//   imageUrl: string;
//   name: string;
//   ingredients: Ingredient[];
//   items: ProductItem[];
//   onSubmit: (itemId: number, ingredients: number[]) => void;
//   loading: boolean;
//   className?: string;
// }

// export const ChooseCargoForm: React.FC<Props> = ({
//   name,
//   items,
//   imageUrl,
//   ingredients,
//   onSubmit,
//   loading,
//   className,
// }) => {
//   const {
//     size,
//     type,
//     selectedIngredients,
//     availableSizes,
//     currentItemId,
//     setSize,
//     setType,
//     addIngredient,
//   } = useCargoOptions(items);

//   const { totalPrice, textDetails } = getCargoDetails(
//     type,
//     size,
//     items,
//     ingredients,
//     selectedIngredients
//   );

//   const handleClickAdd = () => {
//     if (currentItemId) {
//       onSubmit(currentItemId, Array.from(selectedIngredients));
//     }
//   };
//   return (
//     <div className={cn(className, "flex flex-1")}>
//       <ProductImage imageUrl={imageUrl} size={size} />

//       <div className="bg-secondary w-[490px] p-7">
//         <Title text={name} size="md" className="font-extrabold mb-1" />

//         <p className="text-gray-400">{textDetails}</p>

//         <div className="flex flex-col gap-4 mt-5">
//           <GroupVariants
//             items={availableSizes}
//             value={String(size)}
//             onClick={(value) => setSize(Number(value) as CargoSize)}
//           />

//           <GroupVariants
//             items={cargoTypes}
//             value={String(type)}
//             onClick={(value) => setType(Number(value) as CargoType)}
//           />
//         </div>
//         <div className="bg-muted p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
//           <div className="grid grid-cols-3 gap-3">
//             {ingredients.map((ingredient) => (
//               <IngredientItem
//                 key={ingredient.id}
//                 imageUrl={ingredient.imageUrl}
//                 name={ingredient.name}
//                 price={ingredient.price}
//                 onClick={() => addIngredient(ingredient.id)}
//                 active={selectedIngredients.has(ingredient.id)}
//               />
//             ))}
//           </div>
//         </div>

//         <Button
//           loading={loading}
//           onClick={handleClickAdd}
//           className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
//         >
//           Add to Cart - {totalPrice}$
//         </Button>
//       </div>
//     </div>
//   );
// };
