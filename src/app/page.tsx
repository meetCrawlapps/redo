import Hero from "@/components/Hero";
import { Navbar } from "@/components/navbar";
import Plans from "@/components/plans";
import OurProducts from "@/components/products";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <>
      <BackgroundBeamsWithCollision className="fixed h-screen z-auto"></BackgroundBeamsWithCollision>
      <Navbar />
      <Hero />
      <OurProducts />
      <Plans />
    </>
  );
}
