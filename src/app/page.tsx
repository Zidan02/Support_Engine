import Hero from "./components/Hero";
import Features from "./components/Features/Features";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
// import Departments from "./components/Departments";
// import Pricing from "./components/Pricing";
// import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <WhyChooseUs />
      {/* <Features />
      <Departments />
      <Pricing />
      <ContactForm /> */}
    </>
  );
}