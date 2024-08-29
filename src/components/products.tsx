import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

const OurProducts = () => {
  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail: "/p1.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/p2.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail: "/p3.png",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail: "/p4.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail: "/p5.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail: "/p6.png",
    },
    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail: "/promemberscall.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail: "/temp-banner.png",
    },
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail: "/p1.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/p2.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail: "/p3.png",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail: "/p4.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail: "/p5.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail: "/p6.png",
    },
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail: "/p1.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail: "/p2.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail: "/p3.png",
    },
  ];
  return (
    <>
      <HeroParallax products={products} />
    </>
  );
};

export default OurProducts;
