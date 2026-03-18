'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAppStore, MainCategory } from '@/store/useStore';
import { Plus, Trash2 } from 'lucide-react';

export default function ManageCategoriesPage() {
  const { mehendiCategories, resinCategories, addCategory, removeCategory } = useAppStore();
  const [newCategory, setNewCategory] = useState('');
  const [selectedMain, setSelectedMain] = useState<MainCategory>('Mehendi');

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory.trim()) {
      const targetList = selectedMain === 'Mehendi' ? mehendiCategories : resinCategories;
      if (!targetList.includes(newCategory)) {
        addCategory(selectedMain, newCategory);
        setNewCategory('');
      }
    }
  };

  const totalCategories = mehendiCategories.length + resinCategories.length - 2;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">Manage Categories</h1>
        <p className="text-dark/60 font-light text-lg">Organize your artwork into collections.</p>
      </div>

      <div className="bg-white p-8 md:p-12 border border-dark/5 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <h2 className="text-2xl font-serif font-bold text-dark mb-8 relative z-10">Add New Category</h2>
        <form onSubmit={handleAddCategory} className="flex flex-col sm:flex-row gap-6 relative z-10">
          <div className="w-full sm:w-48">
            <label className="block text-xs font-medium text-dark/60 uppercase tracking-widest mb-2">Main Type</label>
            <select
              value={selectedMain}
              onChange={(e) => setSelectedMain(e.target.value as MainCategory)}
              className="w-full px-0 py-3 bg-transparent border-b border-dark/20 focus:outline-none focus:border-primary transition-colors text-dark appearance-none rounded-none"
            >
              <option value="Mehendi">Mehendi</option>
              <option value="Resin Art">Resin Art</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-xs font-medium text-dark/60 uppercase tracking-widest mb-2">Sub Category Name</label>
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="e.g., Minimalist Mehendi"
              className="w-full px-0 py-3 bg-transparent border-b border-dark/20 focus:outline-none focus:border-primary transition-colors text-dark placeholder-dark/30"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-dark text-light px-8 py-4 mt-auto font-medium tracking-widest uppercase text-sm hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-3 whitespace-nowrap"
          >
            <Plus size={16} />
            Add Category
          </button>
        </form>
      </div>

      <div className="bg-white p-8 md:p-12 border border-dark/5">
        <div className="flex items-end justify-between mb-8 border-b border-dark/10 pb-4">
          <h2 className="text-2xl font-serif font-bold text-dark">Existing Categories</h2>
          <span className="text-xs font-medium text-dark/50 uppercase tracking-widest">
            {totalCategories} Total
          </span>
        </div>
        
        <div className="mb-8">
          <h3 className="text-lg font-serif font-bold text-dark mb-4">Mehendi</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {mehendiCategories.filter(c => c !== 'All Mehendi').map((category) => (
                <motion.div
                  key={`mehendi-${category}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center justify-between p-6 border border-dark/10 bg-light/30 group hover:border-primary/30 transition-colors"
                >
                  <span className="font-serif text-lg text-dark">{category}</span>
                  <button
                    onClick={() => removeCategory('Mehendi', category)}
                    className="text-dark/30 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Delete category"
                  >
                    <Trash2 size={18} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-serif font-bold text-dark mb-4">Resin Art</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {resinCategories.filter(c => c !== 'All Resin Art').map((category) => (
                <motion.div
                  key={`resin-${category}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center justify-between p-6 border border-dark/10 bg-light/30 group hover:border-primary/30 transition-colors"
                >
                  <span className="font-serif text-lg text-dark">{category}</span>
                  <button
                    onClick={() => removeCategory('Resin Art', category)}
                    className="text-dark/30 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Delete category"
                  >
                    <Trash2 size={18} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
