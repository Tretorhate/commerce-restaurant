"use client";
import { cn } from "@/shared/lib/utils";
import { Api } from "@/shared/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { useClickAway, useDebounce } from "react-use";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);
  const ref = React.useRef(null);
  const currentTheme = useTheme();
  useClickAway(ref, () => setFocused(false));

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log(error);
      }
    },
    250,
    [searchQuery]
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
      >
        <Search className="absolute top-1/2 left-3 translate-y-[-50%] h-5 text-gray-400" />
        <input
          type="text"
          className="rounded-2xl w-full bg-muted pl-11 outline-none pt-[2px]"
          placeholder="Search a cargo... "
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div
          className={cn(
            "absolute w-full bg-muted rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12"
          )}
        >
          {products.length > 0 &&
            products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center w-full gap-3 px-3 py-2 hover:bg-primary/10"
                onClick={onClickItem}
              >
                <img
                  className={`  ${
                    currentTheme ? "dark:invert" : ""
                  } + rounded-sm h-8 w-8`}
                  src={product.imageUrl}
                  width={32}
                  height={32}
                  alt={product.name}
                />
                <span>{product.name}</span>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};
