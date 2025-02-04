import React from "react";
import Link from "../link";
import { Routes } from "@/constants/enums";
import Navbar from "./Navbar";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <header className="py-6 md:py-8">
      <div className="container flex items-center justify-between gap-6 lg:gap-10">
        <Link
          href={Routes.ROOT}
          className="text-primary font-semibold text-2xl"
        >
          🍕 Pizza
        </Link>
        <Navbar />
        <CartButton />
      </div>
    </header>
  );
};

export default Header;
