import { TMenuItem } from "@/types";
import Image from "next/image";
import React from "react";

interface FoodCardProps extends TMenuItem {
  userAvatars?: string[];
  buttonText?: string;
}

const FoodCard = ({
  title,
  description,
  price,
  image,
  rating,
  userAvatars = [],
  buttonText = "Order Now",
}: FoodCardProps) => {
  return (
    <article className="relative flex h-[498px] w-full max-w-xs flex-col items-center rounded-2xl bg-gradient-to-b from-white from-40% to-primary/10 shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl  md:max-w-sm">
      {/* Image Section with Gradient Border */}
      <div className="relative  aspect-square w-[80%] min-w-[140px]">
        <div className="absolute inset-0 rounded-full bg-[linear-gradient(to_bottom,#F54748_0%,#FDC55E_50%,transparent_50%)] p-[3px] sm:p-1.5">
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white md:border-[3px]">
            <Image
              src={image}
              alt={`${title} dish`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              priority
            />
          </div>
        </div>

        {/* Price Badge with Fluid Typography */}
        <div className="absolute -right-[5%] bottom-[22%] z-10 flex aspect-square w-[22%] min-w-[50px] items-center justify-center rounded-full border-2 border-white bg-[#FDC55E] text-[clamp(0.65rem,2vw,1rem)] font-bold text-white shadow-md sm:-right-[7%] sm:bottom-[20%] md:text-[clamp(0.75rem,1.5vw,1.1rem)]">
          <span>${price}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col items-center px-4 py-2 sm:px-6 sm:py-4">
        {/* Rating Section */}
        <div className="mb-2 flex flex-col items-center gap-1 sm:mb-4 sm:gap-2">
          {userAvatars.length > 0 && (
            <div className="flex -space-x-2 sm:-space-x-3">
              {userAvatars.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar}
                  alt={`User ${index + 1} avatar`}
                  width={32}
                  height={32}
                  className="aspect-square w-[28px] rounded-full border-2 border-white sm:w-[32px]"
                />
              ))}
            </div>
          )}
          <div className="flex items-center text-yellow-600">
            <span className="material-icons text-sm sm:text-base">star</span>
            <span className="ml-1 text-xs sm:text-sm">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="mb-2 flex flex-1 flex-col items-center justify-center sm:mb-4">
          <h2 className="text-center text-lg font-bold text-primary sm:text-xl md:text-2xl">
            {title}
          </h2>
          <p className="line-clamp-3 mt-1 text-xs text-gray-600 sm:mt-2 sm:text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute -bottom-4 left-1/2 w-[85%] -translate-x-1/2 px-4 sm:-bottom-5 sm:w-[75%] md:w-[65%]">
        <button
          className="w-full rounded-full bg-primary px-4 py-2 text-[clamp(0.875rem,1.5vw,1.125rem)] font-medium text-white shadow-md transition-all hover:bg-primary/80 hover:scale-105 hover:shadow-lg sm:font-bold"
          aria-label={`Order ${title}`}
        >
          {buttonText}
        </button>
      </div>
    </article>
  );
};

export default FoodCard;
