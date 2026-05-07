import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import BestSellers from '@/components/home/BestSellers';
import SignatureDrinksCarousel from '@/components/home/SignatureDrinksCarousel';
import BusinessSolutions from '@/components/home/BusinessSolutions';
import RecipeSection from '@/components/home/RecipeSection';
import TrustBadges from '@/components/home/TrustBadges';
import LeadCapture from '@/components/home/LeadCapture';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <BestSellers />
      <SignatureDrinksCarousel />
      <BusinessSolutions />
      <RecipeSection />
      <TrustBadges />
      <LeadCapture />
    </>
  );
}
