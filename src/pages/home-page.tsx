import { Hero } from "@/components/general/hero";
import { Stats } from "@/components/general/stats";

export const HomePage = () => {
    return (
      <div className="min-h-screen bg-stone-100">
        <Hero />
        <Stats />
      </div>
    );
} 