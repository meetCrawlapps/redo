"use client";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";
import Button from "./button";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const Hero = () => {
  const clients = [
    { href: "/1.png" },
    { href: "/2.png" },
    { href: "/3.png" },
    { href: "/4.png" },
    { href: "/5.png" },
    { href: "/6.png" },
    { href: "/7.png" },
    { href: "/8.png" },
    { href: "/9.png" },
    { href: "/10.png" },
  ];
  return (
    <>
      <section className="max-w-[1440px] mx-auto">
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white md:pb-10">
                  <div className="flex justify-center">
                    <Button
                      name="Start For free Today"
                      classNameprops="text-gray-400 py-4 px-6 hover:text-white transition ease-in duration-300 mx-auto"
                    />
                  </div>
                  <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-gray-200">
                    Automate Your Work With Redo
                  </span>
                </h1>
              </>
            }
          >
            <Image
              src={`/temp-banner.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </section>
      <div className="flex justify-center">
        <InfiniteMovingCards items={clients} direction="right" speed="slow" />
      </div>
    </>
  );
};

export default Hero;
