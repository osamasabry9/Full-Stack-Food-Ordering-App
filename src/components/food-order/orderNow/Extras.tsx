import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/formatters";
import { Extra } from "@prisma/client";
import React, { memo, useCallback } from "react";

const Extras = ({
  extras,
  selectedExtras,
  setSelectedExtras,
}: {
  extras: Extra[];
  selectedExtras: Extra[];
  setSelectedExtras: React.Dispatch<React.SetStateAction<Extra[]>>;
}) => {
  const handleExtra = useCallback(
    (extra: Extra) => {
      if (selectedExtras.some((e) => e.id === extra.id)) {
        setSelectedExtras(selectedExtras.filter((e) => e.id !== extra.id));
      } else {
        setSelectedExtras([...selectedExtras, extra]);
      }
    },
    [selectedExtras, setSelectedExtras]
  );

  return extras.map((extra) => (
    <div
      key={extra.id}
      className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
    >
      <Checkbox
        id={extra.id.toString()}
        onClick={() => handleExtra(extra)}
        checked={selectedExtras.some((e) => e.id === extra.id)}
      />
      <Label
        htmlFor={extra.id.toString()}
        className="text-sm text-accent font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {extra.name} {formatCurrency(extra.price)}
      </Label>
    </div>
  ));
};

export default memo(Extras);
