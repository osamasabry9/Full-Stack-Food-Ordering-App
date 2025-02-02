import React from "react";
import MenuItem from "./MenuItem";
import { TProductWithRelations } from "@/types";

type TProps = {
  items: TProductWithRelations[];
};

 function Menu({ items }: TProps) {

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
  ) : <p className="text-center text-muted-foreground" >No products available.</p>;
};

export default Menu;
