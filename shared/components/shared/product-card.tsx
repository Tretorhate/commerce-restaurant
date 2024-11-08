import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { useTheme } from "next-themes";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  const currentTheme = useTheme();
  return (
    <div className={cn("", className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img
            src={imageUrl}
            alt="Logo"
            className={
              currentTheme ? "dark:invert" : "" + `w-[215px] h-[215px]`
            }
          />
        </div>

        <Title text={name} size="sm" className="font-bold mb-1 mt-3" />
        <p className="text-sm text-gray-400">
          Faster, Stronger, Smarter, Better, Even Better
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            from <b>{price}$</b>
          </span>
          <Button variant="outline" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
