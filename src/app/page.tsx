import AboutSection from "@/components/About/AboutSection";
import Operation from "@/components/Operation/Operation";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import AnimatedSection from "@/components/Common/AnimatedSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GIR",
  // description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />

      <AnimatedSection>
        <Features />
      </AnimatedSection>

      <AnimatedSection>
        <Operation />
      </AnimatedSection>

      <AnimatedSection>
        <Solutions />
      </AnimatedSection>

      {/* <AnimatedSection>
        <Testimonials />
      </AnimatedSection> */}

      <AnimatedSection>
        <Blog />
      </AnimatedSection>

      {/* <AnimatedSection> 
        <Contact />
      </AnimatedSection> */}
      {/* <Features /> */}
    </>
  );
}
