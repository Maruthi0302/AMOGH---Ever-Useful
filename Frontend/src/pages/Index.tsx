
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ImpactMotive } from "@/components/ImpactMotive";
import { GlobalCollaborations } from "@/components/GlobalCollaborations";
import { TrustedByLeaders } from "@/components/TrustedByLeaders";
import { CommunityConnect } from "@/components/CommunityConnect";
import { HowItWorks } from "@/components/HowItWorks";
import { UpcomingPhase } from "@/components/UpcomingPhase";
import { WhatWeProvide } from "@/components/WhatWeProvide";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { FreelancingPreview } from "@/components/FreelancingPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-green-400/20 to-cyan-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <Header />
      <Hero />
      <FeaturedProducts />
      <FreelancingPreview />
      <ImpactMotive />
      <GlobalCollaborations />
      <TrustedByLeaders />
      <CommunityConnect />
      <HowItWorks />
      <UpcomingPhase />
      <WhatWeProvide />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
