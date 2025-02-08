import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatters";
import { TCartItem } from "@/types";
import { Extra } from "@prisma/client";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { memo, useMemo } from "react";

interface CartItemProps {
  item: TCartItem;
  onRemove: (id: string) => void;
}

const CartItem = ({ item, onRemove }: CartItemProps) => {
  // Memoize formatted extras to avoid recalculating on every render
  const formattedExtras = useMemo(() => {
    if (!item.extras || item.extras.length === 0) return null;

    return (
      <ul>
        {item.extras.map((extra: Extra) => (
          <li key={extra.id}>
            <span className="text-sm text-accent">
              {extra.name} {formatCurrency(extra.price)}
            </span>
          </li>
        ))}
      </ul>
    );
  }, [item.extras]);

  return (
    <li>
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-24 h-24">
            <Image
              src={item.image}
              className="object-contain"
              alt={item.name}
              fill
            />
          </div>
          <div>
            <h4 className="font-semibold md:text-lg">{item.name}</h4>
            <div className="relative">
              {item.size && (
                <span className="text-sm text-accent">
                  Size: {item.size.name}
                </span>
              )}
              {formattedExtras && (
                <div className="flex gap-1">
                  <span>Extras:</span>
                  {formattedExtras}
                </div>
              )}
              <span className="absolute right-0 top-0 text-sm text-black">
                x{item.quantity}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center gap-4 justify-end">
          <strong className="text-black">
            {formatCurrency(item.basePrice)}
          </strong>
          <Button
            onClick={() => onRemove(item.id)}
            variant="secondary"
            className="border"
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default memo(CartItem);
