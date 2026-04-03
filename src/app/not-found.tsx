"use client";

import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-light via-cream/30 to-light">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <h1 className="font-georgia text-8xl md:text-9xl font-bold text-wine/20 mb-4">
          404
        </h1>

        {/* Icon */}
        <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Search className="w-8 h-8 text-wine" />
        </div>

        {/* Message */}
        <h2 className="font-georgia text-2xl md:text-3xl text-brown mb-3">
          Page Not Found
        </h2>
        
        <p className="text-taupe font-inter text-base mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-wine text-light px-6 py-3 rounded-full font-inter font-semibold hover:bg-wine/90 transition-all"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border border-wine/30 text-wine px-6 py-3 rounded-full font-inter font-semibold hover:bg-wine/5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
}