import React from "react";
import HeroSection from "../components/Hero";
import Categories from "../pages/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import SelfWateringSection from "../components/SelfWateringSection";
import PopularProducts from "../components/PopularProducts";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <SelfWateringSection />
      <PopularProducts />
      <Testimonials />
    </div>
  );
}