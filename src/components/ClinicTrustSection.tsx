"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Calendar, Shield, Eye, CheckCircle, Star } from "lucide-react";

interface ClinicTrustSectionProps {
  fadeInUp?: any;
}

export default function ClinicTrustSection({ fadeInUp }: ClinicTrustSectionProps) {
  return (
    <section className="py-6 md:py-8 px-4 bg-light">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-4xl"
      >
        <div className="bg-white rounded-lg p-4 border border-taupe/10">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-wine" />
              <span className="font-inter font-semibold text-brown text-sm">Nexus Clinic KL</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-inter text-[10px] text-taupe ml-1">4.8</span>
            </div>
          </div>

          {/* 3 Key Stats */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-taupe/10">
            <div className="text-center">
              <p className="font-inter text-[10px] text-taupe">Since</p>
              <p className="font-georgia text-brown font-bold">2001</p>
            </div>
            <div className="text-center border-x border-taupe/10">
              <p className="font-inter text-[10px] text-taupe">Location</p>
              <p className="font-georgia text-brown font-bold text-sm">KLCC</p>
            </div>
            <div className="text-center">
              <p className="font-inter text-[10px] text-taupe">Hours</p>
              <p className="font-georgia text-brown font-bold text-sm">Mon-Sat</p>
            </div>
          </div>

          {/* Features - Horizontal scroll on mobile if needed */}
          <div className="flex justify-around gap-2 mt-3">
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-wine" />
              <span className="font-inter text-[10px] text-taupe">Cannula</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3 text-wine" />
              <span className="font-inter text-[10px] text-taupe">Safe Depth</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-wine" />
              <span className="font-inter text-[10px] text-taupe">0.3-0.8ml</span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}