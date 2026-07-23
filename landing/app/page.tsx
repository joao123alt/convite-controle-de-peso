import Hero from "@/features/home/Hero";
import MethodSection from "@/features/home/MethodSection";
import WhyFree from "@/features/home/WhyFree";
import Footer from "@/components/layout/Footer";
import ScrollAnimations from "@/components/layout/ScrollAnimations";
import CrossPromo from "@/features/home/CrossPromo";

export default function Home() {
  return (
    <main>
      <ScrollAnimations />
      <Hero />
      <MethodSection />
      <WhyFree />
      <CrossPromo type="smoking" />
      <Footer />
    </main>
  );
}
