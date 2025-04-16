import React from "react";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Pricing from "./components/pricing/Pricing";
import ProductModal from "./components/ProductModal/ProductModal";

const App = () => {
  return (
    <>
      <Home />
      {/* <About /> */}
      <Pricing />
      <ProductModal />
    </>
  );
};

export default App;
