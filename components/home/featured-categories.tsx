'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: 'Bridal Mehendi',
    image: 'https://picsum.photos/seed/bridalcat/600/800',
    link: '/gallery?main=Mehendi&sub=Bridal',
  },
  {
    title: 'Festive Mehendi',
    image: 'https://picsum.photos/seed/festivecat/600/800',
    link: '/gallery?main=Mehendi&sub=Festive',
  },
  {
    title: 'Resin Art',
    image: 'https://picsum.photos/seed/resincat/600/800',
    link: '/gallery?main=Resin Art&sub=All Resin Art',
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
            Our Specialties
          </h2>
          <p className="text-dark/80 max-w-2xl mx-auto text-lg">
            Discover the artistry behind our most requested services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={category.link} className="group block relative overflow-hidden rounded-2xl aspect-[3/4]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-2xl font-serif font-bold text-light mb-2">
                    {category.title}
                  </h3>
                  <span className="text-accent uppercase text-sm tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    View Gallery &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
