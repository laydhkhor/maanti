import { Skeleton } from "@/components/ui/skeleton";

export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center bg-light pt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <Skeleton className="h-6 w-48 mb-6" />
          <Skeleton className="h-16 md:h-24 w-full mb-8" />
          <Skeleton className="h-16 md:h-24 w-3/4 mb-10" />
          <Skeleton className="h-20 w-2/3 mb-10" />
          <div className="flex gap-6">
            <Skeleton className="h-14 w-40" />
            <Skeleton className="h-14 w-32" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <Skeleton className="aspect-[3/4] w-full rounded-t-full" />
        </div>
      </div>
    </section>
  );
}

export function SectionSkeleton() {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="aspect-[3/4] w-full rounded-2xl" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSkeleton() {
  return (
    <section className="py-32 bg-dark">
      <div className="container mx-auto px-4">
        <Skeleton className="h-16 w-80 mx-auto mb-24" />
        <div className="space-y-32">
          {[1, 2].map((i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-24">
              <Skeleton className="w-full lg:w-5/12 aspect-[3/4]" />
              <div className="w-full lg:w-7/12">
                <Skeleton className="h-40 w-full mb-10" />
                <Skeleton className="h-10 w-48" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySkeleton() {
  return (
    <div className="min-h-screen bg-light pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <Skeleton className="h-20 w-80 mx-auto mb-6" />
          <Skeleton className="h-10 w-full max-w-2xl mx-auto" />
        </div>
        <div className="flex justify-center gap-4 mb-20">
          <Skeleton className="h-12 w-32 rounded-full" />
          <Skeleton className="h-12 w-32 rounded-full" />
          <Skeleton className="h-12 w-32 rounded-full" />
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="w-full aspect-[3/4] rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
