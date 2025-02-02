import AboutUsSection from "./_components/AboutUsSection/AboutUsSection";
import BenefitsSection from "./_components/BenefitsSection/BenefitsSection";
import CTA from "./_components/CTA";
import HeroSection from "./_components/HeroSection/HeroSection";
import Navbar from "./_components/navbar/Navbar";
import PlansSection from "./_components/PlansSection/PlansSection";
import TestimonialsSection from "./_components/TestimonialsSection/TestimonialsSection";

export default function Home() {
  return (
    <>
      <div className="space-y-10">
        <Navbar />
        <HeroSection />
      </div>
      <AboutUsSection />
      <BenefitsSection />
      <PlansSection />
      <TestimonialsSection />
      <CTA />
    </>
  );
}
