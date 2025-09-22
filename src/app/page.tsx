import Hero from "./components/Hero";
import Features from "./components/Features/Features";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import Departments from "./components/Departments/Departments";
import { ProductSolution } from "./components/ProductSolution";
import IndustryExprtise from "./components/IndustryExprtise";
import PricingPlans from "./components/PricingPlans/PricingPlans";
import Performance from "./components/Performance";
import Partners from "./components/Partners";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import ReadyStart from "./components/ReadyStart";
import Blog from "./components/Blog";

import ContactUs from "./components/ContactUs/ContactUs";
import ReadyNewProject from "./components/ReadyNewProject";

// import Pricing from "./components/Pricing";
// import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhyChooseUs />
      <CaseStudy />
      <Departments />
      <ProductSolution />
      <IndustryExprtise />
      <PricingPlans />
      <Performance />
      <Partners />
      <About/>
      <FAQ />
      <ReadyStart />
      <Blog />
      <ContactUs />
      <ReadyNewProject />
      
      {/* <Features />
      <Departments />
      <Pricing />
       */}
    </>
  );
}