import React from "react";
import MenuItem from "./MenuItem";
import { TProductWithRelations } from "@/types";
import { getCurrentLocal } from "@/lib/getCurrentLocal";
import getTrans from "@/lib/translation";

type TProps = {
  items: TProductWithRelations[];
};

const Menu = async ({ items }: TProps) => {
  const locale = await getCurrentLocal();
  const { noProductsFound } = await getTrans(locale);

  return items.length > 0 ? (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-center transform transition-transform duration-300 hover:scale-105 pb-8"
        >
          <MenuItem product={item} />
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-muted-foreground">{noProductsFound}</p>
  );
};

export default Menu;
