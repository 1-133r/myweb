import React from "react";
import Categories from "./components/Categories";
import CompanyLogo from "./components/companyLogo";

import Hero from "./components/Hero";
import HotProduct from "./components/hotProducts";
import Navbar from "./components/Navbar";
import OurProduct from "./components/ourProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <CompanyLogo />
      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}
