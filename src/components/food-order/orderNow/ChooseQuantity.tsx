import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/store/hooks";
import { addCartItem, removeCartItem, removeItemFromCart } from "@/store/cart/cartSlice";
import { TProductWithRelations } from "@/types";
import { Extra, Size } from "@prisma/client";
import React, { memo } from "react";

const ChooseQuantity = ({
  quantity,
  item,
  selectedExtras,
  selectedSize,
}: {
  quantity: number;
  item: TProductWithRelations;
  selectedExtras: Extra[];
  selectedSize: Size;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center flex-col gap-2 mt-4 w-full">
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          onClick={() => dispatch(removeCartItem({ id: item.id }))}
        >
          -
        </Button>
        <div>
          <span className="text-black">{quantity} in cart</span>
        </div>
        <Button
          variant="outline"
          onClick={() =>
            dispatch(
              addCartItem({
                basePrice: item.basePrice,
                id: item.id,
                image: item.image,
                name: item.name,
                extras: selectedExtras,
                size: selectedSize,
              })
            )
          }
        >
          +
        </Button>
      </div>
      <Button
        size="sm"
        onClick={() => dispatch(removeItemFromCart({ id: item.id }))}
      >
        Remove
      </Button>
    </div>
  );
};

export default memo(ChooseQuantity);
