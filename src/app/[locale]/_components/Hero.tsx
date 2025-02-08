import Link from "@/components/link";
import { buttonVariants } from "@/components/ui/button";
import { Routes } from "@/constants/enums";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="section-gap grid grid-cols-1 md:grid-cols-2">
      {/* Text  */}
      <div className="md:py-16 ">
        <h1 className="text-4xl font-semibold">
          We&apos;re <span className="text-primary">Serious</span> For <br />
          <span className="text-primary">Food</span> &{" "}
          <span className="text-[#FDC55E]">Delivery.</span>
        </h1>
        <p className="text-accent my-8">
          Best cooks and best delivery guys all at your service. Hot tasty food
          will reach you in 60 minutes.
        </p>
        <div className="flex items-center gap-4 my-8">
          <Link
            href={`/${Routes.MENU}`}
            className={`${buttonVariants({
              size: "lg",
            })} space-x-2 !px-4 !rounded-full uppercase`}
          >
            Order Now
            <ArrowRightCircle className={`!w-5 !h-5 `} />
          </Link>
          <Link
            href={`/${Routes.ABOUT}`}
            className="flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-semibold"
          >
            Learn More
            <ArrowRightCircle className={`!w-5 !h-5 `} />
          </Link>
        </div>
        <Image
          src="/assets/icons/slider.svg"
          alt="slider icon"
          width={22}
          height={61}
          className="object-contain md:pt-20"
          loading="lazy"
        />
      </div>
      {/* Hero image */}
      <div className="relative hidden md:block md:right-[-50px] ">
        <Image
          src="/assets/images/hero_image.svg"
          alt="hero image"
          fill
          className="object-contain"
          loading="eager"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
