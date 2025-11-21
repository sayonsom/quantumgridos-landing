"use client";

import { useState } from "react";
import BorderFrame from "../components/layout/BorderFrame";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Problem from "../components/sections/Problem";
import Solution from "../components/sections/Solution";
import UniqueValue from "../components/sections/UniqueValue";
import UseCases from "../components/sections/UseCases";
import TutorialVideos from "../components/sections/TutorialVideos";
import HowItWorks from "../components/sections/HowItWorks";
import Tech from "../components/sections/Tech";
import POC from "../components/sections/POC";
import Install from "../components/sections/Install";
import FAQ from "../components/sections/FAQ";
import BetaAccessModal from "../components/ui/BetaAccessModal";

export default function Home() {
  const [showBetaModal, setShowBetaModal] = useState(false);

  return (
    <>
      <BorderFrame />
      <Header onBetaAccessClick={() => setShowBetaModal(true)} />

      <main className="px-4 py-4 md:px-8 md:py-6">
        <Hero />
        <Problem />
        <Solution />
        <UniqueValue />
        <UseCases />
        <TutorialVideos />
        <HowItWorks />
        <Tech />
        <POC onBetaAccessClick={() => setShowBetaModal(true)} />
        <Install />
        <FAQ />
      </main>

      <Footer />

      <BetaAccessModal
        isOpen={showBetaModal}
        onClose={() => setShowBetaModal(false)}
      />
    </>
  );
}
