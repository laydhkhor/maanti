'use client';

import { motion } from 'motion/react';
import { useAppStore } from '@/store/useStore';
import { ImageIcon, Tags, Star, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardPage() {
  const { mehendiCategories, resinCategories, galleryItems } = useAppStore();

  const totalCategories = mehendiCategories.length + resinCategories.length - 2;

  const stats = [
    { name: 'Total Artworks', value: galleryItems.length, icon: ImageIcon },
    { name: 'Categories', value: totalCategories, icon: Tags },
    { name: 'Total Reviews', value: 24, icon: Star },
    { name: 'Active Users', value: 156, icon: Users },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">Welcome Back, Manti</h1>
        <p className="text-dark/60 font-light text-lg">Here is what&apos;s happening with your studio today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white p-8 border border-dark/5 flex flex-col justify-between h-40 relative overflow-hidden group hover:border-primary/30 transition-colors"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                <Icon size={80} />
              </div>
              <div className="text-dark/40">
                <Icon size={24} />
              </div>
              <div>
                <p className="text-4xl font-serif font-bold text-dark mb-1">{stat.value}</p>
                <p className="text-xs font-medium text-dark/50 uppercase tracking-widest">{stat.name}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Recent Uploads Preview */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-end mb-8 border-b border-dark/10 pb-4">
            <h2 className="text-2xl font-serif font-bold text-dark">Recent Uploads</h2>
            <Link href="/dashboard/gallery" className="text-xs font-medium text-dark/50 uppercase tracking-widest hover:text-primary transition-colors">
              View All
            </Link>
          </div>
          <div className="space-y-6">
            {galleryItems.slice(0, 4).map((item) => (
              <div key={item.id} className="flex items-center gap-6 group cursor-pointer">
                <div className="w-24 h-24 relative shrink-0 overflow-hidden bg-secondary/20">
                  <Image 
                    src={item.imageUrl} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="flex-1 border-b border-dark/5 pb-6 group-hover:border-primary/30 transition-colors">
                  <h4 className="text-lg font-serif font-bold text-dark mb-1">{item.title}</h4>
                  <p className="text-sm text-dark/50 font-light">{item.mainCategory} &middot; {item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-dark mb-8 border-b border-dark/10 pb-4">Quick Actions</h2>
          <div className="flex flex-col gap-4">
            <Link 
              href="/dashboard/gallery" 
              className="p-8 bg-white border border-dark/5 hover:border-primary/30 transition-all group flex items-center justify-between"
            >
              <div>
                <span className="block text-sm font-medium text-dark mb-1">Upload Art</span>
                <span className="block text-xs text-dark/50 font-light">Add new pieces to your portfolio</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <ImageIcon size={18} />
              </div>
            </Link>
            
            <Link 
              href="/dashboard/categories" 
              className="p-8 bg-white border border-dark/5 hover:border-primary/30 transition-all group flex items-center justify-between"
            >
              <div>
                <span className="block text-sm font-medium text-dark mb-1">New Category</span>
                <span className="block text-xs text-dark/50 font-light">Organize your collections</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <Tags size={18} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
