import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PopularCourses from "@/components/PopularCourses";
import TrendingCourses from "@/components/TrendingCourses";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";
import courses from "@/data/courses.json";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />

      <PopularCourses />

      <TrendingCourses />

      <LearningTips />
      <TopInstructors />
    </div>
  );
}