import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductCategories from '@/components/ProductCategories';
import FeaturedProducts from '@/components/FeaturedProducts';
import UsageGuide from '@/components/UsageGuide';
import ContactInfo from '@/components/ContactInfo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
        <FeaturedProducts />
        <UsageGuide />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  );
}