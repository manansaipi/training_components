import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const datas = [
    { storage: "100GB", highlight: false },
    { storage: "200GB", highlight: true },
    { storage: "2TB", highlight: false },
  ];
  return (
    <div className="section flex flex-col bg-zinc-700 items-center justify-center text-white gap-2 md:flex-row ">
      {datas.map((datas, index) => (
        <PricingCard key={index} datas={datas} />
      ))}
    </div>
  );
};

export default Pricing;
