import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PopularCourses from "@/components/PopularCourses";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
    </div>
  );
}