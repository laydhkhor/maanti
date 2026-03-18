'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride',
    avatar: 'https://picsum.photos/seed/avatar1/400/500',
    text: 'Manti created the most beautiful bridal mehendi for my special day. The stain was incredibly dark and the intricate details were breathtaking. It felt like wearing a piece of fine art.',
  },
  {
    name: 'Aisha Khan',
    role: 'Customer',
    avatar: 'https://picsum.photos/seed/avatar2/400/500',
    text: 'I ordered a custom resin tray for my anniversary and it exceeded all expectations. The colors and the finish are just perfect. A true artist who understands emotion.',
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-dark text-light relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            Words of <span className="font-[family-name:var(--font-script)] text-primary font-normal text-6xl md:text-8xl italic">Love</span>
          </h2>
        </div>

        <div className="space-y-32">
          {testimonials.map((testimonial, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={testimonial.name} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full lg:w-5/12 relative"
                >
                  <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover filter grayscale-[30%]"
                      referrerPolicy="no-referrer"
                    />
                    {/* Decorative Frame */}
                    <div className={`absolute -inset-4 border border-light/20 z-0 ${isEven ? '-rotate-3' : 'rotate-3'}`} />
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-full lg:w-7/12 relative"
                >
                  <span className="absolute -top-20 -left-10 text-[120px] font-serif text-light/5 leading-none select-none">
                    &quot;
                  </span>
                  
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed mb-10 relative z-10">
                    {testimonial.text}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="h-[1px] w-12 bg-primary" />
                    <div>
                      <h4 className="font-serif text-xl tracking-wide uppercase">{testimonial.name}</h4>
                      <p className="text-sm text-light/50 font-light tracking-widest uppercase mt-1">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center justify-center px-10 py-4 border border-light/20 hover:bg-light hover:text-dark transition-colors duration-500 text-sm font-medium tracking-widest uppercase"
          >
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
