"use client";

import CallToAction from "@/components/Home/CallToAction/CallToAction";
import Features from "@/components/Home/Features/Features";
import GlobalFootprint from "@/components/Home/GlobalFootprint/GlobalFootprint";
import HeroBanner from "@/components/Home/HeroBanner/HeroBanner";
import UnleashingPossibilities from "@/components/Home/UnleashingPossibilities/UnleashingPossibilities";
import WhyUs from "@/components/Home/WhyUs/WhyUs";
import NavigationComponent from "@/components/common/modules/NavigationComponent/NavigationComponent";

export default function Home() {
  return (
    <>
      <NavigationComponent>
        <HeroBanner />
        <Features />
        <UnleashingPossibilities />
        <WhyUs />
        <GlobalFootprint />
        <CallToAction />
      </NavigationComponent>
    </>
  );
}
