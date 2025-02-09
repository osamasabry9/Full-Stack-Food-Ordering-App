"use client";

import Link from "../link";
import { Routes } from "@/constants/enums";
import { ShoppingCartIcon } from "lucide-react";
import { getCartQuantity } from "@/lib/cart";
import { useAppSelector } from "@/store/hooks";
import { selectCartItems } from "@/store/cart/cartSlice";
import { useEffect, useMemo } from "react";
import { debounce } from "@/lib/debounce";
import { useParams } from "next/navigation";

const CartButton = () => {
  const cartItems = useAppSelector(selectCartItems);
  const totalQuantity = getCartQuantity(cartItems);
  const persistCart = useMemo(
    () =>
      debounce((items: typeof cartItems) => {
        localStorage.setItem("cartItems", JSON.stringify(items));
      }, 500),
    []
  );
  const { locale } = useParams();

  useEffect(() => {
    persistCart(cartItems);
  }, [cartItems, persistCart]);

  return (
    <Link
      href={`/${locale}/${Routes.CART}`}
      className="relative block group"
      aria-label={`Cart (${totalQuantity} items)`}
    >
      {totalQuantity > 0 && (
        <span
          className="absolute -top-4 start-4 w-5 h-5 text-sm bg-primary rounded-full text-white text-center"
          aria-live="polite"
          aria-atomic="true"
        >
          {totalQuantity}
        </span>
      )}
      <ShoppingCartIcon
        aria-hidden="true"
        className="text-accent group-hover:text-primary transition-colors duration-200 w-6 h-6"
      />
    </Link>
  );
};

export default CartButton;
