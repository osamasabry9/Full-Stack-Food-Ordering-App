import FoodCard from "@/components/food-cart/FoodCard";
import MainHeading from "@/components/main-heading/MainHeading";
import { TMenuItem } from "@/types";

const MenuItems: TMenuItem[] = [
  {
    id: 1,
    title: "Pizza",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 100,
    image: "/assets/images/pizza.svg",
    category: "Food",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Pizza",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 100,
    image: "/assets/images/pizza.svg",
    category: "Food",
    rating: 4.5,
  },
  {
    id: 3,
    title: "Pizza",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 100,
    image: "/assets/images/pizza.svg",
    category: "Food",
    rating: 4.5,
  },
];

const BestSellersSection = () => {
  return (
    <section className="section-gap container mx-auto px-4 sm:px-6 lg:px-8">
      <MainHeading
        titleChildren={
          <span className="inline-block">
            Today{" "}
            <span className="bg-gradient-to-r from-primary to-primary/10 bg-clip-text text-transparent">
              Best
            </span>{" "}
            Sellers
          </span>
        }
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        className="mb-10 md:mb-14 lg:mb-16"
        subtitleClassName="text-gray-600 dark:text-gray-300"
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {MenuItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-center transform transition-transform duration-300 hover:scale-105 pb-8"
          >
            <FoodCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSellersSection;
