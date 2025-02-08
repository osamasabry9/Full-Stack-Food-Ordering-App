"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { TProductWithRelations } from "@/types";
import { useAppSelector } from "@/store/hooks";
import { selectCartItems } from "@/store/cart/cartSlice";
import { getItemQuantity } from "@/lib/cart";
import { useCartLogic } from "@/hooks/useAddCartLogic";
import PickSize from "./PickSize";
import Extras from "./Extras";
import ChooseQuantity from "./ChooseQuantity";
import React, {  useMemo } from "react";

export default function OrderNowButton({ item }: { item: TProductWithRelations }) {
  const cartItems = useAppSelector(selectCartItems);
  const quantity = getItemQuantity(cartItems, item.id);

  const {
    totalPrice,
    selectedSize,
    setSelectedSize,
    selectedExtras,
    setSelectedExtras,
    handleAddToCart,
  } = useCartLogic(item, cartItems);

  // Memoize the dialog content to prevent unnecessary re-renders
  const dialogContent = useMemo(() => {
    return (
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        {/* Image and Text */}
        <DialogHeader className="flex items-center">
          <Image src={item.image} alt={item.name} width={200} height={200} />
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription className="text-center">
            {item.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <label htmlFor="pick-size">Pick your size</label>
            <PickSize
              sizes={item.sizes}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          </div>
          <div className="space-y-4 text-center">
            <label htmlFor="add-extras">Any extras?</label>
            <Extras
              extras={item.extras}
              selectedExtras={selectedExtras}
              setSelectedExtras={setSelectedExtras}
            />
          </div>
        </div>
        <DialogFooter>
          {quantity === 0 ? (
            <Button
              type="submit"
              className="w-full h-10"
              onClick={handleAddToCart}
            >
              Order Now {totalPrice}
            </Button>
          ) : (
            <ChooseQuantity
              quantity={quantity}
              item={item}
              selectedExtras={selectedExtras}
              selectedSize={selectedSize}
            />
          )}
        </DialogFooter>
      </DialogContent>
    );
  }, [item, selectedSize, setSelectedSize, selectedExtras, setSelectedExtras, quantity, handleAddToCart, totalPrice]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="absolute -bottom-3 left-1/2 w-[65%] -translate-x-1/2 px-4 rounded-full py-2 text-[clamp(0.875rem,1.5vw,1.125rem)] font-medium text-white shadow-md transition-all hover:bg-primary/80 hover:scale-105 hover:shadow-lg sm:font-bold"
        >
          <span>Order Now</span>
        </Button>
      </DialogTrigger>
      {dialogContent}
    </Dialog>
  );
}
