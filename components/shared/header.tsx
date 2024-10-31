import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Button } from "../ui";
import { Container } from "./container";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <Link href={"/"}>
          <div className="flex items-center gap-4">
            <Image
              src={"/donut_logo2.png"}
              width={60}
              height={60}
              alt={"logo"}
            />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Donut</h1>
              <p className="text-sm text-gray-400 leading-3">
                Tastes Even Better
              </p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-3">
            <User size={16} />
            Login
          </Button>

          <div>
            <Button className="group relative">
              <b>10$</b>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0 ">
                <ShoppingCart size={16} className="relative" strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="w-5 absolute right-5 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0 transition duration-300"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
