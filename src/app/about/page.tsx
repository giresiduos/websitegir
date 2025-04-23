import AboutSection from "@/components/About/AboutSection";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós - GIR",
  // description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="Sobre Nós" />

      <AboutSection />
    </>
  );
};

export default AboutPage;
