import MainHeading from "@/components/main-heading/MainHeading";
import { Menu } from "@/components/food-order";
import { getBestSellers } from "@/server";
import { getCurrentLocal } from "@/lib/getCurrentLocal";
import getTrans from "@/lib/translation";

async function BestSellersSection() {
  const bastSellersItems = await getBestSellers(3);

  const locale = await getCurrentLocal();
  const { home } = await getTrans(locale);
  const { bestSeller } = home;

  return (
    <section className="section-gap container mx-auto px-4 sm:px-6 lg:px-8">
      <MainHeading
        titleChildren={
          <span className="inline-block">
            {bestSeller.OurBestSellers.split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-primary to-primary/30 bg-clip-text text-transparent">
              {bestSeller.OurBestSellers.split(" ")[1]}
            </span>{" "}
            {bestSeller.OurBestSellers.split(" ")[2]}
          </span>
        }
        subtitle={bestSeller.checkOut}
        className="mb-10 md:mb-14 lg:mb-16"
        subtitleClassName="text-gray-600 dark:text-gray-300"
      />
      <Menu items={bastSellersItems} />
    </section>
  );
}

export default BestSellersSection;
