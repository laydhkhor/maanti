'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Image as ImageIcon, Tags, LogOut } from 'lucide-react';

const sidebarLinks = [
  { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Manage Gallery', path: '/dashboard/gallery', icon: ImageIcon },
  { name: 'Manage Categories', path: '/dashboard/categories', icon: Tags },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-light flex flex-col md:flex-row pt-20">
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-white border-r border-dark/5 p-8 flex flex-col">
        <div className="mb-12 hidden md:block">
          <h2 className="text-2xl font-serif font-bold text-dark tracking-wide">Admin Panel</h2>
          <p className="text-xs font-medium text-dark/40 uppercase tracking-widest mt-1">Manti Studio</p>
        </div>

        <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-none transition-all whitespace-nowrap border-l-2 ${
                  isActive
                    ? 'border-primary bg-secondary/20 text-dark'
                    : 'border-transparent text-dark/60 hover:bg-secondary/10 hover:text-dark'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-primary' : 'text-dark/40'} />
                <span className="font-medium text-sm tracking-wide">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto hidden md:block pt-8 border-t border-dark/5">
          <Link
            href="/"
            className="flex items-center gap-4 px-4 py-3 text-dark/60 hover:text-dark transition-colors"
          >
            <LogOut size={18} />
            <span className="font-medium text-sm tracking-wide">Exit Dashboard</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto bg-light/50">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
