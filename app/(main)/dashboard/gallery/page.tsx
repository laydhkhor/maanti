'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAppStore, MainCategory, GalleryItem } from '@/store/useStore';
import { Upload, Trash2, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export default function ManageGalleryPage() {
  const { mehendiCategories, resinCategories, galleryItems, addGalleryItem, removeGalleryItem } = useAppStore();
  const [title, setTitle] = useState('');
  const [mainCategory, setMainCategory] = useState<MainCategory>('Mehendi');
  const [category, setCategory] = useState<string>('Bridal');
  const [imageUrl, setImageUrl] = useState('');

  const currentSubCategories = mainCategory === 'Mehendi' 
    ? mehendiCategories.filter(c => c !== 'All Mehendi')
    : resinCategories.filter(c => c !== 'All Resin Art');

  const handleMainCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMain = e.target.value as MainCategory;
    setMainCategory(newMain);
    setCategory(newMain === 'Mehendi' ? 'Bridal' : 'Jewelries');
  };

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && mainCategory && category && imageUrl) {
      const newItem: GalleryItem = {
        id: Math.random().toString(36).substr(2, 9),
        title,
        mainCategory,
        category,
        imageUrl,
      };
      addGalleryItem(newItem);
      setTitle('');
      setImageUrl('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">Manage Gallery</h1>
        <p className="text-dark/60 font-light text-lg">Upload and organize your artwork portfolio.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Upload Form */}
        <div className="lg:col-span-1 bg-white p-8 border border-dark/5 h-fit sticky top-24">
          <h2 className="text-2xl font-serif font-bold text-dark mb-8 border-b border-dark/10 pb-4">Upload Artwork</h2>
          <form onSubmit={handleAddImage} className="space-y-8">
            <div>
              <label className="block text-xs font-medium text-dark/60 uppercase tracking-widest mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Royal Bridal Hands"
                className="w-full px-0 py-3 bg-transparent border-b border-dark/20 focus:outline-none focus:border-primary transition-colors text-dark placeholder-dark/30"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-dark/60 uppercase tracking-widest mb-2">Main Category</label>
              <select
                value={mainCategory}
                onChange={handleMainCategoryChange}
                className="w-full px-0 py-3 bg-transparent border-b border-dark/20 focus:outline-none focus:border-primary transition-colors text-dark appearance-none rounded-none"
                required
              >
                <option value="Mehendi">Mehendi</option>
                <option value="Resin Art">Resin Art</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-dark/60 uppercase tracking-widest mb-2">Sub Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-0 py-3 bg-transparent border-b border-dark/20 focus:outline-none focus:border-primary transition-colors text-dark appearance-none rounded-none"
                required
              >
                {currentSubCategories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-dark/60 uppercase tracking-widest mb-2">Image URL</label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-0 py-3 bg-transparent border-b border-dark/20 focus:outline-none focus:border-primary transition-colors text-dark placeholder-dark/30"
                required
              />
              <p className="text-[10px] text-dark/40 mt-2 uppercase tracking-wider">For demo purposes, use a valid image URL.</p>
            </div>
            <button
              type="submit"
              className="w-full bg-dark text-light py-4 mt-8 font-medium tracking-widest uppercase text-sm hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-3"
            >
              <Upload size={16} />
              Upload to Gallery
            </button>
          </form>
        </div>

        {/* Gallery Grid */}
        <div className="lg:col-span-2">
          <div className="flex items-end justify-between mb-8 border-b border-dark/10 pb-4">
            <h2 className="text-2xl font-serif font-bold text-dark">Portfolio</h2>
            <span className="text-xs font-medium text-dark/50 uppercase tracking-widest">
              {galleryItems.length} items
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <AnimatePresence>
              {galleryItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group relative overflow-hidden bg-secondary/20 aspect-[3/4]"
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-xl font-serif font-bold text-light mb-1">{item.title}</h3>
                    <p className="text-accent text-xs font-medium uppercase tracking-widest">{item.mainCategory} &middot; {item.category}</p>
                  </div>

                  <button
                    onClick={() => removeGalleryItem(item.id)}
                    className="absolute top-4 right-4 bg-dark/80 text-light p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-500"
                    aria-label="Delete image"
                  >
                    <Trash2 size={16} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {galleryItems.length === 0 && (
              <div className="col-span-full py-24 flex flex-col items-center justify-center text-dark/30 border border-dashed border-dark/20 bg-white">
                <ImageIcon size={48} className="mb-6 opacity-50" />
                <p className="font-serif text-xl">Your gallery is empty.</p>
                <p className="text-sm font-light mt-2">Upload your first piece to begin.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
