import HeroSection from "@/components/HeroSection";
import IntentSection from "@/components/IntentSection";
import PhotoSection from "@/components/PhotoSection";
import ExpressionSection from "@/components/ExpressionSection";
import InteractionSection from "@/components/InteractionSection";
import ClosureSection from "@/components/ClosureSection";
import FloatingParticles from "@/components/FloatingParticles";

const Index = () => {
  return (
    <main className="bg-romantic grain min-h-screen overflow-x-hidden relative">
      <FloatingParticles />
      <HeroSection />
      <IntentSection />
      <PhotoSection />
      <ExpressionSection />
      <InteractionSection />
      <ClosureSection />
    </main>
  );
};

export default Index;
