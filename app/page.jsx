"use client";

import CallToAction from "@/components/Home/CallToAction/CallToAction";
import FeaturedProject from "@/components/Home/FeaturedProject/FeaturedProject";
import Features from "@/components/Home/Features/Features";
import HeroBanner from "@/components/Home/HeroBanner/HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Features />
      {/* <FeaturedProject /> */}
      <CallToAction />
    </>
  );
}
