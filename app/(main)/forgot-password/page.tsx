'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock reset logic
    console.log('Password reset requested for:', email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex bg-light">
      {/* Image Side */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="https://picsum.photos/seed/forgotbg/1000/1500"
          alt="Manti Studio Art"
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark/20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
        <div className="absolute bottom-12 left-12 text-light">
          <h2 className="text-5xl font-serif font-bold mb-4">Find Your Way</h2>
          <p className="text-lg font-light opacity-80 max-w-md">
            Let us help you get back to your artistic journey.
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
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4 lg:hidden">Reset Password</h1>
            <p className="text-dark/60 font-light">
              {submitted
                ? "We've sent you an email with instructions to reset your password."
                : "Enter your email address and we'll send you a link to reset your password."}
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
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

              <button
                type="submit"
                className="w-full bg-dark text-light py-4 mt-8 font-medium tracking-widest uppercase text-sm hover:bg-primary transition-colors duration-300"
              >
                Send Reset Link
              </button>
            </form>
          ) : (
            <div className="mt-8">
              <Link
                href="/login"
                className="block w-full text-center bg-dark text-light py-4 font-medium tracking-widest uppercase text-sm hover:bg-primary transition-colors duration-300"
              >
                Return to Login
              </Link>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-dark/60 text-sm font-light">
              Remember your password?{' '}
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
