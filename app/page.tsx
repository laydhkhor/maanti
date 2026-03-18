import { HeroSection } from '@/components/home/hero-section';
import { FeaturedCategories } from '@/components/home/featured-categories';
import { HomeGallery } from '@/components/home/home-gallery';
import { Testimonials } from '@/components/home/testimonials';
import { ArtistStoryPreview } from '@/components/home/artist-story-preview';
import { InstagramGallery } from '@/components/home/instagram-gallery';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <HomeGallery />
      <FeaturedCategories />
      <Testimonials />
      <ArtistStoryPreview />
      <InstagramGallery />
    </div>
  );
}
