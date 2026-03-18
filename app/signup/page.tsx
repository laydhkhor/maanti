'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup logic
    console.log('Signup attempt:', { name, email, password });
  };

  return (
    <div className="min-h-screen flex bg-light">
      {/* Image Side */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="https://picsum.photos/seed/signupbg/1000/1500"
          alt="Manti Studio Art"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
        <div className="absolute bottom-12 left-12 text-light">
          <h2 className="text-5xl font-serif font-bold mb-4">Join the Journey</h2>
          <p className="text-lg font-light opacity-80 max-w-md">
            Become part of our artistic community.
          </p>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-24 relative overflow-hidden">
        {/* Soft Gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/40 blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-3xl opacity-50 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-md relative z-10"
        >
          <div className="mb-12">
            <Link href="/" className="inline-block mb-8">
              <span className="text-3xl font-serif font-bold text-dark">Manti.</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4 lg:hidden">Create Account</h1>
            <p className="text-dark/60 font-light">Sign up to book appointments and save your favorite designs.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-dark/60 uppercase tracking-widest mb-2">Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-0 py-3 bg-transparent border-b border-dark/20 focus:outline-none focus:border-primary transition-colors text-dark placeholder-dark/30"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-dark/60 uppercase tracking-widest mb-2">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-0 py-3 bg-transparent border-b border-dark/20 focus:outline-none focus:border-primary transition-colors text-dark placeholder-dark/30"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-dark/60 uppercase tracking-widest mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-0 py-3 bg-transparent border-b border-dark/20 focus:outline-none focus:border-primary transition-colors text-dark placeholder-dark/30"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-start mt-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  required
                  className="w-4 h-4 border-dark/20 rounded bg-transparent focus:ring-primary text-primary"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light text-dark/60">
                  I agree to the{' '}
                  <Link href="#" className="text-primary hover:text-dark transition-colors border-b border-primary/30 hover:border-dark pb-0.5">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-dark text-light py-4 mt-8 font-medium tracking-widest uppercase text-sm hover:bg-primary transition-colors duration-300"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-dark/10" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-light text-dark/40 uppercase tracking-widest text-xs">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <button type="button" className="flex justify-center items-center py-3 border border-dark/20 hover:bg-dark/5 transition-colors group">
                <svg className="w-5 h-5 text-dark/60 group-hover:text-dark transition-colors" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z" />
                </svg>
              </button>
              <button type="button" className="flex justify-center items-center py-3 border border-dark/20 hover:bg-dark/5 transition-colors group">
                <Facebook className="w-5 h-5 text-dark/60 group-hover:text-dark transition-colors" />
              </button>
              <button type="button" className="flex justify-center items-center py-3 border border-dark/20 hover:bg-dark/5 transition-colors group">
                <Instagram className="w-5 h-5 text-dark/60 group-hover:text-dark transition-colors" />
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-dark/60 text-sm font-light">
              Already have an account?{' '}
              <Link href="/login" className="text-primary font-medium hover:text-dark transition-colors border-b border-primary hover:border-dark pb-0.5">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
