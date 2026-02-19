import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Footer />
    </main>
  );
}
