import React from "react";
import { LampComponent } from "./ui/lamp";

const Plans = () => {
  const plancard = [
    {
      planName: "Hobby",
      price: "$0",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores obcaecati quaerat corrupti distinctio architecto unde iste autem animi perferendis sed.",
      feachers: ["3 Free Automation", "100 task per month", "Two Step Actions"],
    },
    {
      planName: "Pro Plan",
      price: "$29",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores obcaecati quaerat corrupti distinctio architecto unde iste autem animi perferendis sed.",
      feachers: ["3 Free Automation", "100 task per month", "Two Step Actions"],
    },
    {
      planName: "Unlimited",
      price: "$99",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores obcaecati quaerat corrupti distinctio architecto unde iste autem animi perferendis sed.",
      feachers: ["3 Free Automation", "100 task per month", "Two Step Actions"],
    },
  ];
  return (
    <section className="pb-[100px]">
      <LampComponent plancard={plancard} />
    </section>
  );
};

export default Plans;
