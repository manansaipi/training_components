//rafce

import React from "react";

const PricingCard = ({ datas }) => {
  return (
    <div
      className={`p-2 rounded-xl ${
        datas.highlight ? "bg-purple-500" : "bg-zinc-500"
      }`}
    >
      <div className=" bg-zinc-700  rounded-2xl">
        <div className="flex flex-col justify-center items-center mx-5">
          <div className="text-sm mx-3 mt-3">BASIC</div>
          <h2 className="mt-5 font-serif text-5xl">{datas.storage}</h2>
          <div className="text-sm ">$1.99/month</div>
          <button
            className={`border border-purple-600 w-full rounded-sm px-10 py-3 my-6 ${
              datas.highlight
                ? "bg-purple-600 hover:bg-zinc-700 active:bg-purple-700"
                : "hover:bg-purple-600 active:bg-zinc-700"
            }  outline-none`}
          >
            Purchase
          </button>
        </div>
        <div className="border-t border-zinc-500 w-full"></div>
        <div className="flex flex-col justify-center items-center p-5 text-sm ">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>

            <div> 100 GB Storage</div>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>

            <div> Option to add members</div>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>

            <div> Extra member benefits</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
