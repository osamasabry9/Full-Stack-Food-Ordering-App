import Hero from "./_components/Hero";
import BestSellersSection from "./_components/BestSellers";
import About from "@/components/about/About";

export default async function Home() {
  return (
    <main className="container">
      <Hero />
      <BestSellersSection />
      <About />
    </main>
  );
}
