import React from "react";

import Banner from "@/containers/banner";
import About from "@/containers/about";
import Testimonial from "@/containers/testimonial";
import CallToAction from "@/containers/callToAction";

const Home = () => {
  return <main>
  <Banner/>
  <About/>
  <Testimonial/>
  <CallToAction/>
</main>;
};

export default Home;