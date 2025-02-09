import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Languages, Routes } from "@/constants/enums";
import { getCurrentLocal } from "@/lib/getCurrentLocal";
import getTrans from "@/lib/translation";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

async function Hero() {
  // Fetch data in parallel where possible
  const [local, translations] = await Promise.all([
    getCurrentLocal(),
    getTrans(await getCurrentLocal()),
  ]);

  const { hero } = translations.home;
  const arrowRotation = local === Languages.ARABIC ? "rotate-180" : "";

  return (
    <section className="section-gap grid grid-cols-1 md:grid-cols-2">
      {/* Text Content */}
      <div className="md:py-16">
        <h1 className="text-4xl font-semibold">
          {hero.title.split(" ")[0]} {hero.title.split(" ")[1]}{" "}
          <span className="text-primary">{hero.title.split(" ")[2]}</span>
        </h1>
        <p className="text-accent my-8">{hero.description}</p>

        <div className="flex items-center gap-4 my-8">
          <Link
            href={`/${Routes.MENU}`}
            className={buttonVariants({
              size: "lg",
              className: "space-x-2 !px-4 !rounded-full uppercase",
            })}
          >
            {hero.orderNow}
            <ArrowRightCircle className={`!w-5 !h-5 ${arrowRotation}`} />
          </Link>

          <Link
            href={`/${Routes.ABOUT}`}
            className="flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-semibold"
          >
            {hero.learnMore}
            <ArrowRightCircle className={`!w-5 !h-5 ${arrowRotation}`} />
          </Link>
        </div>

        <Image
          src="/assets/icons/slider.svg"
          alt=""
          width={22}
          height={61}
          className="object-contain md:pt-20"
          loading="lazy"
          aria-hidden="true"
          sizes="22px"
        />
      </div>

      {/* Hero Image */}
      <div className="relative hidden md:block end-[-50px] h-[600px]">
        <Image
          src="/assets/images/hero_image.svg"
          alt={"Main promotional image"}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}

export default Hero;
