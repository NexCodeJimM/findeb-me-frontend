import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import BackToTop from "../BackToTop/BackToTop";

export default function NavigationComponent({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <BackToTop />
      <Footer />
    </>
  );
}
