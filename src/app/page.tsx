import HeroSection from '@/components/home/HeroSection';
import StatsBar from '@/components/home/StatsBar';
import BusinessSolutions from '@/components/home/BusinessSolutions';
import CategoryGrid from '@/components/home/CategoryGrid';
import SignatureDrinksCarousel from '@/components/home/SignatureDrinksCarousel';
import TrustBadges from '@/components/home/TrustBadges';
import RecipeSection from '@/components/home/RecipeSection';
import LeadCapture from '@/components/home/LeadCapture';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <BusinessSolutions />
      <CategoryGrid />
      <SignatureDrinksCarousel />
      <TrustBadges />
      <RecipeSection />
      <LeadCapture />
    </>
  );
}
