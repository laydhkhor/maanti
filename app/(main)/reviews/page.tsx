'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Bride',
    service: 'Mehendi',
    text: 'Manti created the most beautiful bridal mehendi for my special day. The stain was incredibly dark and the intricate details were breathtaking. Highly recommended!',
    date: 'October 12, 2025',
  },
  {
    id: 2,
    name: 'Aisha Khan',
    role: 'Customer',
    service: 'Resin Art',
    text: 'I ordered a custom resin tray for my anniversary and it exceeded all expectations. The colors and the finish are just perfect. A true artist.',
    date: 'September 28, 2025',
  },
  {
    id: 3,
    name: 'Neha Gupta',
    role: 'Bridesmaid',
    service: 'Mehendi',
    text: 'The festive mehendi designs were so unique and modern. Manti was so patient and professional throughout the entire process.',
    date: 'August 15, 2025',
  },
  {
    id: 4,
    name: 'Riya Patel',
    role: 'Bride',
    service: 'Mehendi',
    text: 'I was so nervous about my bridal mehendi, but Manti made me feel so comfortable. Her designs are flawless and the stain lasted for weeks!',
    date: 'July 05, 2025',
  },
  {
    id: 5,
    name: 'Simran Kaur',
    role: 'Customer',
    service: 'Resin Art',
    text: 'The resin coasters I bought are a conversation starter in my living room. They are so elegant and well-made. Will definitely order again.',
    date: 'June 20, 2025',
  },
  {
    id: 6,
    name: 'Anjali Desai',
    role: 'Customer',
    service: 'Mehendi',
    text: 'Manti is incredibly talented. I got a simple Arabic design for a party and it was done so quickly and beautifully.',
    date: 'May 10, 2025',
  },
];

const categories = ['All', 'Mehendi', 'Resin Art'];

export default function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredReviews = activeCategory === 'All' 
    ? reviews 
    : reviews.filter(r => r.service === activeCategory);

  return (
    <div className="min-h-screen bg-light pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-dark mb-6 tracking-tight">
              Words of <span className="font-script text-primary font-normal text-6xl md:text-8xl italic">Love</span>
            </h1>
            <p className="text-dark/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Stories from those who have experienced the art of Manti Studio.
            </p>
          </motion.div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-secondary/30 rounded-full blur-3xl -z-10 pointer-events-none" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 relative z-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-500 ${
                activeCategory === category
                  ? 'bg-dark text-light shadow-lg shadow-dark/10 scale-105'
                  : 'bg-transparent border border-dark/10 text-dark/60 hover:border-dark/30 hover:text-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review, index) => (
              <motion.div
                layout
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="break-inside-avoid bg-white p-10 border border-dark/5 relative group hover:border-primary/30 transition-colors duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="mb-8">
                  <span className="text-6xl font-serif text-secondary leading-none absolute top-6 left-6 opacity-50">&quot;</span>
                  <p className="text-dark/80 font-serif text-lg leading-relaxed relative z-10 pt-6">
                    {review.text}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-dark/5">
                  <div>
                    <h4 className="font-serif font-bold text-dark text-lg">{review.name}</h4>
                    <p className="text-xs font-medium text-dark/40 uppercase tracking-widest mt-1">{review.service}</p>
                  </div>
                  <span className="text-xs text-dark/30 font-light">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
