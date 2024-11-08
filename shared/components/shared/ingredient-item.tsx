import { cn } from "@/shared/lib/utils";
import { CircleCheck } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const IngredientItem: React.FC<Props> = ({
  name,
  imageUrl,
  price,
  active,
  onClick,
  className,
}) => {
  const currentTheme = useTheme();

  return (
    <div
      className={cn(
        "flex items-center flex-col p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-background",
        { "border border-primary": active },
        className
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute top-2 right-2 text-primary" />
      )}
      <div className="p-1">
        <img
          width={110}
          height={110}
          src={imageUrl}
          className={currentTheme ? "dark:invert" : ""}
        />
      </div>
      <span className="text-xs mb-1">{name}</span>
      <span className="font-bold">{price}$</span>
    </div>
  );
};
