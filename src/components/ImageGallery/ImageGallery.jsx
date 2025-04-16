import React from "react";
import Header from "./Header";
import ImageCard from "./ImageCard";

const ImageGallery = () => {
  return (
    <div className="section flex items-center justify-center bg-red-200">
      <div
        className=" bg-white p-10 w-xl m-5 rounded-2xl flex flex-col md:w-full
   "
      >
        <div className="flex flex-col justify-center  ">
          <Header></Header>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex items-center justify-between border-b-2 border-zinc-300 m-2">
              <input
                type="text"
                className="w-full mx-5 outline-none"
                placeholder="Search"
              />
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <button className="bg-black text-white rounded-lg p-3 md:w-40">
              Upload
            </button>
          </div>
          <div className="grid grid-cols-3">
            <ImageCard></ImageCard>
            <ImageCard></ImageCard>
            <ImageCard></ImageCard>
            <ImageCard></ImageCard>
            <ImageCard></ImageCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
