import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import BestSellers from '@/components/home/BestSellers';
import RecipeSection from '@/components/home/RecipeSection';
import BusinessSolutions from '@/components/home/BusinessSolutions';
import TrustBadges from '@/components/home/TrustBadges';
import LeadCapture from '@/components/home/LeadCapture';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <BestSellers />
      <BusinessSolutions />
      <RecipeSection />
      <TrustBadges />
      <LeadCapture />
    </>
  );
}
