"use client";

import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowLeft, ArrowRight, PackageOpen } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "@/shared/lib";
import { CargoSize, CargoType } from "@/shared/constants/cargo";
import { useCart } from "@/shared/hooks";
import { Title } from "./title";
import { cn } from "@/shared/lib/utils";

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-secondary">
        <div
          className={cn(
            "flex flex-col h-full",
            !totalAmount && "justify-center"
          )}
        >
          {totalAmount > 0 && (
            <SheetHeader>
              <SheetTitle>
                In Cart:{" "}
                <span className="font-bold">{items.length} product</span>
              </SheetTitle>
            </SheetHeader>
          )}

          {!totalAmount && (
            <div className="flex flex-col items-center justify-center w-72 mx-auto">
              <PackageOpen size={120} />
              <Title
                size="sm"
                text="Cart is empty"
                className="text-center font-bold my-2"
              />
              <p className="text-center opacity-50 mb-5">
                Add at least one product to proceed
              </p>

              <SheetClose>
                <Button className="w-56 h-12 text-base" size="lg">
                  <ArrowLeft className="w-5 mr-2" />
                  Return back
                </Button>
              </SheetClose>
            </div>
          )}

          {totalAmount > 0 && (
            <>
              <div className="-mx-6 mt-5 overflow-auto scrollbar flex-1">
                {items.map((item) => (
                  <div key={item.id} className="mb-2">
                    <CartDrawerItem
                      id={item.id}
                      imageUrl={item.imageUrl}
                      details={
                        item.cargoSize && item.cargoType
                          ? getCartItemDetails(
                              item.ingredients,
                              item.cargoType as CargoType,
                              item.cargoSize as CargoSize
                            )
                          : ""
                      }
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      onClickCountButton={(type) =>
                        onClickCountButton(item.id, item.quantity, type)
                      }
                      onClickRemove={() => removeCartItem(item.id)}
                      disabled={item.disabled}
                    />
                  </div>
                ))}
              </div>

              <SheetFooter className="-mx-6 bg-background p-8">
                <div className="w-full">
                  <div className="flex mb-4">
                    <span className="flex flex-1 text-lg text-primary">
                      In total
                      <div className="flex-1 border-b-2 border-dashed border-b-secondary relative -top-1 mx-2" />
                    </span>

                    <span className="font-bold text-lg">{totalAmount}$</span>
                  </div>

                  <Link href="/cart">
                    <Button
                      // onClick={() => setRedirecting(true)}
                      // loading={redirecting}
                      type="submit"
                      className="w-full h-12 text-base"
                    >
                      Request to Order
                      <ArrowRight className="w-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
