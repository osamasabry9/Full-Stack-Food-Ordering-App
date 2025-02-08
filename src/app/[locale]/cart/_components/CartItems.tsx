"use client";
import React, { useMemo, useCallback } from "react";
import { useAppDispatch } from "@/store/hooks";
import CartItem from "./CartItem";
import { removeItemFromCart } from "@/store/cart/cartSlice";

import { getTotalPrice } from "@/lib/cart";
import { formatCurrency } from "@/lib/formatters";
import { TCartItem } from "@/types";

const CartItems = ({ cartItems }: { cartItems: TCartItem[] }) => {
  const dispatch = useAppDispatch();

  // Memoize subtotal and total price calculations
  const subtotal = useMemo(() => getTotalPrice(cartItems), [cartItems]);
  const deliveryFee = 5;
  const totalPrice = useMemo(() => subtotal + deliveryFee, [subtotal]);

  // Memoize the remove item handler
  const handleRemoveItem = useCallback(
    (id: string) => {
      dispatch(removeItemFromCart({ id }));
    },
    [dispatch]
  );

  return (
    <div>
      {cartItems && cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onRemove={handleRemoveItem} />
            ))}
          </ul>
          <div className="flex flex-col justify-end items-end pt-6">
            <span className="text-accent font-medium">
              Subtotal:
              <strong className="text-black">{formatCurrency(subtotal)}</strong>
            </span>
            <span className="text-accent font-medium">
              Delivery:
              <strong className="text-black">
                {formatCurrency(deliveryFee)}
              </strong>
            </span>
            <span className="text-accent font-medium">
              Total:
              <strong className="text-black">
                {formatCurrency(totalPrice)}
              </strong>
            </span>
          </div>
        </>
      ) : (
        <p>Your cart is empty. </p>
      )}
    </div>
  );
};

export default React.memo(CartItems);
