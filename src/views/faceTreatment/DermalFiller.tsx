"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  Shield,
  Heart,
  ChevronRight,
  Droplets,
  Sparkle,
  Award,
  Calendar,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Info,
  Target,
  Feather,
  Gem,
  Activity,
  Sun,
  Moon,
  Eye,
  Smile,
  Zap,
  UserCheck,
  RefreshCw,
  PlusCircle,
  ArrowRight,
  Quote,
  MapPin,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const DermalFillersLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "dermalFiller");

  const faqs = [
    {
      q: "Are dermal fillers safe?",
      a: "When performed by qualified doctors using approved products, dermal fillers are considered safe.",
    },
    {
      q: "Do dermal fillers hurt?",
      a: "Most people feel mild discomfort. Numbing methods are commonly used to improve comfort.",
    },
    {
      q: "How soon can I see results from dermal fillers?",
      a: "Results are usually visible immediately, then settle as swelling goes down.",
    },
    {
      q: "Is there downtime after dermal fillers?",
      a: "Many people return to normal activities right away, but mild swelling or bruising can last a few days.",
    },
    {
      q: "What are dermal fillers made of?",
      a: "Most modern fillers are made from hyaluronic acid, which naturally exists in the skin and helps hold moisture and volume.",
    },
    {
      q: "How long do dermal fillers last?",
      a: "Most HA fillers last 6 to 18 months, depending on the area treated, filler type, and individual factors.",
    },
    {
      q: "Can dermal fillers be reversed?",
      a: "Hyaluronic acid fillers can be dissolved using an enzyme when medically indicated.",
    },
    {
      q: "Will my face look unnatural or overfilled?",
      a: "With conservative planning and proper anatomy knowledge, results are designed to look natural and balanced.",
    },
    {
      q: "How much do dermal fillers cost in Malaysia?",
      a: "Many clinics share broad ranges like RM1,500 to RM5,000 per syringe, with KL pricing varying based on clinic standards and case complexity.",
    },
    {
      q: "How much does Juvederm cost in Malaysia?",
      a: "Some clinic pricing guides list ranges such as RM1,800 to RM3,000 per syringe depending on the specific Juvederm product.",
    },
    {
      q: "What should I avoid after filler injections?",
      a: "Avoid heavy exercise, heat exposure, and pressing the treated area for the first day or two unless your doctor advises otherwise.",
    },
    {
      q: "Can I combine fillers with other treatments?",
      a: "Often yes. Many people combine fillers with wrinkle relaxers like Botox for a more complete rejuvenation plan.",
    },
    {
      q: "Are fillers good for under-eye dark circles?",
      a: "If the dark circle is caused by hollowing or shadowing, tear trough filler may help. If it is pigment-related, other treatments may be better.",
    },
    {
      q: "What age is best to start dermal fillers?",
      a: "There is no perfect age. Some people start in their late 20s or 30s for subtle balancing. Others start later to restore volume loss.",
    },
    {
      q: "How do I choose the best dermal filler clinic in Kuala Lumpur?",
      a: "Look for doctor-performed treatment, transparent product discussion, strong hygiene standards, and a clinic that talks openly about safety and complication readiness.",
    },
  ];

  return (
    <>
      <main className="bg-light min-h-screen font-inter">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative overflow-hidden bg-linear-to-b from-cream to-light pt-20 pb-16 px-4"
        >
          {/* Glassmorphism background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-wine/5 rounded-full blur-3xl" />

          <motion.div
            variants={fadeInUp}
            className="container mx-auto max-w-6xl relative z-10"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  variants={fadeInUp}
                  className="inline-block px-4 py-2 bg-glass backdrop-blur-sm rounded-full text-wine text-sm mb-6 border border-white/20"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles size={16} /> Nexus Clinic Kuala Lumpur
                  </span>
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  className="font-georgia text-4xl lg:text-5xl text-brown leading-tight mb-6"
                >
                  Dermal Fillers in Kuala Lumpur That Look Like{" "}
                  <span className="text-wine italic">You, Just Rested</span>
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-taupe mb-8 leading-relaxed"
                >
                  A little lift. A softer shadow under the eyes. Better balance
                  in photos. Dermal fillers can do that, without changing your
                  face.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4"
                >
                  <button className="group bg-wine text-white px-8 py-4 rounded-full hover:bg-rose transition-all duration-300 flex items-center gap-2 shadow-lg shadow-wine/20">
                    Book Consultation
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </button>
                  <button className="border-2 border-wine/30 text-brown px-8 py-4 rounded-full hover:border-wine hover:bg-white/50 transition-all duration-300">
                    Learn More
                  </button>
                </motion.div>
              </div>

              <motion.div variants={scaleIn} className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-wine/10 to-rose/10 rounded-3xl blur-2xl" />
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Natural dermal filler results at Nexus Clinic KL"
                  className="relative z-10 rounded-3xl shadow-2xl object-cover w-full h-125"
                />
              </motion.div>
            </div>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16 p-6 bg-glass backdrop-blur-sm rounded-2xl border border-white/20"
            >
              {[
                { icon: UserCheck, text: "Doctor-performed injections" },
                { icon: Award, text: "High-quality, approved brands" },
                { icon: Feather, text: "Natural, balanced planning" },
                { icon: Shield, text: "Clear aftercare & safety-first" },
                { icon: MapPin, text: "Located in Kuala Lumpur" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-brown">
                  <item.icon size={18} className="text-wine shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Quick Competitor Snapshot */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-16 px-4 bg-white"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="p-6 rounded-2xl bg-cream/30 border border-taupe/10">
                <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                  <Target size={20} className="text-wine" /> What's ranking on
                  Google
                </h3>
                <p className="text-taupe mb-4">
                  When people search "dermal fillers Kuala Lumpur" and "dermal
                  filler Malaysia", results usually include:
                </p>
                <ul className="space-y-2">
                  {[
                    "Dr. A Clinic, CLEO Clinic, Clique Clinic",
                    "Dr. K & Associates, Dr. Soma Plastic Surgery",
                    "Listing directories: WhatClinic and Erufu Care",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-brown">
                      <ChevronRight size={16} className="text-rose" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-wine/5 border border-wine/20">
                <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                  <Gem size={20} className="text-wine" /> Your ranking
                  opportunity
                </h3>
                <p className="text-taupe mb-4">What competitors still miss:</p>
                <ul className="space-y-3">
                  {[
                    "Clear 'who it's for' guidance (first-timers want reassurance)",
                    "Simple, honest cost range for KL with what changes the price",
                    "Strong 'avoid the overfilled look' section (a top fear)",
                    "Complication readiness explained in plain language",
                    "Better PAA-style answers (short, direct, confidence-building)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-brown">
                      <PlusCircle
                        size={16}
                        className="text-wine mt-1 shrink-0"
                      />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-taupe mt-4 text-sm">
                  If Nexus Clinic KL covers these better than everyone else, you
                  have a real edge.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* What are dermal fillers */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 bg-linear-to-b from-light to-cream"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="text-wine font-semibold tracking-wider text-sm">
                UNDERSTANDING FILLERS
              </span>
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mt-2 mb-4">
                Dermal Filler Face Treatment in Malaysia (Kuala Lumpur)
              </h2>
            </motion.div>

            <div className="container mx-auto max-w-6xl mb-4">
              <motion.div
                variants={fadeInUp}
                className="grid md:grid-cols-2 gap-8"
              >
                <div className="p-6 rounded-2xl bg-wine/5 border border-wine/20">
                  <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                    Dermal fillers are not about looking different. They are
                    about restoring what time, stress, and volume loss quietly
                    take away.
                  </h3>
                  <p className="text-taupe mb-4">
                    In Kuala Lumpur, fillers are especially popular because
                    people want results that are:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Fast",
                      "Natural",
                      "Low downtime",
                      "easy to maintain between work, travel, and events",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-brown">
                        <PlusCircle
                          size={16}
                          className="text-wine mt-1 shrink-0"
                        />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-taupe mt-4 text-sm">
                    At Nexus Clinic Kuala Lumpur, we plan dermal fillers around
                    facial balance. That means we look at your whole face, not
                    just one line or one area.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-wine/5 border border-wine/20">
                  <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                    What dermal fillers can help with (real-life goals):
                  </h3>
                  <p className="text-taupe mb-4">
                    People rarely walk in saying “I want fillers.” They usually
                    say something like:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "I look tired even when I sleep.",
                      "My cheeks look flatter in photos",
                      "My smile lines feel heavier now",
                      "I want a sharper jawline, but still natural",
                      "My lips look dry and less defined",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-brown">
                        <PlusCircle
                          size={16}
                          className="text-wine mt-1 shrink-0"
                        />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-taupe mt-4 text-sm">
                    Fillers can help with all of these, when used carefully.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <h3 className="font-georgia text-2xl text-brown mb-4">
                    What are dermal fillers,{" "}
                    <span className="text-wine italic">in simple terms?</span>
                  </h3>
                  <p className="text-taupe mb-6">
                    Dermal fillers are gel-like injections placed under the skin
                    to restore volume and soften deeper lines. Most modern
                    fillers are made with hyaluronic acid (HA), a substance your
                    body already has. HA attracts water, so it gives a hydrated,
                    plump look. Some fillers are also designed to support
                    structure or stimulate collagen, depending on your goal.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Droplets, text: "Restore volume" },
                      { icon: Sparkle, text: "Soften lines" },
                      { icon: Heart, text: "Shape features" },
                      { icon: Activity, text: "Support structure" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-brown"
                      >
                        <item.icon size={18} className="text-rose" />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div className="absolute -inset-4 bg-wine/10 rounded-3xl blur-2xl" />
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Dermal filler treatment at Nexus Clinic Kuala Lumpur"
                  className="relative rounded-2xl shadow-2xl w-full h-100 object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-glass backdrop-blur-md p-4 rounded-xl border border-white/30">
                  <p className="text-brown text-sm">
                    <Quote size={16} className="inline text-wine mr-2" />
                    In Kuala Lumpur, fillers are popular because people want
                    results that are: fast, natural, low downtime, easy to
                    maintain
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Popular Areas */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 bg-white"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
                Popular dermal filler areas in Kuala Lumpur
              </h2>
              <p className="text-taupe max-w-2xl mx-auto">
                People rarely walk in saying "I want fillers." They usually say
                something like:
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  area: "Lips",
                  desc: "Not everyone wants bigger lips. Many want better outline, smoother texture, or a more even shape.",
                  icon: Heart,
                },
                {
                  area: "Cheeks",
                  desc: "Cheek filler can give a gentle lift and improve the 'tired' look by supporting the mid-face.",
                  icon: Sun,
                },
                {
                  area: "Under-eye",
                  desc: "Tear trough treatment for hollowing and shadows.",
                  icon: Eye,
                },
                {
                  area: "Jawline",
                  desc: "Jawline filler can sharpen angles and improve facial balance.",
                  icon: Activity,
                },
                {
                  area: "Chin",
                  desc: "A small change in chin projection can improve the whole side profile.",
                  icon: UserCheck,
                },
                {
                  area: "Smile lines",
                  desc: "Sometimes we support the cheeks first, then soften the folds.",
                  icon: Smile,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -5 }}
                  className="group p-6 rounded-2xl bg-cream/30 hover:bg-cream border border-taupe/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-wine/20 transition-colors">
                    <item.icon className="text-wine" size={24} />
                  </div>
                  <h3 className="font-georgia text-xl text-brown mb-2">
                    {item.area}
                  </h3>
                  <p className="text-taupe text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 p-4 bg-wine/5 rounded-xl"
            >
              <p className="text-brown text-sm">
                <Info size={16} className="inline text-wine mr-2" />
                Also: Temples and other volume-loss areas - Hollow temples can
                make the upper face look tired. Filler can restore smoothness
                when appropriate.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Types of Fillers */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 bg-linear-to-b from-cream to-light"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
                Types of dermal fillers used for the face
              </h2>
              <p className="text-taupe">
                You do not need to memorize brands to make a good decision. But
                it helps to understand the categories:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center">
                    <Droplets className="text-wine" size={20} />
                  </div>
                  <h3 className="font-georgia text-xl text-brown">
                    Hyaluronic Acid (HA) fillers
                  </h3>
                </div>
                <ul className="space-y-3 text-taupe">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-wine" />
                    Most common
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-wine" />
                    Immediate results
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-wine" />
                    Can be dissolved if needed (important for peace of mind)
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-rose/10 rounded-full flex items-center justify-center">
                    <RefreshCw className="text-rose" size={20} />
                  </div>
                  <h3 className="font-georgia text-xl text-brown">
                    Calcium Hydroxylapatite (CaHA)
                  </h3>
                </div>
                <ul className="space-y-3 text-taupe">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-rose" />
                    Stronger structure support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-rose" />
                    Can stimulate collagen in some cases
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-brown mt-8 italic"
            >
              A good clinic explains what is being used, why it suits your face,
              and what alternatives exist.
            </motion.p>
          </div>
        </motion.section>

        {/* Who it's for */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 bg-white"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl md:text-4xl text-brown text-center mb-12"
            >
              Who is dermal filler for?
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="p-8 rounded-3xl bg-green-50/30 border border-green-200"
              >
                <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={24} />
                  Good option if you:
                </h3>
                <ul className="space-y-3">
                  {[
                    "notice volume loss or facial sagging that is mild to moderate",
                    "want improvement without surgery",
                    "want quick results with minimal downtime",
                    "prefer subtle, natural enhancement",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-taupe">
                      <span className="text-green-600 font-bold mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="p-8 rounded-3xl bg-amber-50/30 border border-amber-200"
              >
                <h3 className="font-georgia text-xl text-brown mb-4 flex items-center gap-2">
                  <XCircle className="text-amber-600" size={24} />
                  Should postpone or avoid if you:
                </h3>
                <ul className="space-y-3">
                  {[
                    "are pregnant or breastfeeding",
                    "have an active skin infection near the area",
                    "have uncontrolled medical issues that make healing harder",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-taupe">
                      <span className="text-amber-600 font-bold mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-taupe mt-4 italic">
                  A doctor consultation is essential to confirm suitability.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* The "overfilled" fear */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 bg-linear-to-b from-cream to-light"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div
              variants={fadeInUp}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <AlertCircle className="text-wine mx-auto mb-4" size={48} />
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
                The "overfilled" fear: how Nexus Clinic KL avoids it
              </h2>
              <p className="text-taupe text-lg">
                This is one of the biggest worries in Kuala Lumpur.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="font-georgia text-xl text-brown mb-4">
                  A natural result usually comes from:
                </h3>
                <ul className="space-y-4">
                  {[
                    "treating the right point (support first, not just filling a line)",
                    "using conservative amounts",
                    "respecting facial proportions",
                    "building results in stages",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-wine text-sm">{i + 1}</span>
                      </span>
                      <span className="text-taupe">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-wine/5 p-8 rounded-3xl border border-wine/20">
                <h3 className="font-georgia text-xl text-brown mb-4">
                  What happens during an appointment:
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Facial assessment and planning",
                      sub: "We look at: your facial structure how you express (smile, talk, raise brows) asymmetry (everyone has it) what looks “off” in photos vs in the mirror",
                    },
                    {
                      title: "Comfort and numbing",
                      sub: "Most people feel mild discomfort, not real pain. Numbing support is typically used",
                    },
                    {
                      title: "Injection (within the hour)",
                      sub: "Treatment time varies by area. Many filler sessions are done within the hour",
                    },
                    {
                      title: "Review and aftercare",
                      sub: "You get simple aftercare instructions and guidance on what is normal vs what is not",
                    },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="text-brown font-bold">
                          {step.title}
                        </span>
                        <p className="text-taupe text-sm mt-4">{step.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Results and Longevity */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 bg-white"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft}>
                <h2 className="font-georgia text-3xl text-brown mb-4">
                  Results: when will you see changes?
                </h2>
                <p className="text-taupe text-lg mb-6">
                  Most filler results are visible immediately. Your final look
                  usually settles after mild swelling goes down.
                </p>

                <div className="bg-cream p-6 rounded-xl mb-8">
                  <h3 className="font-georgia text-xl text-brown mb-3 flex items-center gap-2">
                    <Clock size={20} className="text-wine" />
                    How long do dermal fillers last?
                  </h3>
                  <p className="text-taupe mb-3">It depends on:</p>
                  <ul className="space-y-2 text-taupe">
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-wine" />
                      the filler type
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-wine" />
                      the area treated (lips fade faster than cheeks)
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-wine" />
                      your metabolism and lifestyle
                    </li>
                  </ul>
                  <p className="text-wine font-semibold mt-4">
                    A common expectation for HA fillers is around 6 to 18
                    months.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInRight} className="space-y-6">
                <div className="bg-cream/30 p-6 rounded-xl">
                  <h3 className="font-georgia text-xl text-brown mb-3">
                    Downtime and aftercare
                  </h3>
                  <p className="text-taupe mb-3">Common, temporary effects:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["mild swelling", "redness", "small bruises"].map(
                      (effect, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white rounded-full text-sm text-brown border border-taupe/20"
                        >
                          {effect}
                        </span>
                      ),
                    )}
                  </div>
                  <p className="text-sm text-taupe">
                    These often settle within a few days.
                  </p>
                </div>

                <div className="bg-wine/5 p-6 rounded-xl">
                  <h4 className="font-semibold text-brown mb-2">
                    Simple aftercare tips (general):
                  </h4>
                  <ul className="space-y-2 text-sm text-taupe">
                    <li className="flex items-start gap-2">
                      <span className="text-wine">•</span>
                      For the first 24 to 48 hours: avoid intense workouts,
                      alcohol, saunas, and very hot showers
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wine">•</span>
                      Do not press or massage the area unless your doctor tells
                      you to
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-wine">•</span>
                      If you have an event, plan fillers at least 1 to 2 weeks
                      before
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Safety Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 bg-linear-to-b from-cream to-light"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <Shield size={48} className="text-wine mx-auto mb-4" />
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
                Safety: what matters most (and what to ask)
              </h2>
              <p className="text-taupe text-lg max-w-2xl mx-auto">
                Dermal fillers are medical treatments, not beauty add-ons.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-3xl shadow-xl mb-8"
            >
              <h3 className="font-georgia text-xl text-brown mb-4">
                When choosing a filler clinic in Kuala Lumpur, ask:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Who will inject me? Is it doctor-performed?",
                  "What brand and type of filler will be used?",
                  "What is the plan if complications happen?",
                  "Do you use conservative amounts, or push big changes fast?",
                ].map((question, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 p-4 bg-cream/30 rounded-xl"
                  >
                    <Info size={18} className="text-wine shrink-0 mt-0.5" />
                    <span className="text-brown text-sm">{question}</span>
                  </div>
                ))}
              </div>

              <p className="text-taupe text-sm max-w-3xl mt-4">
                Clinics commonly highlight doctor credentials and safety
                training, including LCP-certified doctors in Malaysia. Some
                clinics also openly discuss complication management, which is a
                good sign of maturity and responsibility.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-6 rounded-xl"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  Side effects and risks
                </h3>
                <p className="text-taupe mb-4">
                  Most side effects are mild and temporary.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-sm text-brown">
                    <AlertCircle
                      size={16}
                      className="inline text-amber-600 mr-2"
                    />
                    Rare complications can happen. That is why technique,
                    anatomy knowledge, and proper medical standards matter.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="bg-white p-6 rounded-xl"
              >
                <h3 className="font-georgia text-xl text-brown mb-3">
                  Seek urgent medical attention if:
                </h3>
                <ul className="space-y-2">
                  {[
                    "severe pain that worsens",
                    "skin turning pale or dark in patches",
                    "sudden vision changes",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-taupe">
                      <AlertCircle
                        size={16}
                        className="text-red-500 shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Cost Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 bg-white"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
                Dermal fillers cost in Kuala Lumpur, Malaysia
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
              <div className="bg-linear-to-r from-wine to-rose text-white p-8 rounded-3xl mb-8">
                <p className="text-lg mb-4">Pricing depends on:</p>
                <ul className="space-y-2">
                  {[
                    "area treated",
                    "number of syringes needed",
                    "filler brand and density",
                    "complexity of your case",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-cream p-6 rounded-xl">
                <p className="text-brown mb-4">
                  Across Malaysia, you will often see broad estimates like{" "}
                  <span className="font-bold">
                    RM1,500 to RM5,000 per syringe
                  </span>
                  , with KL sometimes on the higher side depending on clinic
                  standards and consultation depth.
                </p>
                <p className="text-taupe italic">
                  Some brand-specific guides also show ranges like RM1,800 to
                  RM3,000 per syringe for certain Juvederm products.
                </p>
                <div className="mt-4 p-4 bg-white rounded-lg border border-taupe/20">
                  <p className="text-brown text-sm">
                    <Info size={16} className="inline text-wine mr-2" />
                    At Nexus Clinic KL, the best way to price fairly is after a
                    facial assessment. That way you are not paying for a
                    "package," you are paying for a plan that fits your face.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Comparison Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 bg-linear-to-b from-cream to-light"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl md:text-4xl text-brown text-center mb-12"
            >
              Dermal fillers vs other treatments
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Fillers vs Botox",
                  points: [
                    "Fillers add volume and shape",
                    "Botox relaxes muscle movement",
                    "Many combine both for balanced results",
                  ],
                },
                {
                  title: "Fillers vs Thread lift",
                  points: [
                    "Fillers restore volume and structure",
                    "Thread lift focuses on lifting tissue",
                    "Choice depends on volume, lift, or both",
                  ],
                },
                {
                  title: "Fillers vs Fat transfer",
                  points: [
                    "Fat transfer is more invasive",
                    "Different healing process",
                    "Fillers are quicker and adjustable",
                  ],
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-georgia text-xl text-brown mb-4">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.points.map((point, j) => (
                      <li
                        key={j}
                        className="text-taupe text-sm flex items-start gap-2"
                      >
                        <ArrowRight
                          size={14}
                          className="text-wine mt-1 shrink-0"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Choose Nexus */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 bg-white"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
                Why choose Nexus Clinic Kuala Lumpur for dermal fillers?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                "Natural planning, not dramatic changes",
                "Doctor-led treatment and safety-first standards",
                "Balanced facial approach, not 'one area only' thinking",
                "Clear aftercare guidance, so you feel supported",
                "Honest recommendations, including when not to do fillers",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInLeft}
                  className="flex items-start gap-3 p-4 bg-cream/30 rounded-xl"
                >
                  <CheckCircle2 className="text-wine shrink-0" size={20} />
                  <span className="text-brown">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-taupe mt-8 italic"
            >
              If you are searching for dermal fillers in Kuala Lumpur, we invite
              you to book a consultation at Nexus Clinic KL and talk through
              options calmly.
            </motion.p>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* Final CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 bg-linear-to-r from-wine to-rose text-white"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl md:text-4xl mb-6"
            >
              Ready to explore dermal fillers in Kuala Lumpur?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg mb-8 text-white/90"
            >
              If you want a refreshed look that still feels like you, book a
              consultation at Nexus Clinic Kuala Lumpur. We will assess your
              face, listen to your concerns, and recommend a plan that fits your
              features, your comfort level, and your lifestyle.
            </motion.p>
            <motion.button
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-wine px-12 py-4 rounded-full font-semibold hover:bg-cream transition-colors shadow-xl inline-flex items-center gap-2"
            >
              Book Your Consultation
              <Calendar size={18} />
            </motion.button>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default DermalFillersLanding;
