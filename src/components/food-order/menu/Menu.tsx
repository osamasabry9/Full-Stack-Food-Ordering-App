import { TMenuItem } from "@/types";
import React from "react";
import MenuItem from "./MenuItem";

const MenuItems: TMenuItem[] = [
  {
    id: 1,
    title: "Pizza",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 100,
    image: "/assets/images/pizza.svg",


  },
  {
    id: 2,
    title: "Pizza",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 100,
    image: "/assets/images/pizza.svg",

  },
  {
    id: 3,
    title: "Pizza",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 100,
    image: "/assets/images/pizza.svg",
  },
];

const Menu = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {MenuItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-center transform transition-transform duration-300 hover:scale-105 pb-8"
        >
          <MenuItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default Menu;
