import Hero from "./components/Hero";
import Features from "./components/Features/Features";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import Departments from "./components/Departments/Departments";
import { ProductSolution } from "./components/ProductSolution";
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
      {/* <Features />
      <Departments />
      <Pricing />
      <ContactForm /> */}
    </>
  );
}