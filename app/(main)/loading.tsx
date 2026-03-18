import { HeroSkeleton, SectionSkeleton } from "@/components/home/home-skeletons";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSkeleton />
      <SectionSkeleton />
      <SectionSkeleton />
    </div>
  );
}
