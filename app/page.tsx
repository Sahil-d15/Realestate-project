import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import ProjectIntro from "@/components/ProjectIntro";
import FeatureGrid from "@/components/FeatureGrid";
import ResidenceShowcase from "@/components/ResidenceShowcase";
import ArchitectureSection from "@/components/ArchitectureSection";
import Specifications from "@/components/Specifications";
import SitePlan from "@/components/SitePlan";
import LocationSection from "@/components/LocationSection";
import EnquiryCTA from "@/components/EnquiryCTA";
import Footer from "@/components/Footer";
import MobileEnquiryCTA from "@/components/MobileEnquiryCTA";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <ProjectIntro />
        <FeatureGrid />
        <ResidenceShowcase />
        <ArchitectureSection />
        <Specifications />
        <SitePlan />
        <LocationSection />
        <EnquiryCTA />
      </main>
      <Footer />
      <MobileEnquiryCTA />
    </>
  );
}
