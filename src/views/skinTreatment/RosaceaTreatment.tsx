"use client"

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Thermometer,
  Sun,
  AlertCircle,
  Flower2,
  Shield,
  Eye,
  ChevronRight,
  Clock,
  Heart,
  MapPin,
  Phone,
  Calendar,
  Flame,
  Coffee,
  Dumbbell,
  Moon,
  CheckCircle2,
  XCircle,
  Activity,
  Sparkle,
  SunDim,
  Wind,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "@/src/components/FAQ";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const RosaceaTreatmentLanding = () => {

    const faqs = [
              {
                q: "Can rosacea be cured permanently?",
                a: "No, but treatment can control symptoms and prevent it from getting worse."
              },
              {
                q: "What is the best treatment for rosacea?",
                a: "It depends on symptoms. Topicals like azelaic acid, metronidazole, or ivermectin are common for bumps. Laser or IPL can help persistent redness and visible blood vessels."
              },
              {
                q: "What triggers rosacea flare-ups?",
                a: "Common triggers include sunlight, heat, stress, alcohol, spicy foods, and hot drinks."
              },
              {
                q: "Is rosacea the same as acne?",
                a: "No. Rosacea can look like acne but often comes with flushing and sensitivity, and harsh acne products can worsen it."
              },
              {
                q: "How long do rosacea creams take to work?",
                a: "Azelaic acid and metronidazole may take 2 to 6 weeks. Ivermectin may take longer, but results can last longer."
              },
              {
                q: "Do antibiotics help rosacea?",
                a: "Yes, especially when there are bumps and inflammation. The NHS notes antibiotics may be used for 6 to 16 weeks."
              },
              {
                q: "Does laser or IPL work for rosacea redness?",
                a: "It can. Mayo Clinic states laser can improve enlarged blood vessels and long-term redness."
              },
              {
                q: "How many laser sessions do I need?",
                a: "It varies, but a Malaysian vascular laser provider describes gradual improvement over 3 to 5 sessions."
              },
              {
                q: "Is rosacea contagious?",
                a: "No. The NHS states rosacea is not contagious."
              },
              {
                q: "Can rosacea affect the eyes?",
                a: "Yes. Seek urgent assessment for eye pain, blurred vision, light sensitivity, or red gritty eye."
              },
              {
                q: "Should I use steroid cream on rosacea?",
                a: "Usually no. PCDS advises avoiding steroid creams because they can make rosacea worse."
              }
            ]

    const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-rosacea-treatment1.webp",
      after: "/images/B&A-skin/B&A-rosacea-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-rosacea-treatment2.webp",
      after: "/images/B&A-skin/B&A-rosacea-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-rosacea-treatment3.webp",
      after: "/images/B&A-skin/B&A-rosacea-treatment3.webp",
    },
  ];
  return (
    <main className="min-h-screen bg-cream font-[--font-inter] overflow-hidden">
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="relative min-h-screen flex items-center justify-center px-4 py-20"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-rose opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-taupe opacity-5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-glass backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-rose/20"
          >
            <Sparkles className="w-4 h-4 text-wine" />
            <span className="text-sm text-brown">Nexus Clinic Kuala Lumpur</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-[--font-georgia] text-brown mb-6 leading-tight"
          >
            Calm the redness.
            <br />
            Control the flare-ups.
            <br />
            <span className="text-wine">Feel confident</span> in your skin again.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe max-w-3xl mx-auto mb-12"
          >
            Rosacea can make your face look "hot" even when you feel fine. It can sting, flush, and flare without warning. At Nexus Clinic Kuala Lumpur, we build a practical plan that fits Malaysian weather, your skin type, and your daily routine.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
            <button className="group bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all duration-300 flex items-center gap-2 text-lg shadow-lg hover:shadow-xl">
              Start Your Journey
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-wine text-wine px-8 py-4 rounded-full hover:bg-wine/5 transition-all duration-300 text-lg">
              Book Consultation
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
          >
            <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-rose/20">
              <MapPin className="w-6 h-6 text-wine mb-3" />
              <h3 className="font-semibold text-brown mb-2">Central KL Location</h3>
              <p className="text-sm text-taupe">LG 10, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur</p>
            </div>
            <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-rose/20">
              <Heart className="w-6 h-6 text-wine mb-3" />
              <h3 className="font-semibold text-brown mb-2">Sensitive-Skin Approach</h3>
              <p className="text-sm text-taupe">Gentle skincare, trigger control, and step-by-step treatment</p>
            </div>
            <div className="bg-glass backdrop-blur-sm p-6 rounded-2xl border border-rose/20">
              <Shield className="w-6 h-6 text-wine mb-3" />
              <h3 className="font-semibold text-brown mb-2">Clear Expectations</h3>
              <p className="text-sm text-taupe">Rosacea can be controlled, but often needs ongoing care</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* What is Rosacea Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <span className="text-wine font-semibold mb-4 block">UNDERSTANDING ROSACEA</span>
              <h2 className="text-4xl md:text-5xl font-[--font-georgia] text-brown mb-6">
                What Is Rosacea?
              </h2>
              <p className="text-lg text-taupe mb-6">
                Rosacea is a long-term inflammatory skin condition that usually affects the face. Many people notice persistent redness, flushing, visible small blood vessels, and sometimes acne-like bumps.
              </p>
              <p className="text-lg text-taupe mb-8">
                It is not caused by poor hygiene and it is not contagious.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-3 bg-wine rounded-full"></div>
                  <p className="text-brown">Redness across cheeks, nose, forehead, and chin</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-3 bg-wine rounded-full"></div>
                  <p className="text-brown">Flushing that comes and goes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-3 bg-wine rounded-full"></div>
                  <p className="text-brown">Small bumps or pus-filled spots</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-3 bg-wine rounded-full"></div>
                  <p className="text-brown">Dry, sensitive skin that stings</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-rose to-wine opacity-20 rounded-3xl blur-3xl"></div>
              <img
                src="/images/skin/rosacea-treatment.webp"
                alt="Rosacea skin condition"
                className="rounded-3xl shadow-2xl relative z-10 w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-cream p-6 rounded-2xl shadow-xl z-20">
                <Eye className="w-8 h-8 text-wine mb-2" />
                <p className="text-sm text-brown font-semibold">Eye symptoms</p>
                <p className="text-xs text-taupe">Sore eyelids or gritty eyes in some people</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Rosacea vs Acne Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-[--font-georgia] text-brown mb-6">
              Rosacea vs Acne
            </h2>
            <p className="text-lg text-taupe">
              Rosacea can look like acne, but they are not the same. Using harsh acne products can make rosacea worse because rosacea skin is often sensitive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={scaleIn} className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-rose/20 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-rose" />
                </div>
                <h3 className="text-2xl font-[--font-georgia] text-brown">Common Misdiagnosis</h3>
              </div>
              <p className="text-taupe">
                The NHS also notes rosacea can resemble other conditions like acne, dermatitis, and lupus, which is why proper diagnosis matters.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-white p-8 rounded-3xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-wine" />
                </div>
                <h3 className="text-2xl font-[--font-georgia] text-brown">Proper Diagnosis</h3>
              </div>
              <p className="text-taupe">
                Diagnosis is usually clinical. A doctor examines your skin and asks about symptoms and triggers. Tests may be used to rule out look-alike conditions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Triggers Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-[--font-georgia] text-brown mb-6">
              Common Rosacea Triggers in Malaysia
            </h2>
            <p className="text-lg text-taupe">
              Rosacea triggers are personal, but some are very common, especially in a hot, humid country like Malaysia.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Thermometer, label: "Outdoor heat", desc: "and humidity" },
              { icon: Sun, label: "Sun exposure", desc: "even short commutes" },
              { icon: Flame, label: "Spicy meals", desc: "and hot drinks" },
              { icon: Dumbbell, label: "Gym sessions", desc: "intense cardio" },
              { icon: Moon, label: "Stress and", desc: "poor sleep" },
              { icon: Coffee, label: "Alcohol", desc: "common trigger" },
              { icon: Wind, label: "Hot/cold", desc: "temperature changes" },
              { icon: Activity, label: "Exercise", desc: "intense activity" },
            ].map((trigger, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-cream p-6 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <trigger.icon className="w-8 h-8 text-wine mx-auto mb-3" />
                <h3 className="font-semibold text-brown">{trigger.label}</h3>
                <p className="text-sm text-taupe">{trigger.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-glass backdrop-blur-sm p-8 rounded-3xl border border-rose/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-[--font-georgia] text-brown mb-2">KL Reality Check</h3>
                <p className="text-taupe">
                  A simple trigger diary (notes on food, weather, skincare, stress) helps a lot.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Treatment Approach Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-[--font-georgia] text-brown mb-6">
              Rosacea Treatment in Malaysia
            </h2>
            <p className="text-lg text-taupe">
              There is no "one product" that fixes rosacea forever. The best results usually come from combining:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Flower2, title: "Gentle Daily Care", desc: "Skin barrier reset" },
              { icon: Shield, title: "Trigger Control", desc: "Identify and avoid" },
              { icon: Sparkle, title: "Targeted Medication", desc: "If needed" },
              { icon: SunDim, title: "Laser Therapy", desc: "For persistent redness" },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <step.icon className="w-10 h-10 text-wine mb-4" />
                <h3 className="font-semibold text-brown mb-2">{step.title}</h3>
                <p className="text-sm text-taupe">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-wine text-white p-12 rounded-3xl text-center"
          >
            <h3 className="text-3xl font-[--font-georgia] mb-4">Step 1: Calm Your Skin Barrier</h3>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              If your skin barrier is irritated, even the best medicine struggles.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 p-6 rounded-2xl">
                <h4 className="font-semibold mb-3">What to do daily</h4>
                <ul className="text-sm space-y-2">
                  <li>• Use gentle skincare for sensitive skin</li>
                  <li>• Wear SPF 30+ daily (even on cloudy days)</li>
                  <li>• Avoid rubbing, scrubbing when flaring</li>
                </ul>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl">
                <h4 className="font-semibold mb-3">What to avoid</h4>
                <p className="text-sm">
                  The Primary Care Dermatology Society warns to avoid steroid creams on the face for rosacea because they can worsen it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Prescription Options */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream p-8 rounded-3xl">
              <h3 className="text-2xl font-[--font-georgia] text-brown mb-6">
                Prescription Creams & Gels
              </h3>
              <p className="text-taupe mb-6">
                For acne-like bumps (papules and pustules) - Mayo Clinic lists common topical options:
              </p>
              <div className="space-y-4">
                {["Azelaic acid", "Metronidazole", "Ivermectin"].map((med, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-wine rounded-full"></div>
                    <span className="text-brown">{med}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-white rounded-xl">
                <Clock className="w-5 h-5 text-wine inline mr-2" />
                <span className="text-sm text-taupe">
                  May take 2 to 6 weeks to work (ivermectin may take longer)
                </span>
              </div>
            </div>

            <div className="bg-cream p-8 rounded-3xl">
              <h3 className="text-2xl font-[--font-georgia] text-brown mb-6">
                For Persistent Facial Redness
              </h3>
              <p className="text-taupe mb-6">
                Mayo Clinic lists brimonidine and oxymetazoline as topical options that reduce flushing by constricting blood vessels.
              </p>
              <div className="mt-6 p-4 bg-white rounded-xl">
                <AlertCircle className="w-5 h-5 text-wine inline mr-2" />
                <span className="text-sm text-taupe">
                  Temporary effect with possible rebound redness if overused
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Laser & IPL Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-[--font-georgia] text-brown mb-6">
              Laser and Light Treatments
            </h2>
            <p className="text-lg text-taupe">
              If your main problem is long-lasting redness or visible blood vessels, skincare alone often feels too slow. This is where laser and IPL can help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "IPL Therapy",
                desc: "M22 IPL for rosacea and redness",
                price: "from RM688 per session",
                features: ["Targets redness", "Broken capillaries", "Broad-spectrum light"]
              },
              {
                title: "Vascular Lasers",
                desc: "Yellow laser, PDL-style systems",
                price: "3-5 sessions gradual improvement",
                features: ["Direct vessel targeting", "Minimal downtime", "For visible vessels"]
              },
              {
                title: "Combination Plans",
                desc: "Medication + Laser",
                price: "Custom treatment",
                features: ["Calm inflammation first", "Then laser cleanup", "Long-term results"]
              }
            ].map((treatment, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-xl font-[--font-georgia] text-brown mb-3">{treatment.title}</h3>
                <p className="text-wine font-semibold mb-2">{treatment.desc}</p>
                <p className="text-sm text-taupe mb-4">{treatment.price}</p>
                <ul className="space-y-2">
                  {treatment.features.map((feature, i) => (
                    <li key={i} className="text-sm text-brown flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-wine" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-wine text-white p-8 rounded-3xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-[--font-georgia] mb-2">What Does Treatment Feel Like?</h3>
                <p>Warm snapping sensation, like a rubber band flick, with mild redness after. Sessions last 20-40 minutes.</p>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-full">
                <span className="font-semibold">3-5 sessions</span> typically needed
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Nexus Clinic Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-[--font-georgia] text-brown mb-6">
              Rosacea Treatment at Nexus Clinic Kuala Lumpur
            </h2>
            <p className="text-lg text-taupe">
              We do not treat rosacea like a "one facial and done" problem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { step: "01", title: "Proper Assessment", desc: "Redness-only vs redness + bumps vs ocular symptoms" },
              { step: "02", title: "Skin-Barrier Reset", desc: "Gentle products and sunscreen habits" },
              { step: "03", title: "Medical Treatment", desc: "Topical or oral based on symptoms" },
              { step: "04", title: "Laser Options", desc: "When persistent redness or visible veins" },
              { step: "05", title: "Trigger Strategy", desc: "For Malaysia (heat, sun, spicy food, stress)" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="relative p-6 bg-cream rounded-2xl"
              >
                <span className="text-5xl font-[--font-georgia] text-wine/20 absolute top-2 right-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-brown mb-2 relative">{item.title}</h3>
                <p className="text-taupe relative">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="bg-glass backdrop-blur-sm p-8 rounded-3xl border border-rose/20"
          >
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-wine" />
                <div>
                  <p className="text-brown font-semibold">Visit us</p>
                  <p className="text-sm text-taupe">LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-8 h-8 text-wine" />
                <div>
                  <p className="text-brown font-semibold">Contact</p>
                  <p className="text-sm text-taupe">016-7025699 / 03-21635699</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-light"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-[--font-georgia] text-brown mb-6">
              Cost of Rosacea Treatment in Malaysia
            </h2>
            <p className="text-lg text-taupe">
              Prices vary based on clinic, device, and how many sessions you need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-taupe mb-2">Directory listings show</p>
                <p className="text-3xl font-[--font-georgia] text-wine">from RM189</p>
                <p className="text-sm text-brown">Rosacea treatment in Kuala Lumpur</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-taupe mb-2">IPL services across Malaysia</p>
                <p className="text-3xl font-[--font-georgia] text-wine">from RM499</p>
                <p className="text-sm text-brown">Directory page (varies by clinic)</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-[--font-georgia] text-brown mb-6">What usually drives cost</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-3 bg-wine rounded-full"></div>
                  <span className="text-taupe">Treatment type (topicals vs oral meds vs laser/IPL)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-3 bg-wine rounded-full"></div>
                  <span className="text-taupe">How many areas are treated (cheeks only vs full face)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-3 bg-wine rounded-full"></div>
                  <span className="text-taupe">Number of sessions (often 3 to 5 for visible redness work)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1 h-1 mt-3 bg-wine rounded-full"></div>
                  <span className="text-taupe">Need for maintenance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FAQ data={faqs} />

      {/* CTA Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        className="px-4 py-20 bg-wine"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-[--font-georgia] mb-6"
          >
            Start Your Journey to Clearer Skin
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl mb-8 opacity-90">
            If you're searching for rosacea treatment in Kuala Lumpur or facial redness treatment in Malaysia, start with a plan that calms your skin first and targets the right trigger second.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-wine px-8 py-4 rounded-full hover:bg-cream transition-colors duration-300 text-lg font-semibold">
              Book Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-300 text-lg">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default RosaceaTreatmentLanding;