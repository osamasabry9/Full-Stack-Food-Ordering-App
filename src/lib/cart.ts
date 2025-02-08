import { TCartItem } from "@/types";

export const getCartQuantity = (cartItems: TCartItem[]) => {
  return cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
};

export const getItemQuantity = (cartItems: TCartItem[], id: string) => {
  return cartItems.find((item) => item.id === id)?.quantity || 0;
};

export const deliveryFee = 5;

export const getTotalPrice = (cartItems: TCartItem[]) => {
  return cartItems.reduce(
    (total, item) => total + (item.quantity || 0) * item.basePrice,
    0
  );
};

export const getTotalAmount = (cartItems: TCartItem[]) => {
  return getTotalPrice(cartItems) + deliveryFee ;
};


