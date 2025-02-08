import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import React from "react";

import { TProductWithRelations } from "@/types";
import OrderNowButton from "../orderNow/OrderNowButton";
const MenuItem = ({ product }: { product: TProductWithRelations }) => {
  const {name, description, basePrice, image } = product;

  return (
    <article className="relative flex h-[400px] w-[80%] max-w-xs flex-col items-center rounded-2xl bg-gradient-to-b from-white from-40% to-primary/10 shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl  md:max-w-sm">
      {/* Image Section with Gradient Border */}
      <div className="relative  aspect-square w-[70%] min-w-[140px]">
        <div className="absolute inset-0 rounded-full bg-[linear-gradient(to_bottom,#F54748_0%,#FDC55E_50%,transparent_50%)] p-[3px] sm:p-1.5">
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white md:border-[3px]">
            <Image
              src={image}
              alt={`${name} dish`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              priority
            />
          </div>
        </div>

        {/* Price Badge with Fluid Typography */}
        <div
          className="absolute right-[5%] bottom-[10%] z-10 flex aspect-square w-[30%] min-w-[60px] items-center justify-center rounded-full border-2 border-white bg-[#FDC55E] text-[clamp(0.60rem,2vw,0.90rem)] font-bold text-white
        shadow-md sm:right-[7%] sm:bottom-[10%] md:text-[clamp(0.65rem,1.5vw,0.95rem)]"
        >
          <span>{formatCurrency(basePrice)}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col text-center px-4 py-2 sm:px-6 sm:py-4">
        <h2 className="text-lg font-bold text-primary sm:text-xl md:text-2xl">
          {name}
        </h2>
        <p className="line-clamp-3 mt-1 text-xs text-gray-600 sm:mt-2 sm:text-sm md:text-base">
          {description}
        </p>
      </div>

      {/* Floating Action Button */}
      <OrderNowButton item={product} />
    </article>
  );
};

export default MenuItem;
