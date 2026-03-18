import { create } from 'zustand';

export type MainCategory = 'All' | 'Mehendi' | 'Resin Art';

export interface GalleryItem {
  id: string;
  title: string;
  mainCategory: MainCategory;
  category: string;
  imageUrl: string;
}

interface AppState {
  mehendiCategories: string[];
  resinCategories: string[];
  galleryItems: GalleryItem[];
  addCategory: (main: MainCategory, category: string) => void;
  removeCategory: (main: MainCategory, category: string) => void;
  addGalleryItem: (item: GalleryItem) => void;
  removeGalleryItem: (id: string) => void;
}

const initialGalleryItems: GalleryItem[] = [
  { id: '1', title: 'Royal Bridal Design', mainCategory: 'Mehendi', category: 'Bridal', imageUrl: 'https://picsum.photos/seed/bridal1/800/1000' },
  { id: '2', title: 'Elegant Arabic Pattern', mainCategory: 'Mehendi', category: 'Arabic', imageUrl: 'https://picsum.photos/seed/arabic1/800/800' },
  { id: '3', title: 'Festive Hands', mainCategory: 'Mehendi', category: 'Semi Bridal', imageUrl: 'https://picsum.photos/seed/festive1/800/1200' },
  { id: '4', title: 'Ocean Resin Tray', mainCategory: 'Resin Art', category: 'Frames', imageUrl: 'https://picsum.photos/seed/resin1/1000/800' },
  { id: '5', title: 'Custom Wedding Frame', mainCategory: 'Resin Art', category: 'Preservations', imageUrl: 'https://picsum.photos/seed/custom1/800/800' },
  { id: '6', title: 'Intricate Bridal Feet', mainCategory: 'Mehendi', category: 'Bridal', imageUrl: 'https://picsum.photos/seed/bridal2/800/1000' },
  { id: '7', title: 'Minimalist Arabic', mainCategory: 'Mehendi', category: 'Arabic', imageUrl: 'https://picsum.photos/seed/arabic2/800/800' },
  { id: '8', title: 'Floral Resin Coasters', mainCategory: 'Resin Art', category: 'Jewelries', imageUrl: 'https://picsum.photos/seed/resin2/1000/1000' },
  { id: '9', title: 'Heritage Bridal Mehendi', mainCategory: 'Mehendi', category: 'Bridal', imageUrl: 'https://picsum.photos/seed/bridal3/800/1100' },
  { id: '10', title: 'Modern Arabic Mandala', mainCategory: 'Mehendi', category: 'Arabic', imageUrl: 'https://picsum.photos/seed/arabic3/800/900' },
  { id: '11', title: 'Whimsical Resin Pendant', mainCategory: 'Resin Art', category: 'Jewelries', imageUrl: 'https://picsum.photos/seed/jewelry1/1000/1100' },
  { id: '12', title: 'Anniversary Resin Preservation', mainCategory: 'Resin Art', category: 'Preservations', imageUrl: 'https://picsum.photos/seed/preserv1/800/950' },
  { id: '13', title: 'Bespoke Mehendi Wrap', mainCategory: 'Mehendi', category: 'Festive', imageUrl: 'https://picsum.photos/seed/festive2/800/1000' },
  { id: '14', title: 'Crystal Clear Paperweight', mainCategory: 'Resin Art', category: 'Custom Work', imageUrl: 'https://picsum.photos/seed/paperweight1/800/800' },
  { id: '15', title: 'Summer Bridal Extravaganza', mainCategory: 'Mehendi', category: 'Bridal', imageUrl: 'https://picsum.photos/seed/bridal4/800/1200' },
  { id: '16', title: 'Fusion Resin Clock', mainCategory: 'Resin Art', category: 'Frames', imageUrl: 'https://picsum.photos/seed/clock1/1000/1000' },
  { id: '17', title: 'Handcrafted Resin Comb', mainCategory: 'Resin Art', category: 'Jewelries', imageUrl: 'https://picsum.photos/seed/comb1/800/1000' },
  { id: '18', title: 'Geometric Mehendi', mainCategory: 'Mehendi', category: 'Arabic', imageUrl: 'https://picsum.photos/seed/arabic4/800/800' },
  { id: '19', title: 'Resin Geo Tray', mainCategory: 'Resin Art', category: 'Custom Work', imageUrl: 'https://picsum.photos/seed/tray1/1000/800' },
  { id: '20', title: 'Traditional Mehendi Duo', mainCategory: 'Mehendi', category: 'Bridal', imageUrl: 'https://picsum.photos/seed/bridal5/800/1100' },
];

export const useAppStore = create<AppState>((set) => ({
  mehendiCategories: ['All Mehendi', 'Bridal', 'Arabic', 'Semi Bridal', 'Festive'],
  resinCategories: ['All Resin Art', 'Jewelries', 'Frames', 'Preservations', 'Custom Work'],
  galleryItems: initialGalleryItems,
  addCategory: (main, category) =>
    set((state) => {
      if (main === 'Mehendi') {
        return { mehendiCategories: state.mehendiCategories.includes(category) ? state.mehendiCategories : [...state.mehendiCategories, category] };
      }
      if (main === 'Resin Art') {
        return { resinCategories: state.resinCategories.includes(category) ? state.resinCategories : [...state.resinCategories, category] };
      }
      return state;
    }),
  removeCategory: (main, category) =>
    set((state) => {
      if (main === 'Mehendi') {
        return { mehendiCategories: state.mehendiCategories.filter((c) => c !== category) };
      }
      if (main === 'Resin Art') {
        return { resinCategories: state.resinCategories.filter((c) => c !== category) };
      }
      return state;
    }),
  addGalleryItem: (item) =>
    set((state) => ({
      galleryItems: [item, ...state.galleryItems],
    })),
  removeGalleryItem: (id) =>
    set((state) => ({
      galleryItems: state.galleryItems.filter((item) => item.id !== id),
    })),
}));
