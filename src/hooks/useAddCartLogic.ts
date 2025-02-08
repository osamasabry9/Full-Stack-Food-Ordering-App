import { useState, useMemo, useCallback } from "react";
import { TCartItem, TProductWithRelations } from "@/types";
import { Size, Extra } from "@prisma/client";
import { addCartItem } from "@/store/cart/cartSlice";
import { useAppDispatch } from "@/store/hooks";

export function useCartLogic(
  item: TProductWithRelations,
  cartItems: TCartItem[]
) {
  const dispatch = useAppDispatch();

  const defaultSize =
    cartItems.find((cartItem) => cartItem.id === item.id)?.size ||
    item.sizes[0];
  const defaultExtras =
    cartItems.find((cartItem) => cartItem.id === item.id)?.extras || [];

  const [selectedSize, setSelectedSize] = useState<Size>(defaultSize);
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>(defaultExtras);

  const totalPrice = useMemo(() => {
    let price = item.basePrice;
    if (selectedSize) {
      price = selectedSize.price;
    }
    if (selectedExtras.length > 0) {
      selectedExtras.forEach((extra) => {
        price += extra.price;
      });
    }
    return price;
  }, [item.basePrice, selectedSize, selectedExtras]);

  const handleAddToCart = useCallback(() => {
    dispatch(
      addCartItem({
        id: item.id,
        name: item.name,
        basePrice: totalPrice,
        image: item.image,
        size: selectedSize,
        extras: selectedExtras,
      })
    );

  }, [dispatch, item.id, item.name, item.image, totalPrice, selectedSize, selectedExtras]);

  return {
    totalPrice,
    selectedSize,
    setSelectedSize,
    selectedExtras,
    setSelectedExtras,
    handleAddToCart,
  };
}
