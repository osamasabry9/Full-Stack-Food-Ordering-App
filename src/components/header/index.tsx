import React from "react";
import Link from "../link";
import { Routes } from "@/constants/enums";
import Navbar from "./Navbar";
import CartButton from "./CartButton";
import { getCurrentLocal } from "@/lib/getCurrentLocal";
import getTrans from "@/lib/translation";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = async () => {
  const locale = await getCurrentLocal();
  const { logo, navbar } = await getTrans(locale);

  return (
    <header className="py-6 md:py-8">
      <div className="container flex items-center justify-between gap-6 lg:gap-10">
        <Link
          href={`/${locale}/${Routes.ROOT}`}
          className="text-primary font-semibold text-2xl"
        >
          🍕 {logo}
        </Link>
        <Navbar translations={navbar} />
        <LanguageSwitcher />
        <CartButton />
      </div>
    </header>
  );
};

export default Header;
