import React from "react";
import { HeartIcon } from "@heroicons/react/24/solid"; // or /outline

const ProductModal = () => {
  return (
    <div className="section bg-blue-100 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-2xl w-lg md:w-3xl">
        <div className="flex flex-col m-10 gap-5 md:flex-row">
          <img
            className="object-contain"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfx76Fr5Ffw2vXc44m_4xDNXN_QIKuu5AMiw&s"
            alt=""
          />
          <div className="">
            <div className="bg-black text-white text-xs rounded-2xl p-1.5 inline-block ">
              Free Shipping
            </div>
            <h2 className="text-2xl font-semibold my-2">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </h2>
            <div className="my-2">
              <del>$799</del>
            </div>
            <h1 className="font-bold text-4xl">$599</h1>
            <p className="text-sm text-zinc-500 my-2">
              The offer is valid until April 3 or as long as stock lasts!
            </p>
            <button className="text-center w-full bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg hover:border-t-8 hover:rounded-t-xl hover:border-b-0  hover:bg-blue-700 hover:shadow-lg my-3 ">
              <div className="px-8 py-4 bg-blue-500 rounded-lg ">
                Add to cart
              </div>
            </button>
            <div className="flex gap-3 flex-row items-center">
              <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse hover:animate-pulse"></div>
              <p>50+ pcs. in stock.</p>
            </div>
            <div className="flex gap-3 my-3">
              <div className="flex w-full border border-zinc-400 justify-center items-center rounded-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="mx-5 my-2 flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>

                  <button className="">Add to cart</button>
                </div>
              </div>
              <div className="flex w-full border border-zinc-400 justify-center items-center rounded-md  hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="mx-5 my-2 flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 -1 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <button className="">Add to wishlist</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
