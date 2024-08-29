import React from "react";
import Button from "./button";
import { PlancardType } from "@/types/plans";

const PriceCard = ({ planName, price, desc, feachers }: PlancardType) => {
  return (
    <div className="flex flex-col gap-5" id="pricecard">
      <span className="text-2xl font-semibold block">{planName}</span>
      <span className="font-extrabold text-6xl">{price}</span>
      <p className="text-lg text-bold text-neutral-500">{desc}</p>
      <ul className="flex flex-col text-neutral-500 gap-2 list-disc pl-[22px]">
        {feachers.map((feature: string, index: number) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="flex justify-between">
        <button className="inline-block">Try now &#x2192;</button>
        {/* <button className="inline-block dark:bg-white dark:text-black py-4 px-5 rounded-3xl">
          Get Started Now
        </button> */}
        <Button name="Get Started Now" classNameprops="dark:text-white" />
      </div>
    </div>
  );
};

export default PriceCard;
