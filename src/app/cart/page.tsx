"use client";

import CartItems from "./_components/CartItems";
import CheckoutForm from "./_components/CheckoutForm";

import { useAppSelector } from "@/store/hooks";
import { selectCartItems } from "@/store/cart/cartSlice";

const CartPage = () => {
  const cart = useAppSelector(selectCartItems);

  return (
    <main>
      <section className="section-gap container">
        <h1 className="text-primary text-center text-bold text-4xl italic mb-10">
          Cart
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <CartItems cartItems={cart} />
          <CheckoutForm cartItems={cart} />
        </div>
      </section>
    </main>
  );
};

export default CartPage;
