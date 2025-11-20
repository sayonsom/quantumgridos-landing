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
import Team from "../components/sections/Team";
import BetaAccessModal from "../components/ui/BetaAccessModal";

export default function Home() {
  const [showBetaModal, setShowBetaModal] = useState(false);

  return (
    <>
      <BorderFrame />
      <Header onBetaAccessClick={() => setShowBetaModal(true)} />

      <main className="p-4 md:p-6">
        <Hero onBetaAccessClick={() => setShowBetaModal(true)} />
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
        <Team />
      </main>

      <Footer />

      <BetaAccessModal
        isOpen={showBetaModal}
        onClose={() => setShowBetaModal(false)}
      />
    </>
  );
}
