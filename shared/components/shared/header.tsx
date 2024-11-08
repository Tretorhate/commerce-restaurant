import { cn } from "@/shared/lib/utils";
import React from "react";
import { Button } from "../ui";
import { Container } from "./container";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./search-input";
import { ModeToggle } from "./mode-toggle";

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
            {/* <svg
              width="60"
              height="60"
              viewBox="0 0 69 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M67.2663 17.4044C65.5225 14.616 61.8336 13.7633 59.0318 15.5087L66.1885 11.0303C68.9906 9.28265 69.8395 5.60153 68.0908 2.80795C66.344 0.0094815 62.6551 -0.837977 59.851 0.907116L12.6721 30.3209C0.0525624 38.1868 -3.78683 54.7697 4.09342 67.3575C11.976 79.9452 28.5935 83.7795 41.213 75.9158C51.1539 69.7148 55.6169 58.1045 53.2145 47.2971L63.9696 40.5917C66.7736 38.8466 67.6232 35.1655 65.8692 32.3667C64.125 29.5783 60.4339 28.7234 57.6321 30.4711L65.369 25.6313C68.1662 23.8866 69.0207 20.208 67.2663 17.4044ZM32.6899 61.1086C27.9833 64.0426 21.7845 62.6106 18.8444 57.9142C15.9068 53.2198 17.3365 47.0312 22.0454 44.0975C26.7546 41.1635 32.9462 42.5929 35.8913 47.2896C38.8315 51.9863 37.404 58.1723 32.6899 61.1086Z"
                fill="#1488CC"
              />
            </svg> */}
            <svg
              width="60"
              height="60"
              viewBox="0 0 69 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M67.2663 17.4044C65.5225 14.616 61.8336 13.7633 59.0318 15.5087L66.1885 11.0303C68.9906 9.28265 69.8395 5.60153 68.0908 2.80795C66.344 0.0094815 62.6551 -0.837977 59.851 0.907116L12.6721 30.3209C0.0525624 38.1868 -3.78683 54.7697 4.09342 67.3575C11.976 79.9452 28.5935 83.7795 41.213 75.9158C51.1539 69.7148 55.6169 58.1045 53.2145 47.2971L63.9696 40.5917C66.7736 38.8466 67.6232 35.1655 65.8692 32.3667C64.125 29.5783 60.4339 28.7234 57.6321 30.4711L65.369 25.6313C68.1662 23.8866 69.0207 20.208 67.2663 17.4044ZM32.6899 61.1086C27.9833 64.0426 21.7845 62.6106 18.8444 57.9142C15.9068 53.2198 17.3365 47.0312 22.0454 44.0975C26.7546 41.1635 32.9462 42.5929 35.8913 47.2896C38.8315 51.9863 37.404 58.1723 32.6899 61.1086Z"
                fill="#1488CC"
              />
            </svg>

            <div>
              <h1 className="text-2xl uppercase font-black">Hermes Group</h1>
              <p className="text-sm text-gray-400 leading-3">
                Going Even Faster
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

          <ModeToggle />
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
