import { Routes } from "@/constants/enums";
import React from "react";
import MainHeading from "../main-heading/MainHeading";
import { getCurrentLocal } from "@/lib/getCurrentLocal";
import getTrans from "@/lib/translation";

async function About() {
  const locale = await getCurrentLocal();
  const { home } = await getTrans(locale);
  const { about } = home;

  return (
    <section className="section-gap text-center" id={Routes.ABOUT}>
      <MainHeading
        titleChildren={
          <span className="inline-block">
            {about.aboutUs.split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-primary to-primary/10 bg-clip-text text-transparent">
              {about.aboutUs.split(" ")[1]}
            </span>
          </span>
        }
        subtitle={about.ourStory}
      />
      <div className="text-accent max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p>{about.descriptions.one}</p>
        <p>{about.descriptions.two}</p>
        <p>{about.descriptions.three}</p>
      </div>
    </section>
  );
}

export default About;
