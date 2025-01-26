"use client";

import Image from "next/image";

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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

import { TMenuItem } from "@/types";
import { formatCurrency } from "@/lib/formatters";

type TSize = {
  id: number;
  name: string;
  price: number;
};

type TExtra = {
  id: number;
  name: string;
  price: number;
};

const ExtrasDummy: TExtra[] = [
  { id: 1, name: "Extra cheese", price: 2 },
  { id: 2, name: "Extra tomato", price: 1 },
];

const SizesDummy: TSize[] = [
  { id: 1, name: "Small", price: 8 },
  { id: 2, name: "Medium", price: 10 },
  { id: 3, name: "Large", price: 12 },
  { id: 4, name: "Extra Large", price: 14 },
];

function OrderNowButton({ item }: { item: TMenuItem }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="absolute -bottom-3 left-1/2 w-[65%] -translate-x-1/2 px-4 rounded-full  py-2 text-[clamp(0.875rem,1.5vw,1.125rem)] font-medium text-white shadow-md transition-all hover:bg-primary/80 hover:scale-105 hover:shadow-lg sm:font-bold"
        >
          <span>Order Now</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        {/* Image and Text */}
        <DialogHeader className="flex items-center">
          <Image src={item.image} alt={item.title} width={200} height={200} />
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription className="text-center">
            {item.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <Label htmlFor="pick-size">Pick your size</Label>
            <PickSize
              sizes={SizesDummy}
              item={item}
              selectedSize={SizesDummy[0]}
            />
          </div>
          <div className="space-y-4 text-center">
            <Label htmlFor="add-extras">Any extras?</Label>
            <Extras extras={ExtrasDummy} />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" className="w-full h-10 ">
            Order Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default OrderNowButton;

function PickSize({
  sizes,
  item,
  selectedSize,
}: {
  sizes: TSize[];
  selectedSize: TSize;
  item: TMenuItem;
}) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <RadioGroupItem
            value={selectedSize.name}
            checked={selectedSize.id === size.id}
            id={size.id.toString()}
          />
          <Label htmlFor={size.id.toString()}>
            {size.name} {formatCurrency(size.price + item.price)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

function Extras({ extras }: { extras: TExtra[] }) {
  const handleExtra = (extra: TExtra) => {};
  return extras.map((extra) => (
    <div
      key={extra.id}
      className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
    >
      <Checkbox id={extra.id.toString()} onClick={() => handleExtra(extra)} />
      <Label
        htmlFor={extra.id.toString()}
        className="text-sm text-accent font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {extra.name} {formatCurrency(extra.price)}
      </Label>
    </div>
  ));
}
