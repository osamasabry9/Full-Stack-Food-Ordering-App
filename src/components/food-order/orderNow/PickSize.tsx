import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Size } from "@prisma/client";
import React, { memo } from "react";
import { formatCurrency } from "@/lib/formatters";

const PickSize = ({
  sizes,
  selectedSize,
  setSelectedSize,
}: {
  sizes: Size[];
  selectedSize: Size;
  setSelectedSize: React.Dispatch<React.SetStateAction<Size>>;
}) => {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <RadioGroupItem
            value={size.name}
            checked={selectedSize.id === size.id}
            id={size.id.toString()}
            onClick={() => setSelectedSize(size)}
          />
          <Label htmlFor={size.id.toString()}>
            {size.name} {formatCurrency(size.price)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default memo(PickSize);
