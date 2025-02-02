import MainHeading from "@/components/main-heading/MainHeading";
import { Menu } from "@/components/food-order";
import { getBestSellers } from "@/server";

async function BestSellersSection() {

  const bastSellers = await getBestSellers(3);

  return (
    <section className="section-gap container mx-auto px-4 sm:px-6 lg:px-8">
      <MainHeading
        titleChildren={
          <span className="inline-block">
            Our{" "}
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
      <Menu items={bastSellers} />
    </section>
  );
};

export default BestSellersSection;
