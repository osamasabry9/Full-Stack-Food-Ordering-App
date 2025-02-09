"use client";
import { useState } from "react";
import Link from "../link";
import { Button, buttonVariants } from "../ui/button";
import { Routes } from "@/constants/enums";
import { Menu, XIcon } from "lucide-react";
import { useParams, usePathname } from "next/navigation";

const Navbar = ({
  translations,
}: {
  translations: { [key: string]: string };
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const links = [
    {
      id: 1,
      title: translations["menu"],
      href: Routes.MENU,
    },
    {
      id: 2,
      title: translations["about"],
      href: Routes.ABOUT,
    },
    {
      id: 3,
      title: translations["contact"],
      href: Routes.CONTACT,
    },
  ];

  const { locale } = useParams();
  const pathName = usePathname();

  return (
    <nav className="flex flex-1 justify-end">
      <Button
        onClick={() => setIsOpenMenu(!isOpenMenu)}
        variant="secondary"
        size="sm"
        className="lg:hidden"
        aria-label="Toggle Menu"
      >
        <Menu className="!w-6 !h-6" />
      </Button>

      <ul
        className={`fixed lg:static ${
          isOpenMenu ? "left-0  z-50" : "-left-full"
        } top-0 px-8 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-8`}
      >
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-10 right-10 lg:hidden"
          onClick={() => setIsOpenMenu(false)}
          aria-label="Close Menu"
        >
          <XIcon className="!w-6 !h-6" />
        </Button>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={`/${locale}/${link.href}`}
              className={`hover:text-primary duration-200 transition-colors font-semibold ${
                pathName === `/${locale}/${link.href}` && "text-primary"
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={`/${locale}/${Routes.AUTH}`}
            className={` ${buttonVariants({
              size: "lg",
            })} lg:!px-8 !rounded-full font-semibold`}
          >
            {translations["login"]}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
