'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useAppStore, MainCategory, GalleryItem } from '@/store/useStore';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { GallerySkeleton } from '@/components/home/home-skeletons';

function GalleryContent() {
  const { mehendiCategories, resinCategories, galleryItems } = useAppStore();
  const searchParams = useSearchParams();
  
  const [activeMainCategory, setActiveMainCategory] = useState<MainCategory>('All');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('All Mehendi');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const mainCategories: MainCategory[] = ['All', 'Mehendi', 'Resin Art'];

  useEffect(() => {
    const mainParam = searchParams.get('main') as MainCategory;
    const subParam = searchParams.get('sub');
    
    if (mainParam && mainCategories.includes(mainParam)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveMainCategory(mainParam);
      if (subParam) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveSubCategory(subParam);
      } else {
        if (mainParam === 'Mehendi') {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setActiveSubCategory('All Mehendi');
        } else if (mainParam === 'Resin Art') {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setActiveSubCategory('All Resin Art');
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleMainCategoryChange = (main: MainCategory) => {
    setActiveMainCategory(main);
    setCurrentPage(1); // Reset to first page on category change
    if (main === 'Mehendi') setActiveSubCategory('All Mehendi');
    else if (main === 'Resin Art') setActiveSubCategory('All Resin Art');
  };

  const handleSubCategoryChange = (sub: string) => {
    setActiveSubCategory(sub);
    setCurrentPage(1); // Reset to first page on sub-category change
  };

  const filteredItems = galleryItems.filter((item) => {
    if (activeMainCategory === 'All') return true;
    if (item.mainCategory !== activeMainCategory) return false;
    
    if (activeMainCategory === 'Mehendi' && activeSubCategory !== 'All Mehendi') {
      return item.category === activeSubCategory;
    }
    if (activeMainCategory === 'Resin Art' && activeSubCategory !== 'All Resin Art') {
      return item.category === activeSubCategory;
    }
    return true;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const currentSubCategories = activeMainCategory === 'Mehendi' 
    ? mehendiCategories 
    : activeMainCategory === 'Resin Art' 
      ? resinCategories 
      : [];

  return (
    <div className="min-h-screen bg-light pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-dark mb-6 tracking-tight">
              The <span className="font-script text-primary font-normal text-6xl md:text-8xl italic">Gallery</span>
            </h1>
            <p className="text-dark/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              A curated collection of our finest mehendi designs and bespoke resin art pieces. Explore the intricate details and vibrant colors.
            </p>
          </motion.div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-secondary/30 rounded-full blur-3xl -z-10 pointer-events-none" />
        </div>

        {/* Main Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 relative z-10">
          {mainCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleMainCategoryChange(category)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-500 ${
                activeMainCategory === category
                  ? 'bg-dark text-light shadow-lg shadow-dark/10 scale-105'
                  : 'bg-transparent border border-dark/10 text-dark/60 hover:border-dark/30 hover:text-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sub Category Filter */}
        <AnimatePresence mode="wait">
          {currentSubCategories.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-wrap justify-center gap-3 mb-20 relative z-10"
            >
              {currentSubCategories.map((subCategory) => (
                <button
                  key={subCategory}
                  onClick={() => handleSubCategoryChange(subCategory)}
                  className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeSubCategory === subCategory
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'bg-transparent border border-dark/5 text-dark/50 hover:border-dark/20 hover:text-dark'
                  }`}
                >
                  {subCategory}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {paginatedItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                key={item.id}
                className="break-inside-avoid relative group overflow-hidden cursor-pointer rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={800}
                    height={1200}
                    className="w-full h-auto object-cover transition-all duration-1000 ease-out group-hover:scale-105 blur-[1px] group-hover:blur-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/10 to-transparent group-hover:opacity-0 transition-opacity duration-500 ease-out" />
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-0 group-hover:translate-y-4 opacity-100 group-hover:opacity-0 transition-all duration-500 ease-out">
                    <p className="text-primary/90 text-xs font-medium uppercase tracking-widest mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-2xl font-serif font-bold text-light">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="absolute top-6 right-6 bg-light/10 backdrop-blur-md p-3 rounded-full text-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out transform scale-90 group-hover:scale-100">
                    <ZoomIn size={20} strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-20 flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-3 rounded-full border border-dark/10 text-dark disabled:opacity-30 disabled:cursor-not-allowed hover:bg-dark hover:text-light transition-all duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-12 h-12 rounded-full text-sm font-medium transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-dark text-light scale-110 shadow-lg'
                        : 'bg-transparent text-dark/50 hover:text-dark hover:bg-dark/5'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-3 rounded-full border border-dark/10 text-dark disabled:opacity-30 disabled:cursor-not-allowed hover:bg-dark hover:text-light transition-all duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <p className="text-dark/40 text-sm font-light">
              Showing page <span className="font-medium text-dark">{currentPage}</span> of <span className="font-medium text-dark">{totalPages}</span>
            </p>
          </div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 backdrop-blur-xl p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-8 right-8 text-light/50 hover:text-light transition-colors z-50 p-4"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} strokeWidth={1} />
              </button>
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative max-w-6xl w-full h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full md:w-2/3 h-[50vh] md:h-[80vh]">
                  <Image
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="w-full md:w-1/3 text-center md:text-left">
                  <p className="text-primary text-sm font-medium uppercase tracking-widest mb-4">
                    {selectedImage.category}
                  </p>
                  <h3 className="text-4xl md:text-5xl font-serif font-bold text-light mb-6">
                    {selectedImage.title}
                  </h3>
                  <div className="w-12 h-px bg-light/20 mx-auto md:mx-0 mb-6" />
                  <p className="text-light/60 font-light leading-relaxed">
                    A beautiful piece from our {selectedImage.category.toLowerCase()} collection, showcasing the intricate details and artistic vision of Manti Studio.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<GallerySkeleton />}>
      <GalleryContent />
    </Suspense>
  );
}
