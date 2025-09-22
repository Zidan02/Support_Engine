import Image from "next/image";
import { motion } from "framer-motion";
import AboutIntro from "./AboutIntro";
import AboutSection from "./AboutSection/AboutSection";
import AboutOutro from "./AboutSection/AboutOutro";


export default function About() {
  return (
    <>
      <AboutIntro />
      <AboutSection />
      <AboutOutro />
    </>
  );
}

