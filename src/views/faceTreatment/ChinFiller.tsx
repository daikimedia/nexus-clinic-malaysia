"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  AlertCircle,
  Droplet,
  Sparkles,
  ArrowRight,
  Star,
  User,
  Scale,
  Compass,
  XCircle,
  FileText,
  TrendingUp,
  Search,
  Globe,
} from "lucide-react";

import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const ChinFillerLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "chinFiller");

  const faqs = [
    {
      q: "Does chin filler hurt?",
      a: "Most people feel pressure and mild discomfort. Numbing methods help. Many clinics describe it as manageable.",
    },
    {
      q: "How long does chin filler last?",
      a: "A common estimate is 12 to 24 months, depending on filler type and your metabolism.",
    },
    {
      q: "What is the downtime after chin filler?",
      a: "Most people return to normal activity quickly. Mild swelling or bruising may last a few days.",
    },
    {
      q: "Is chin filler safe?",
      a: "It is generally considered safe when performed by an experienced medical professional using approved products, but all injectables carry risks.",
    },
    {
      q: "How much does chin filler cost in Kuala Lumpur?",
      a: "It depends on the brand and syringe count. Nexus Clinic KL lists Juvederm per 1 cc pricing, with chin included across several products.",
    },
    {
      q: "How many cc do I need for chin filler?",
      a: "Many people are around 1 cc, but it depends on your profile and goals. A consultation is the right way to confirm.",
    },
    {
      q: "Will chin filler make my face look slimmer?",
      a: "It can make the lower face look more structured by improving projection and proportions. Some clinics describe this as a 'sharper' look rather than true fat loss.",
    },
    {
      q: "Can chin filler reduce a double chin?",
      a: "Chin filler does not remove fat. But it can improve the profile line in some people by adding projection, which may reduce the appearance in photos.",
    },
    {
      q: "When can I exercise after chin filler?",
      a: "A common safety guideline is to avoid strenuous exercise for about 24 hours to reduce swelling and bruising risk.",
    },
    {
      q: "What should I avoid after chin filler?",
      a: "Avoid heavy exercise, alcohol, and heat exposure like saunas for a short period after treatment, as commonly advised in filler aftercare guidance.",
    },
    {
      q: "Can chin filler be reversed?",
      a: "If a hyaluronic acid filler is used, it can be dissolved with hyaluronidase when medically appropriate.",
    },
    {
      q: "Will chin filler migrate?",
      a: "Migration risk depends on product choice, injection depth, and aftercare. Proper technique and not pressing the area early help.",
    },
    {
      q: "How soon will I see results?",
      a: "You see improvement right away. The look refines as swelling settles.",
    },
    {
      q: "How long does chin swelling last?",
      a: "Many people settle within days, but small swelling can take longer. Plan ahead if you have an event.",
    },
    {
      q: "Is chin filler better than jawline filler?",
      a: "They solve different problems. Chin filler improves projection and profile balance. Jawline filler improves side definition. Many people combine both for a smooth lower-face contour.",
    },
    {
      q: "Can men do chin filler in Kuala Lumpur?",
      a: "Yes. The plan is usually different, focusing on structure and balance rather than a narrow 'V' look.",
    },
    {
      q: "What filler does Nexus Clinic KL use for chin?",
      a: "Nexus Clinic KL lists Allergan (US) Juvederm fillers and includes chin in several product indications on its published price guide.",
    },
    {
      q: "How do I choose the best chin filler clinic in KL?",
      a: "Look for doctor-led assessment, authentic products, clear pricing, and realistic planning. Directory listings can help compare options, but your consultation matters most.",
    },
  ];

  return (
    <div className="min-h-screen bg-light font-inter">
      {/* Hero Section - Chin Filler Face Treatment in Malaysia (Kuala Lumpur) */}
      <section className="relative overflow-hidden bg-linear-to-b from-cream to-light py-20 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 bg-cover bg-center" />
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-wine text-white px-4 py-2 rounded-full text-sm">
                <Sparkles size={16} />
                <span>Kuala Lumpur • Malaysia</span>
              </div>
              <h1 className="font-georgia text-4xl md:text-5xl lg:text-5xl leading-tight text-wine">
                Chin Filler in Kuala Lumpur That Makes Your Whole Face Look More
                Balanced
              </h1>
              <p className="text-xl text-taupe leading-relaxed">
                A stronger chin can sharpen your profile fast. It can also make
                your jawline look cleaner in photos.
              </p>
              <p className="text-wine border-l-4 border-wine pl-4 py-2 bg-cream rounded-r-lg">
                At Nexus Clinic Kuala Lumpur, chin filler is planned around
                harmony. Not exaggeration.
              </p>

              {/* Trust at a glance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Award className="text-wine shrink-0 mt-1" size={20} />
                  <span className="text-sm text-brown">
                    Authentic Allergan (US) Juvederm dermal fillers
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <User className="text-wine shrink-0 mt-1" size={20} />
                  <span className="text-sm text-brown">
                    Specialist medical injectors with doctor-led planning
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Scale className="text-wine shrink-0 mt-1" size={20} />
                  <span className="text-sm text-brown">
                    Transparent per-syringe pricing so you can budget clearly
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Compass className="text-wine shrink-0 mt-1" size={20} />
                  <span className="text-sm text-brown">
                    Treatment mapped for natural proportions, not trends
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Chin filler consultation at Nexus Clinic Kuala Lumpur"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-rose rounded-full opacity-20 blur-3xl" />
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-wine rounded-full opacity-20 blur-3xl" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16 bg-cream border-b border-taupe/20">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-wine text-white px-4 py-2 rounded-full text-sm mb-4">
              <Search size={16} />
              <span>Quick competitor review</span>
            </div>
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
              What ranks on Google and what they miss
            </h2>
            <p className="text-lg text-taupe max-w-2xl mx-auto">
              When people search "chin filler Kuala Lumpur" or "chin
              augmentation KL", the top results usually fall into three groups:
            </p>
          </motion.div>

          {/* Three Groups */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Group 1: Clinic directories */}
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-wine/10 p-3 rounded-full">
                  <Globe className="text-wine" size={24} />
                </div>
                <h3 className="font-semibold text-brown text-lg">
                  Clinic directories and comparison sites
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe text-sm">
                  <TrendingUp size={16} className="text-wine shrink-0 mt-1" />
                  <span>
                    <span className="font-medium text-brown">Erufu Care</span>{" "}
                    ranks strongly because it lists many KL options, reviews,
                    and clinic locations. It even shows an "Updated: 2026
                    February" page for KL chin augmentation, which helps it stay
                    relevant.
                  </span>
                </li>
                <li className="flex items-start gap-2 text-taupe text-sm">
                  <TrendingUp size={16} className="text-wine shrink-0 mt-1" />
                  <span>
                    <span className="font-medium text-brown">WhatClinic</span>{" "}
                    often ranks because it lists many chin filler clinics and
                    starts its pricing low, attracting clicks.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Group 2: Single-clinic pages */}
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-wine/10 p-3 rounded-full">
                  <FileText className="text-wine" size={24} />
                </div>
                <h3 className="font-semibold text-brown text-lg">
                  Single-clinic "chin filler" pages
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe text-sm">
                  <CheckCircle2 size={16} className="text-wine shrink-0 mt-1" />
                  <span>
                    Pages like{" "}
                    <span className="font-medium text-brown">
                      Dr Jane Clinic's chin dermal filler guide
                    </span>{" "}
                    rank well because they answer common questions clearly,
                    including price, downtime, and longevity.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Group 3: General filler pages */}
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-wine/10 p-3 rounded-full">
                  <FileText className="text-wine" size={24} />
                </div>
                <h3 className="font-semibold text-brown text-lg">
                  General "dermal filler" pages that mention chin
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe text-sm">
                  <span>
                    Some KL clinics rank with broad filler pages that include
                    chin as one of the areas treated.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* What competitors miss - Nexus Advantage */}
          <motion.div
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-lg border-2 border-wine/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-wine" size={32} />
              <h3 className="font-georgia text-2xl text-brown">
                What most competitor pages still do not explain well{" "}
                <span className="text-wine">
                  (your advantage for Nexus Clinic KL)
                </span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="text-wine shrink-0 mt-1" size={20} />
                  <p className="text-brown">
                    <span className="font-medium">
                      They talk about "chin filler,"
                    </span>{" "}
                    but don't explain how chin projection changes the look of
                    the jawline and even the neck in photos.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="text-wine shrink-0 mt-1" size={20} />
                  <p className="text-brown">
                    <span className="font-medium">
                      They give a price range,
                    </span>{" "}
                    but skip the real question: How many cc do I need for my
                    face and why?
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <XCircle className="text-wine shrink-0 mt-1" size={20} />
                  <p className="text-brown">
                    <span className="font-medium">They mention safety,</span>{" "}
                    but don't clearly explain what is normal swelling vs what is
                    not.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle className="text-wine shrink-0 mt-1" size={20} />
                  <p className="text-brown">
                    <span className="font-medium">
                      They do not guide people
                    </span>{" "}
                    who are scared of looking "sharp" or "masculine" when they
                    actually want soft definition.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-cream p-4 rounded-lg border-l-4 border-wine">
              <p className="text-brown font-medium">
                This page is written to cover those missing points in simple,
                human language, focused on Kuala Lumpur, Malaysia, and branded
                for Nexus Clinic Kuala Lumpur.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-b from-cream to-light py-20 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 bg-cover bg-center" />
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h1 className="font-georgia text-4xl md:text-5xl lg:text-5xl leading-tight text-wine">
                Chin Filler Face Treatment in Malaysia (Kuala Lumpur)
              </h1>
              <p className="text-xl text-taupe leading-relaxed">
                A chin can be small, but it has a big job.
              </p>
              <div className="space-y-2">
                <p className="text-lg text-brown flex items-start gap-2">
                  <span className="text-wine font-bold">•</span> It anchors the
                  lower face.
                </p>
                <p className="text-lg text-brown flex items-start gap-2">
                  <span className="text-wine font-bold">•</span> It balances the
                  nose.
                </p>
                <p className="text-lg text-brown flex items-start gap-2">
                  <span className="text-wine font-bold">•</span> It affects how
                  your jawline looks from the side.
                </p>
              </div>
              <p className="text-lg text-rose font-medium">
                That is why chin filler is often called a "face-balancing"
                treatment. Sometimes, it is the one change that makes your
                photos look more defined without changing your whole face.
              </p>
              <p className="text-wine border-l-4 border-wine pl-4 py-2 bg-cream rounded-r-lg">
                At Nexus Clinic Kuala Lumpur, chin filler is planned around
                harmony. Not exaggeration.
              </p>

              {/* Trust at a glance */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <Award className="text-wine shrink-0 mt-1" size={20} />
                  <span className="text-sm text-brown">
                    Authentic Allergan (US) Juvederm dermal fillers
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <User className="text-wine shrink-0 mt-1" size={20} />
                  <span className="text-sm text-brown">
                    Specialist medical injectors with doctor-led planning
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Scale className="text-wine shrink-0 mt-1" size={20} />
                  <span className="text-sm text-brown">
                    Transparent per-syringe pricing so you can budget clearly
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Compass className="text-wine shrink-0 mt-1" size={20} />
                  <span className="text-sm text-brown">
                    Treatment mapped for natural proportions, not trends
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Chin filler consultation at Nexus Clinic Kuala Lumpur"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-rose rounded-full opacity-20 blur-3xl" />
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-wine rounded-full opacity-20 blur-3xl" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What is chin filler? Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
              What is chin filler?
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <p className="text-lg text-brown leading-relaxed">
                Chin filler is a non-surgical treatment where a dermal filler is
                placed into specific points of the chin to improve:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-taupe">
                  <CheckCircle2 className="text-wine shrink-0 mt-1" size={20} />
                  <span>projection (a weak or recessed chin)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe">
                  <CheckCircle2 className="text-wine shrink-0 mt-1" size={20} />
                  <span>chin shape and symmetry</span>
                </li>
                <li className="flex items-start gap-3 text-taupe">
                  <CheckCircle2 className="text-wine shrink-0 mt-1" size={20} />
                  <span>jawline flow (how the chin connects to the jaw)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe">
                  <CheckCircle2 className="text-wine shrink-0 mt-1" size={20} />
                  <span>overall facial proportions</span>
                </li>
              </ul>
              <p className="text-brown">
                Most chin fillers used today are hyaluronic acid (HA) fillers.
              </p>
              <p className="text-taupe">
                Dermal fillers are typically quick procedures with immediate
                results and minimal downtime, and results can last from months
                to years depending on the product and area.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Chin filler procedure explained"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* What chin filler can help with (real-life goals) */}
          <motion.div variants={fadeInUp} className="mt-16">
            <h3 className="font-georgia text-2xl md:text-3xl text-brown mb-6 text-center">
              What chin filler can help with{" "}
              <span className="text-wine">(real-life goals)</span>
            </h3>
            <p className="text-center text-taupe mb-8">
              People in Kuala Lumpur usually come in with one of these concerns:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Concern 1 */}
              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-xl"
              >
                <p className="text-wine font-semibold text-lg mb-2">
                  "My chin looks weak in side photos."
                </p>
                <p className="text-brown">
                  A small chin can make the nose look more prominent, even if
                  your nose is normal.
                </p>
              </motion.div>

              {/* Concern 2 */}
              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-xl"
              >
                <p className="text-wine font-semibold text-lg mb-2">
                  "My jawline looks soft, but I do not want surgery."
                </p>
                <p className="text-brown">
                  Chin projection can make the jawline look sharper by improving
                  the front "anchor" of the lower face.
                </p>
              </motion.div>

              {/* Concern 3 */}
              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-xl"
              >
                <p className="text-wine font-semibold text-lg mb-2">
                  "I have a double chin in photos."
                </p>
                <p className="text-brown">
                  Chin filler does not remove fat. But by improving projection,
                  it can reduce the appearance of a double chin in certain
                  angles because the profile looks more supported.
                </p>
              </motion.div>

              {/* Concern 4 */}
              <motion.div
                variants={scaleIn}
                className="bg-cream p-6 rounded-xl"
              >
                <p className="text-wine font-semibold text-lg mb-2">
                  "My chin is uneven."
                </p>
                <p className="text-brown">
                  Small asymmetries are common. A careful plan can improve
                  balance.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Who is chin filler for? Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-cream">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
              Who is chin filler for?
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-wine mb-4">
                Chin filler can be a good option if you:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-brown">
                  <Star className="text-wine fill-current" size={16} />
                  <span>have a recessed chin</span>
                </li>
                <li className="flex items-center gap-3 text-brown">
                  <Star className="text-wine fill-current" size={16} />
                  <span>want more definition without surgery</span>
                </li>
                <li className="flex items-center gap-3 text-brown">
                  <Star className="text-wine fill-current" size={16} />
                  <span>want better lower-face balance</span>
                </li>
                <li className="flex items-center gap-3 text-brown">
                  <Star className="text-wine fill-current" size={16} />
                  <span>want to improve your side profile</span>
                </li>
                <li className="flex items-center gap-3 text-brown">
                  <Star className="text-wine fill-current" size={16} />
                  <span>want a treatment with minimal downtime</span>
                </li>
              </ul>
              <p className="mt-4 text-rose italic">
                It is also popular for people who want a more defined "V-shape"
                look, but still natural.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-wine mb-4">
                Who should avoid or postpone chin filler?
              </h3>
              <p className="text-brown mb-4">
                A doctor consultation is important, especially if you:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-brown">
                  <AlertCircle className="text-wine shrink-0 mt-1" size={16} />
                  <span>are pregnant or breastfeeding</span>
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <AlertCircle className="text-wine shrink-0 mt-1" size={16} />
                  <span>
                    have an active infection, severe acne flare, or cold sore
                    outbreak near the lower face
                  </span>
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <AlertCircle className="text-wine shrink-0 mt-1" size={16} />
                  <span>have major dental procedures coming up soon</span>
                </li>
                <li className="flex items-start gap-2 text-brown">
                  <AlertCircle className="text-wine shrink-0 mt-1" size={16} />
                  <span>have a history of filler complications</span>
                </li>
              </ul>
              <p className="mt-4 text-rose font-medium">
                If you are unsure, start with an assessment. It saves stress
                later.
              </p>
            </motion.div>
          </div>

          {/* Chin filler at Nexus Clinic KL: how we plan it */}
          <motion.div variants={fadeInUp} className="mt-16">
            <h3 className="font-georgia text-2xl md:text-3xl text-brown mb-4">
              Chin filler at Nexus Clinic KL: how we plan it
            </h3>
            <p className="text-wine text-lg mb-4">
              Chin filler is not just "add volume." It is geometry.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-brown mb-4">
                At your consultation, we look at:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 size={16} className="text-wine" />
                  <span>your profile at rest</span>
                </div>
                <div className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 size={16} className="text-wine" />
                  <span>how your chin moves when you talk</span>
                </div>
                <div className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 size={16} className="text-wine" />
                  <span>chin width vs lip width</span>
                </div>
                <div className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 size={16} className="text-wine" />
                  <span>how the chin connects to your jawline</span>
                </div>
                <div className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 size={16} className="text-wine" />
                  <span>what looks most "off" to you in photos</span>
                </div>
              </div>
              <p className="mt-4 text-brown">
                Then we choose the right Juvederm type and the right placement.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* The fillers Nexus Clinic KL uses */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
              The fillers Nexus Clinic KL uses
            </h2>
            <p className="text-lg text-taupe max-w-3xl mx-auto">
              Nexus Clinic KL lists premium Allergan (US) Juvederm fillers and
              explains product selection depends on your anatomy and goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <div className="bg-wine w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Droplet className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-brown text-lg mb-2">
                Juvederm Ultra Plus XC
              </h3>
              <p className="text-taupe text-sm">
                chin listed among common areas
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <div className="bg-wine w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Droplet className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-brown text-lg mb-2">
                Juvederm Voluma
              </h3>
              <p className="text-taupe text-sm">cheeks and chin</p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <div className="bg-wine w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Droplet className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-brown text-lg mb-2">
                Juvederm Volux
              </h3>
              <p className="text-taupe text-sm">
                cheek and chin, lower face definition
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <div className="bg-wine w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Droplet className="text-white" size={20} />
              </div>
              <h3 className="font-semibold text-brown text-lg mb-2">
                Juvederm Volift
              </h3>
              <p className="text-taupe text-sm">
                lips, chin, lower face, cheek
              </p>
            </motion.div>
          </div>

          {/* How many syringes do you need for chin filler? */}
          <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-2xl">
            <h3 className="font-georgia text-2xl text-brown mb-4">
              How many syringes do you need for chin filler?
            </h3>
            <p className="text-taupe mb-4">
              This is one of the most searched questions in Malaysia.
            </p>
            <div className="bg-white p-6 rounded-xl border-l-4 border-wine">
              <p className="text-lg text-brown">
                A helpful general guide from Nexus Clinic's own filler planning
                page states:
              </p>
              <p className="text-2xl font-bold text-wine my-4">
                Chin is often around 1 cc, depending on profile and balance.
              </p>
              <p className="text-taupe">
                That does not mean everyone needs 1 cc. Some people need less.
                Some need more.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Procedure Steps */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-cream">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
              The Procedure
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-md relative"
            >
              <span className="absolute -top-3 -left-3 bg-wine text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                1
              </span>
              <h3 className="font-semibold text-brown text-lg mb-2 mt-2">
                Marking and mapping
              </h3>
              <p className="text-taupe text-sm">
                We confirm shape goals and safety points.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-md relative"
            >
              <span className="absolute -top-3 -left-3 bg-wine text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                2
              </span>
              <h3 className="font-semibold text-brown text-lg mb-2 mt-2">
                Comfort and numbing
              </h3>
              <p className="text-taupe text-sm">
                Chin filler is usually manageable. You may still feel pressure.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-md relative"
            >
              <span className="absolute -top-3 -left-3 bg-wine text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                3
              </span>
              <h3 className="font-semibold text-brown text-lg mb-2 mt-2">
                Injection and sculpting
              </h3>
              <p className="text-taupe text-sm">
                Small amounts are placed precisely. Then we check symmetry.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-white p-6 rounded-xl shadow-md relative"
            >
              <span className="absolute -top-3 -left-3 bg-wine text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                4
              </span>
              <h3 className="font-semibold text-brown text-lg mb-2 mt-2">
                Review and aftercare plan
              </h3>
              <p className="text-taupe text-sm">
                You leave knowing what to expect day by day.
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-brown bg-white p-4 rounded-lg mt-8"
          >
            Dermal filler sessions usually take less than half an hour in many
            cases, and results are seen right away.
          </motion.p>

          {/* Chin filler results: what you see and when */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Chin filler results: what you see and when
              </h3>
              <p className="text-wine font-medium mb-4">
                You will see improvement immediately.
              </p>
              <p className="text-brown mb-4">But you also need to know this:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-taupe">
                  <AlertCircle size={16} className="text-wine shrink-0 mt-1" />
                  <span>
                    mild swelling can make the chin look bigger at first
                  </span>
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <AlertCircle size={16} className="text-wine shrink-0 mt-1" />
                  <span>the final look is clearer after swelling settles</span>
                </li>
                <li className="flex items-start gap-2 text-taupe">
                  <AlertCircle size={16} className="text-wine shrink-0 mt-1" />
                  <span>tiny bruises can happen</span>
                </li>
              </ul>
              <p className="mt-4 text-wine font-medium">
                If you have a big event, treat early. A safe buffer is best.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Downtime and aftercare (simple rules that help)
              </h3>
              <p className="text-brown mb-2">
                Most people return to daily life the same day.
              </p>
              <p className="text-taupe mb-4">
                Still, aftercare matters if you want a clean result and less
                bruising.
              </p>
              <p className="text-brown mb-2">
                A well-known guideline from the American Society of Plastic
                Surgeons includes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe text-sm">
                  <CheckCircle2 size={14} className="text-wine shrink-0 mt-1" />
                  <span>avoid strenuous exercise for about 24 hours</span>
                </li>
                <li className="flex items-start gap-2 text-taupe text-sm">
                  <CheckCircle2 size={14} className="text-wine shrink-0 mt-1" />
                  <span>
                    avoid excessive heat (like sauna) for 24 to 48 hours
                  </span>
                </li>
                <li className="flex items-start gap-2 text-taupe text-sm">
                  <CheckCircle2 size={14} className="text-wine shrink-0 mt-1" />
                  <span>avoid alcohol around that window if possible</span>
                </li>
                <li className="flex items-start gap-2 text-taupe text-sm">
                  <CheckCircle2 size={14} className="text-wine shrink-0 mt-1" />
                  <span>
                    avoid aspirin or NSAIDs around the procedure time if
                    medically appropriate, because they can increase bruising
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-taupe">
                Also avoid pressing your chin or resting it on your hand for
                long periods in the first few days.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* How long does chin filler last? + Pros and Cons */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <h3 className="font-georgia text-2xl text-brown">
                How long does chin filler last?
              </h3>
              <p className="text-taupe">
                Longevity varies by filler type, technique, and your metabolism.
              </p>
              <div className="bg-cream p-6 rounded-xl">
                <p className="text-lg text-brown">
                  A common clinic estimate for chin dermal filler is{" "}
                  <span className="font-bold text-wine">12 to 24 months</span>.
                </p>
                <p className="text-sm text-taupe mt-2">
                  Cleveland Clinic also notes fillers can last months to years
                  depending on the filler and area.
                </p>
              </div>
              <p className="text-rose">
                If you want the result to stay consistent, many people do a
                small maintenance plan rather than waiting until it fully fades.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-4">
              <h3 className="font-georgia text-2xl text-brown">
                Pros and cons of chin filler
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cream p-4 rounded-lg">
                  <h4 className="font-semibold text-wine mb-2">Pros</h4>
                  <ul className="space-y-1 text-sm text-brown">
                    <li>• non-surgical</li>
                    <li>• quick treatment</li>
                    <li>• immediate improvement</li>
                    <li>• can support facial balance strongly</li>
                    <li>• minimal downtime for most people</li>
                  </ul>
                </div>
                <div className="bg-cream p-4 rounded-lg">
                  <h4 className="font-semibold text-wine mb-2">Cons</h4>
                  <ul className="space-y-1 text-sm text-brown">
                    <li>• swelling or bruising can happen</li>
                    <li>• results are not permanent</li>
                    <li>• wrong technique can look sharp or unnatural</li>
                    <li>
                      • rare complications exist, so injector skill matters
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Side effects and risks */}
          <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-2xl">
            <h3 className="font-georgia text-2xl text-brown mb-4">
              Side effects and risks (honest and clear)
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-wine mb-3">
                  Common side effects
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-brown">
                    <span className="w-2 h-2 bg-wine rounded-full" />
                    swelling
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <span className="w-2 h-2 bg-wine rounded-full" />
                    tenderness
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <span className="w-2 h-2 bg-wine rounded-full" />
                    mild redness
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <span className="w-2 h-2 bg-wine rounded-full" />
                    bruising
                  </li>
                </ul>
                <p className="mt-2 text-taupe">These usually settle in days.</p>
              </div>

              <div>
                <h4 className="font-semibold text-wine mb-3">
                  Serious but rare risks
                </h4>
                <p className="text-brown mb-3">
                  All fillers carry rare risks. This is why:
                </p>
                <ul className="space-y-2 text-brown">
                  <li>• product authenticity matters</li>
                  <li>• anatomy knowledge matters</li>
                  <li>• the clinic's emergency readiness matters</li>
                </ul>
                <div className="mt-4 bg-white p-4 rounded-lg border-l-4 border-wine">
                  <p className="text-sm text-brown">
                    If you ever feel severe pain, skin color changes, or unusual
                    symptoms, treat it as urgent and contact a medical
                    professional immediately.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Chin filler cost in Kuala Lumpur, Malaysia */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-cream">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">
              Chin filler cost in Kuala Lumpur, Malaysia
            </h2>
            <p className="text-lg text-taupe max-w-3xl mx-auto">
              Chin filler pricing varies across Malaysia. The biggest factors
              are:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <span className="bg-white px-4 py-2 rounded-full text-brown text-sm">
                filler brand and type
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-brown text-sm">
                how many syringes are needed
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-brown text-sm">
                doctor expertise
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-brown text-sm">
                the level of facial analysis and planning
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Nexus Clinic Kuala Lumpur pricing (Juvederm per 1 cc)
              </h3>
              <p className="text-taupe mb-6">
                Nexus Clinic KL publishes a per-syringe price list for Juvederm
                fillers and includes chin as a common area for multiple
                products. Example promo prices shown include:
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-cream pb-2">
                  <span className="text-brown">Juvederm Ultra Plus XC</span>
                  <span className="font-bold text-wine">
                    RM 2,200{" "}
                    <span className="text-sm font-normal text-taupe">
                      (1 cc)
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-cream pb-2">
                  <span className="text-brown">Juvederm Voluma</span>
                  <span className="font-bold text-wine">
                    RM 2,400{" "}
                    <span className="text-sm font-normal text-taupe">
                      (1 cc)
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-cream pb-2">
                  <span className="text-brown">Juvederm Volux</span>
                  <span className="font-bold text-wine">
                    RM 2,500{" "}
                    <span className="text-sm font-normal text-taupe">
                      (1 cc)
                    </span>
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-cream pb-2">
                  <span className="text-brown">Juvederm Volift</span>
                  <span className="font-bold text-wine">
                    RM 2,500{" "}
                    <span className="text-sm font-normal text-taupe">
                      (1 cc)
                    </span>
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm text-taupe">
                Promos can change, but the key is that Nexus provides
                transparent, per-syringe guidance and product authenticity.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-brown mb-6">
                What you may see in the wider KL market
              </h3>
              <div className="space-y-4">
                <div className="bg-cream p-4 rounded-lg">
                  <p className="text-brown">
                    Some clinics state chin filler can range around{" "}
                    <span className="font-bold text-wine">
                      RM 2,500 to RM 3,000
                    </span>{" "}
                    depending on filler type and syringes required.
                  </p>
                </div>
                <div className="bg-cream p-4 rounded-lg">
                  <p className="text-brown">
                    Some directory listings may show lower starting prices, but
                    those numbers do not always reflect product quality,
                    injector experience, or what is included.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Chin filler vs other options */}
          <motion.div variants={fadeInUp} className="mt-16">
            <h3 className="font-georgia text-2xl md:text-3xl text-brown mb-6 text-center">
              Chin filler vs other options (what to choose and why)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-wine text-lg mb-3">
                  Chin filler vs chin implant
                </h4>
                <p className="text-brown">
                  <span className="font-medium">Filler:</span> non-surgical,
                  reversible (for HA), temporary
                </p>
                <p className="text-brown mt-2">
                  <span className="font-medium">Implant:</span> surgical,
                  longer-lasting, higher downtime and commitment
                </p>
                <p className="mt-4 text-rose">
                  If you want to "try a chin" before committing to surgery,
                  filler is often the first step.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl">
                <h4 className="font-semibold text-wine text-lg mb-3">
                  Chin filler vs double chin fat reduction
                </h4>
                <p className="text-brown">
                  If your main concern is fat under the chin, filler alone will
                  not remove it. But chin filler can still improve profile lines
                  for some people by adding projection.
                </p>
                <p className="mt-4 text-rose">
                  Often, the best plan is combination treatment, based on what
                  is causing the concern.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* People Also Ask (PAA) FAQs */}
      <FAQ data={faqs} />

      {/* Ready to plan your chin filler in Kuala Lumpur? */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-linear-to-r from-wine to-rose text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-3xl md:text-4xl mb-6"
          >
            Ready to plan your chin filler in Kuala Lumpur?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg mb-8 opacity-90">
            If you want a chin that looks sharper but still natural, start with
            a proper assessment. The best results come from the right product,
            the right amount, and the right placement.
          </motion.p>
          <motion.button
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-wine px-8 py-4 rounded-full text-lg font-medium hover:bg-cream transition-colors inline-flex items-center gap-2"
          >
            Start Your Assessment
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default ChinFillerLanding;
