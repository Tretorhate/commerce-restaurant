import React from "react";
import { Container } from "./container";
import { Categories } from "./categories";
// import { SortPopup } from "./sort-popup";
import { cn } from "@/shared/lib/utils";
import { Category } from "@prisma/client";

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-background py-5 shadow-lg shadow-black/5 z-10 scale-90 lg:scale-100",
        className
      )}
    >
      <Container className="flex items-center justify-between ">
        <Categories items={categories} />
        {/* <SortPopup /> */}
      </Container>
    </div>
  );
};
