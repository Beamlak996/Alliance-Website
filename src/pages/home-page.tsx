import { CoursesComponent } from "@/components/general/courses";
import { Cta } from "@/components/general/cta";
import { Hero } from "@/components/general/hero";
import { ProgramsSection } from "@/components/general/program-section";
import { Stats } from "@/components/general/stats";
import { Testimonials } from "@/components/general/testimonials";

export const HomePage = () => {
  return (
    <div className="min-h-screen ">
      <Hero />
      <Stats />
      <CoursesComponent />
      <ProgramsSection />
      <Testimonials />
      <Cta />
    </div>
  );
};
