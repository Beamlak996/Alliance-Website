import { Hero } from "@/components/general/hero";
import { ProgramsSection } from "@/components/general/program-section";
import { Stats } from "@/components/general/stats";

export const HomePage = () => {
  return (
    <div className="min-h-screen ">
      <Hero />
      <Stats />
      <ProgramsSection />
    </div>
  );
};
