import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col gap-5 items-center md:flex-row md:justify-end font-semibold">
      <div className="group">
        <button>Vector</button>
        <div className=" border-b-2 border-black mx-2 mt-2 duration-500 opacity-0 group-hover:opacity-100 "></div>
      </div>
      <div className="group">
        <button>Illustrations</button>
        <div className=" border-b-2 border-black mx-2 mt-2 duration-500 opacity-0 group-hover:opacity-100 "></div>
      </div>
      <div className="group">
        <button>Images</button>
        <div className=" border-b-2 border-black mx-2 mt-2 duration-500 opacity-0 group-hover:opacity-100 "></div>
      </div>
      <div className="group">
        <button>Icons</button>
        <div className=" border-b-2 border-black mx-2 mt-2 duration-500 opacity-0 group-hover:opacity-100 "></div>
      </div>
    </div>
  );
};

export default Header;
