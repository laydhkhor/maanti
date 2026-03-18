import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { HeroSkeleton, SectionSkeleton, TestimonialsSkeleton } from '@/components/home/home-skeletons';

// Using dynamic imports for heavy components to improve TTI and bundle size.
const HeroSection = dynamic(() => import('@/components/home/hero-section').then(mod => mod.HeroSection), {
  loading: () => <HeroSkeleton />,
});

const HomeGallery = dynamic(() => import('@/components/home/home-gallery').then(mod => mod.HomeGallery), {
  loading: () => <SectionSkeleton />,
});

const FeaturedCategories = dynamic(() => import('@/components/home/featured-categories').then(mod => mod.FeaturedCategories), {
  loading: () => <SectionSkeleton />,
});

const Testimonials = dynamic(() => import('@/components/home/testimonials').then(mod => mod.Testimonials), {
  loading: () => <TestimonialsSkeleton />,
});

const ArtistStoryPreview = dynamic(() => import('@/components/home/artist-story-preview').then(mod => mod.ArtistStoryPreview), {
  loading: () => <SectionSkeleton />,
});

const InstagramGallery = dynamic(() => import('@/components/home/instagram-gallery').then(mod => mod.InstagramGallery), {
  loading: () => <SectionSkeleton />,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <HomeGallery />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <FeaturedCategories />
      </Suspense>

      <Suspense fallback={<TestimonialsSkeleton />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ArtistStoryPreview />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <InstagramGallery />
      </Suspense>
    </div>
  );
}
