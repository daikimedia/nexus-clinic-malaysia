"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Clock,
  DollarSign,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Zap,
  Heart,
  Sun,
  Droplets,
  Scissors,
  Palette,
  Layers,
  Star,
  ChevronRight,
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

const TattooRemovalLanding = () => {
  const colors = {
    cream: "#F3EFEE",
    wine: "#8C4F58",
    brown: "#4B3A33",
    taupe: "#AC9990",
    rose: "#AB8068",
    light: "#FAF8F7",
    glass: "rgba(255, 255, 255, 0.7)",
  };

  // FAQ
  const faqs = [
    {
      q: "Can tattoos be removed completely?",
      a: "Full removal depends on various factors including ink colour, depth, and your skin's response. While many tattoos can be significantly lightened or removed, complete erasing may not always be possible.",
    },
    {
      q: "How many sessions does tattoo removal take?",
      a: "Multiple sessions are needed because ink is layered and cannot be safely cleared in one visit.",
    },
    {
      q: "Does laser tattoo removal hurt?",
      a: "It can be uncomfortable, but numbing cream or an injection can be used to reduce pain.",
    },
    {
      q: "How does laser tattoo removal work?",
      a: "Laser breaks ink into tiny particles, and your body clears those particles over time between sessions.",
    },
    {
      q: "Can all tattoo colours be removed?",
      a: "Many multicolour tattoos need different wavelengths. A single laser cannot remove all ink colours.",
    },
    {
      q: "Is tattoo removal safe for dark or Asian skin?",
      a: "Mayo Clinic notes a Q-switched Nd:YAG may be used on darker skin to reduce the risk of permanent pigment change. Proper settings and aftercare matter.",
    },
    {
      q: "What are the side effects of laser tattoo removal?",
      a: "Redness and swelling are common. Light or dark spots can occur and often fade within 6-12 months. Blistering can happen.",
    },
    {
      q: "Will tattoo removal leave a scar?",
      a: "Scarring is possible with any removal method, and Mayo Clinic notes scarring is likely after most types of tattoo removal.",
    },
    {
      q: "Can I remove a cosmetic tattoo like eyebrow or lip liner?",
      a: "Yes. The AAD specifically mentions permanent makeup removal as a common reason people seek laser tattoo removal.",
    },
    {
      q: "Can I do tattoo removal while pregnant or breastfeeding?",
      a: "AAD advises women who are pregnant or breastfeeding should not be treated.",
    },
    {
      q: "How do I care for skin after tattoo removal in Malaysia?",
      a: "Follow your clinician's instructions, use ointment as advised, and protect the area from sun for months.",
    },
    {
      q: "How much does tattoo removal cost in Kuala Lumpur?",
      a: "Cost varies widely by size and colour. Public KL sources show anything from around RM600+ per session at some clinics to higher per-session costs for premium pico systems.",
    },
  ];

  // Competitor insights
  const competitorInsights = [
    {
      title: "Directories & Reviews",
      description:
        "Erufu Care is a major visibility player for tattoo removal searches in KL, showing many clinics and patient reviews with price mentions.",
      icon: Star,
    },
    {
      title: "Pico Laser Branding",
      description:
        "Clinic Cleo promotes pico laser tattoo removal and positions it as precise and efficient, with multiple KL branches.",
      icon: Zap,
    },
    {
      title: "Price Anchors",
      description:
        "Some clinics publish starting prices (for example, pico laser tattoo removal 'around RM600 onwards').",
      icon: DollarSign,
    },
  ];

  // Areas we treat
  const treatmentAreas = [
    "Forearm and wrist tattoos",
    "Hand and finger tattoos",
    "Chest and shoulder tattoos",
    "Back tattoos",
    "Ankle and foot tattoos",
    "Cosmetic tattoo removal (brow, eyeliner, lip liner)",
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-tattoo-removal1.webp",
      after: "/images/B&A-skin/B&A-tattoo-removal1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-tattoo-removal2.webp",
      after: "/images/B&A-skin/B&A-tattoo-removal2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-tattoo-removal3.webp",
      after: "/images/B&A-skin/B&A-tattoo-removal3.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-cream font-['Inter',sans-serif]">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-wine filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div variants={fadeInUp} className="mb-6">
            <span
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: colors.glass, color: colors.brown }}
            >
              <Sparkles
                className="w-4 h-4 mr-2"
                style={{ color: colors.wine }}
              />
              Nexus Clinic Kuala Lumpur
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-['Georgia',serif] leading-tight"
            style={{ color: colors.brown }}
          >
            Ready to erase the ink
            <br />
            <span style={{ color: colors.wine }}>
              and move on with confidence?
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: colors.taupe }}
          >
            Whether it's a name, a rushed decision, or an old tattoo that no
            longer feels like you, you deserve a safe way forward.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-lg mb-12 max-w-2xl mx-auto"
            style={{ color: colors.rose }}
          >
            At Nexus Clinic Kuala Lumpur, we focus on smart laser choices,
            careful settings for Malaysian skin tones, and a clear plan you can
            actually follow.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              className="px-8 py-4 rounded-full text-white font-medium transition-all transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: colors.wine }}
            >
              Start Your Consultation
            </button>
            <button
              className="px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105"
              style={{
                backgroundColor: colors.glass,
                color: colors.brown,
                border: `1px solid ${colors.taupe}`,
              }}
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Trust Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.light }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={scaleIn}
              className="p-6 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all"
              style={{ backgroundColor: colors.glass }}
            >
              <Shield
                className="w-10 h-10 mb-4"
                style={{ color: colors.wine }}
              />
              <p className="text-sm" style={{ color: colors.brown }}>
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all"
              style={{ backgroundColor: colors.glass }}
            >
              <Zap className="w-10 h-10 mb-4" style={{ color: colors.wine }} />
              <p className="text-sm" style={{ color: colors.brown }}>
                Medical aesthetic clinic with advanced laser services. Pico
                Discovery Laser technology for tattoo removal.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all"
              style={{ backgroundColor: colors.glass }}
            >
              <CheckCircle2
                className="w-10 h-10 mb-4"
                style={{ color: colors.wine }}
              />
              <p className="text-sm" style={{ color: colors.brown }}>
                Safety matters: Malaysia has formal guidelines for aesthetic
                medical practice and credentialing (LCP) to protect the public.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all"
              style={{ backgroundColor: colors.glass }}
            >
              <Heart
                className="w-10 h-10 mb-4"
                style={{ color: colors.wine }}
              />
              <p className="text-sm" style={{ color: colors.brown }}>
                Medical-led safety culture aligned with Malaysia aesthetic
                practice guideline standards.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What Section with Image */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6 font-['Georgia',serif]"
                style={{ color: colors.brown }}
              >
                What Tattoo Removal{" "}
                <span style={{ color: colors.wine }}>Really Means</span>
              </h2>

              <p className="text-lg mb-6" style={{ color: colors.taupe }}>
                Tattoo ink sits below the top layer of the skin, which is why
                removing it is harder than getting it done.
              </p>

              <p
                className="text-lg mb-4 font-medium"
                style={{ color: colors.brown }}
              >
                Tattoo removal is usually done using one of these methods:
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.wine }}
                  ></div>
                  <span style={{ color: colors.brown }}>
                    Laser removal (most common)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.wine }}
                  ></div>
                  <span style={{ color: colors.brown }}>
                    Surgical removal (small tattoos only)
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colors.wine }}
                  ></div>
                  <span style={{ color: colors.brown }}>
                    Dermabrasion (less common today)
                  </span>
                </li>
              </ul>

              <p className="text-base italic" style={{ color: colors.rose }}>
                In modern clinics, laser tattoo removal has largely replaced
                older methods because it is generally safer and more effective
                when done properly.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/skin/tattoo-removal.webp"
                  alt="Tattoo removal procedure at Nexus Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 -left-6 p-6 rounded-2xl backdrop-blur-md shadow-xl"
                style={{ backgroundColor: colors.glass }}
              >
                <Layers
                  className="w-8 h-8 mb-2"
                  style={{ color: colors.wine }}
                />
                <p
                  className="text-sm font-medium"
                  style={{ color: colors.brown }}
                >
                  Advanced Pico Discovery Laser Technology
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How Laser Works */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.light }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-12 font-['Georgia',serif]"
            style={{ color: colors.brown }}
          >
            How Laser Tattoo Removal Works{" "}
            <span style={{ color: colors.wine }}>(Simple Explanation)</span>
          </motion.h2>

          <motion.div variants={fadeInUp} className="relative">
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="p-6 rounded-2xl backdrop-blur-sm"
                style={{ backgroundColor: colors.glass }}
              >
                <Zap
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: colors.wine }}
                />
                <p className="text-lg" style={{ color: colors.brown }}>
                  Laser light targets the ink
                </p>
              </div>

              <div
                className="p-6 rounded-2xl backdrop-blur-sm"
                style={{ backgroundColor: colors.glass }}
              >
                <Layers
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: colors.wine }}
                />
                <p className="text-lg" style={{ color: colors.brown }}>
                  Breaks ink into tiny particles
                </p>
              </div>

              <div
                className="p-6 rounded-2xl backdrop-blur-sm"
                style={{ backgroundColor: colors.glass }}
              >
                <Droplets
                  className="w-12 h-12 mx-auto mb-4"
                  style={{ color: colors.wine }}
                />
                <p className="text-lg" style={{ color: colors.brown }}>
                  Body clears particles over time
                </p>
              </div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-lg"
              style={{ color: colors.taupe }}
            >
              That's why tattoo removal is not "one and done." Your skin needs
              time to heal, and your body needs time to flush out ink between
              sessions.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Pico vs Q-Switched */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center font-['Georgia',serif]"
            style={{ color: colors.brown }}
          >
            Pico Laser vs Q-Switched Laser{" "}
            <span style={{ color: colors.wine }}>(What's the Difference?)</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              variants={fadeInLeft}
              className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
              style={{ backgroundColor: colors.glass }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: colors.brown }}
              >
                Q-switched lasers
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: colors.taupe }}
              >
                Mayo Clinic notes Q-switched lasers are often a treatment of
                choice for tattoo removal, and a Q-switched Nd:YAG can be used
                on darker skin to reduce the risk of permanent pigment change.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
              style={{ backgroundColor: colors.glass }}
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: colors.wine }}
              >
                Pico lasers
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: colors.taupe }}
              >
                Pico lasers deliver extremely short pulses and are widely used
                for tattoo pigment breakdown and other pigmentation concerns.
                Nexus clinic branding highlights Pico Discovery Laser and
                multi-wavelength capability.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={scaleIn}
            className="max-w-3xl mx-auto text-center p-8 rounded-3xl"
            style={{ backgroundColor: colors.glass }}
          >
            <h4
              className="text-xl font-bold mb-3"
              style={{ color: colors.brown }}
            >
              The honest takeaway
            </h4>
            <p className="text-lg italic" style={{ color: colors.rose }}>
              For many people, both can work. The better result usually comes
              from the right laser for your skin + your ink colours + correct
              settings + good aftercare, not from hype.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Colour Matters */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.light }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6 font-['Georgia',serif]"
                style={{ color: colors.brown }}
              >
                Can All Tattoo{" "}
                <span style={{ color: colors.wine }}>Colours Be Removed?</span>
              </h2>

              <p className="text-xl mb-4" style={{ color: colors.brown }}>
                Colour matters. A lot.
              </p>

              <p
                className="text-base mb-4 leading-relaxed"
                style={{ color: colors.taupe }}
              >
                The AAD explains that some places use only one laser, and
                because a single laser cannot remove all ink colours, people can
                be left with visible ink. Mayo Clinic also notes that
                multicoloured tattoos may require different lasers and
                wavelengths.
              </p>

              <div
                className="p-6 rounded-2xl mt-6"
                style={{ backgroundColor: colors.glass }}
              >
                <p className="text-lg" style={{ color: colors.brown }}>
                  <span className="font-bold">In real life:</span> Black and
                  dark inks usually respond fastest. Light and mixed colours
                  often need more sessions and patience.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="grid grid-cols-2 gap-4"
            >
              <div
                className="p-4 text-center rounded-xl"
                style={{ backgroundColor: colors.wine }}
              >
                <Palette className="w-8 h-8 mx-auto mb-2 text-white" />
                <p className="text-sm text-white">Black/Dark Inks</p>
                <p className="text-xs text-white opacity-80">
                  Fastest response
                </p>
              </div>
              <div
                className="p-4 text-center rounded-xl"
                style={{ backgroundColor: colors.rose }}
              >
                <Palette className="w-8 h-8 mx-auto mb-2 text-white" />
                <p className="text-sm text-white">Light Colours</p>
                <p className="text-xs text-white opacity-80">More sessions</p>
              </div>
              <div
                className="p-4 text-center rounded-xl col-span-2"
                style={{ backgroundColor: colors.taupe }}
              >
                <Palette className="w-8 h-8 mx-auto mb-2 text-white" />
                <p className="text-sm text-white">Multicolour Tattoos</p>
                <p className="text-xs text-white opacity-80">
                  Different wavelengths needed
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Who Is Tattoo Removal For */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center font-['Georgia',serif]"
            style={{ color: colors.brown }}
          >
            Who Is Tattoo Removal{" "}
            <span style={{ color: colors.wine }}>For?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Regret an old tattoo or relationship tattoo",
              "Need a tattoo removed for work or personal reasons",
              "Want to fade a tattoo for a cover-up",
              "Want to remove cosmetic tattoo (brow, eyeliner, lip liner)",
              "Had an allergic reaction or complications from ink (in some cases, removal may become medically important)",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="p-6 rounded-xl flex items-start gap-3 hover:shadow-lg transition-all"
                style={{ backgroundColor: colors.glass }}
              >
                <CheckCircle2
                  className="w-6 h-6 shrink-0 mt-1"
                  style={{ color: colors.wine }}
                />
                <p style={{ color: colors.brown }}>{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="mt-12">
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: colors.brown }}
            >
              Who Should Avoid Laser Tattoo Removal{" "}
              <span style={{ color: colors.rose }}>(Or Pause First)</span>
            </h3>

            <p className="text-base mb-4" style={{ color: colors.taupe }}>
              The AAD notes that most people can safely have laser tattoo
              removal, but there are exceptions:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="p-4 rounded-xl flex items-start gap-2"
                style={{ backgroundColor: colors.glass }}
              >
                <Heart
                  className="w-5 h-5 shrink-0 mt-1"
                  style={{ color: colors.wine }}
                />
                <span style={{ color: colors.brown }}>
                  You need a healthy immune system for it to work well
                </span>
              </div>
              <div
                className="p-4 rounded-xl flex items-start gap-2"
                style={{ backgroundColor: colors.glass }}
              >
                <Heart
                  className="w-5 h-5 shrink-0 mt-1"
                  style={{ color: colors.wine }}
                />
                <span style={{ color: colors.brown }}>
                  People who are pregnant or breastfeeding should not be treated
                </span>
              </div>
            </div>

            <p
              className="text-base mt-4 mb-3 font-medium"
              style={{ color: colors.brown }}
            >
              Also pause and get assessed first if you:
            </p>

            <ul className="space-y-2">
              {[
                "Get keloids easily (raised scars)",
                "Have active infection, eczema flare, or open wound in the area",
                "Recently tanned or have heavy sun exposure (higher pigment risk)",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-2"
                >
                  <AlertCircle
                    className="w-4 h-4"
                    style={{ color: colors.rose }}
                  />
                  <span style={{ color: colors.taupe }}>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Consultation Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.light }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-6 text-center font-['Georgia',serif]"
            style={{ color: colors.brown }}
          >
            What to Expect at Your Tattoo Removal Consultation{" "}
            <span style={{ color: colors.wine }}>in Kuala Lumpur</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-center mb-8 max-w-3xl mx-auto"
            style={{ color: colors.rose }}
          >
            A proper consultation is not a sales talk. It is planning.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeInLeft}>
              <p
                className="text-base mb-6 leading-relaxed"
                style={{ color: colors.taupe }}
              >
                The AAD lists factors that must be considered before removing a
                tattoo, including:
              </p>

              <ul className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Tattoo age",
                  "Depth of ink",
                  "Ink colours",
                  "Location on your body",
                  "Your health and medications",
                  "History of raised scars",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight
                      className="w-4 h-4"
                      style={{ color: colors.wine }}
                    />
                    <span className="text-sm" style={{ color: colors.brown }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <div
                className="p-8 rounded-3xl shadow-xl"
                style={{ backgroundColor: colors.glass }}
              >
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: colors.brown }}
                >
                  At Nexus Clinic KL, you should expect:
                </h3>

                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold"
                      style={{ backgroundColor: colors.wine, color: "white" }}
                    >
                      1
                    </span>
                    <span style={{ color: colors.brown }}>
                      Skin and tattoo assessment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold"
                      style={{ backgroundColor: colors.wine, color: "white" }}
                    >
                      2
                    </span>
                    <span style={{ color: colors.brown }}>
                      A plan for laser type and estimated sessions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold"
                      style={{ backgroundColor: colors.wine, color: "white" }}
                    >
                      3
                    </span>
                    <span style={{ color: colors.brown }}>
                      A clear aftercare guide (this matters as much as the
                      laser)
                    </span>
                  </li>
                </ol>

                <div
                  className="mt-8 p-4 rounded-xl border"
                  style={{ borderColor: colors.wine }}
                >
                  <p className="text-sm" style={{ color: colors.brown }}>
                    <strong>Nexus Clinic address:</strong> LG 10, Lower Ground
                    Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sessions & Pain */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <h2
                className="text-3xl font-bold mb-6 font-['Georgia',serif]"
                style={{ color: colors.brown }}
              >
                How Many Sessions{" "}
                <span style={{ color: colors.wine }}>Will I Need?</span>
              </h2>

              <p
                className="text-base mb-4 leading-relaxed"
                style={{ color: colors.taupe }}
              >
                This is the question everyone asks. The AAD explains you need
                multiple sessions because tattoo ink is layered, and a laser
                cannot safely break down all layers in one session. Mayo Clinic
                also notes repeated sessions are usually needed to lighten a
                tattoo, and full erasing may not be possible.
              </p>

              <p
                className="text-base mb-4 font-medium"
                style={{ color: colors.brown }}
              >
                In general, more sessions are needed when:
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "The tattoo is professional (more ink, deeper ink)",
                  "The tattoo is newer (ink is denser)",
                  "The tattoo has multiple colours",
                  "The tattoo is on an area with lower circulation",
                  "You smoke or have slower healing (your clinician will discuss)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Clock
                      className="w-5 h-5 shrink-0 mt-1"
                      style={{ color: colors.wine }}
                    />
                    <span className="text-sm" style={{ color: colors.taupe }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-sm italic" style={{ color: colors.rose }}>
                If you only want a fade for cover-up, you may need fewer
                sessions.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight}>
              <h2
                className="text-3xl font-bold mb-6 font-['Georgia',serif]"
                style={{ color: colors.brown }}
              >
                Does Tattoo Removal{" "}
                <span style={{ color: colors.wine }}>Hurt?</span>
              </h2>

              <p className="text-xl mb-4" style={{ color: colors.brown }}>
                It can be uncomfortable.
              </p>

              <p
                className="text-base mb-6 leading-relaxed"
                style={{ color: colors.taupe }}
              >
                The AAD says it can feel painful, and a dermatologist can use
                numbing cream or an injection to reduce pain. Many people
                describe it like quick hot snaps. The good news is the session
                is usually fast, especially for small tattoos.
              </p>

              <div
                className="p-6 rounded-2xl mt-6"
                style={{ backgroundColor: colors.glass }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: colors.brown }}
                >
                  Downtime and Healing
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.taupe }}
                >
                  Most people can go back to normal routine quickly, but your
                  skin will look and feel "treated."
                </p>
                <p
                  className="text-sm mt-3 leading-relaxed"
                  style={{ color: colors.taupe }}
                >
                  After laser tattoo removal, the AAD notes you may see redness,
                  swelling, and a little blistering. Mayo Clinic also notes
                  swelling and possibly blistering or bleeding can happen after
                  laser surgery, and antibacterial ointment is often used to
                  support healing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Aftercare Malaysia */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.light }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-6 text-center font-['Georgia',serif]"
            style={{ color: colors.brown }}
          >
            Aftercare in Malaysia{" "}
            <span style={{ color: colors.wine }}>
              (Very Important Because of Sun)
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-8"
            style={{ color: colors.rose }}
          >
            Kuala Lumpur sun and heat can ruin your results if you do not
            protect your skin.
          </motion.p>

          <motion.div
            variants={scaleIn}
            className="p-8 rounded-3xl shadow-xl mb-8"
            style={{ backgroundColor: colors.glass }}
          >
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: colors.brown }}
            >
              AAD aftercare includes:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 shrink-0 mt-1"
                  style={{ color: colors.wine }}
                />
                <span style={{ color: colors.brown }}>
                  Follow your clinician's instructions for washing and ointment
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 shrink-0 mt-1"
                  style={{ color: colors.wine }}
                />
                <span style={{ color: colors.brown }}>
                  Protect treated skin from the sun for 3 months, ideally with
                  clothing that blocks light completely
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={scaleIn}
            className="p-8 rounded-3xl shadow-xl"
            style={{ backgroundColor: colors.glass }}
          >
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: colors.brown }}
            >
              Simple rules that help most people:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <Sun
                  className="w-5 h-5 shrink-0"
                  style={{ color: colors.wine }}
                />
                <span className="text-sm" style={{ color: colors.taupe }}>
                  Keep the area clean and dry at first
                </span>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle
                  className="w-5 h-5 shrink-0"
                  style={{ color: colors.wine }}
                />
                <span className="text-sm" style={{ color: colors.taupe }}>
                  Do not pick scabs or blisters
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Droplets
                  className="w-5 h-5 shrink-0"
                  style={{ color: colors.wine }}
                />
                <span className="text-sm" style={{ color: colors.taupe }}>
                  Avoid swimming pools, saunas, and heavy sweating until cleared
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Sun
                  className="w-5 h-5 shrink-0"
                  style={{ color: colors.wine }}
                />
                <span className="text-sm" style={{ color: colors.taupe }}>
                  Cover the area from sun if you are outdoors
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Risks Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-6 text-center font-['Georgia',serif]"
            style={{ color: colors.brown }}
          >
            Risks and Side Effects{" "}
            <span style={{ color: colors.wine }}>(Honest List)</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-center mb-8 max-w-3xl mx-auto"
            style={{ color: colors.rose }}
          >
            Let's be clear. Tattoo removal is a medical procedure. It has risks.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="p-6 rounded-2xl shadow-lg"
              style={{ backgroundColor: colors.glass }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: colors.brown }}
              >
                Laser tattoo removal side effects
              </h3>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: colors.taupe }}
              >
                AAD notes light or dark spots can develop, and they usually fade
                within 6 to 12 months. It also says scarring, texture changes,
                burns and wounds are more common when the person performing
                treatment lacks medical training.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="p-6 rounded-2xl shadow-lg"
              style={{ backgroundColor: colors.glass }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: colors.brown }}
              >
                Overall tattoo removal risks
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.taupe }}
              >
                Mayo Clinic states scarring is likely after most types of tattoo
                removal, and infection or skin discoloration is also possible.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={scaleIn}
            className="mt-8 p-6 rounded-2xl text-center max-w-2xl mx-auto"
            style={{ backgroundColor: colors.wine, color: "white" }}
          >
            <p className="text-lg font-medium">
              This is why clinic choice matters. So does aftercare.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.light }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-6 text-center font-['Georgia',serif]"
            style={{ color: colors.brown }}
          >
            Tattoo Removal Cost{" "}
            <span style={{ color: colors.wine }}>
              in Malaysia (Kuala Lumpur)
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-8"
            style={{ color: colors.taupe }}
          >
            Price depends on: Tattoo size, Colours used, Depth and age, Device
            type (pico vs Q-switched), Number of sessions needed
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              variants={scaleIn}
              className="p-6 rounded-2xl text-center shadow-lg"
              style={{ backgroundColor: colors.glass }}
            >
              <DollarSign
                className="w-10 h-10 mx-auto mb-3"
                style={{ color: colors.wine }}
              />
              <p className="text-sm" style={{ color: colors.brown }}>
                Premier Clinic: pico laser from RM600 onwards
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 rounded-2xl text-center shadow-lg"
              style={{ backgroundColor: colors.glass }}
            >
              <DollarSign
                className="w-10 h-10 mx-auto mb-3"
                style={{ color: colors.wine }}
              />
              <p className="text-sm" style={{ color: colors.brown }}>
                Dr Jane Clinic: RM1,000-RM2,500 per session
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 rounded-2xl text-center shadow-lg"
              style={{ backgroundColor: colors.glass }}
            >
              <DollarSign
                className="w-10 h-10 mx-auto mb-3"
                style={{ color: colors.wine }}
              />
              <p className="text-sm" style={{ color: colors.brown }}>
                Erufu Care: RM600-680 reported for certain visits
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="max-w-2xl mx-auto p-6 rounded-2xl"
            style={{ backgroundColor: colors.glass }}
          >
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: colors.brown }}
            >
              A fair way to budget is:
            </h3>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-sm"
                  style={{ backgroundColor: colors.wine, color: "white" }}
                >
                  1
                </span>
                <span style={{ color: colors.brown }}>Cost per session</span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-sm"
                  style={{ backgroundColor: colors.wine, color: "white" }}
                >
                  2
                </span>
                <span style={{ color: colors.brown }}>
                  Expected number of sessions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-sm"
                  style={{ backgroundColor: colors.wine, color: "white" }}
                >
                  3
                </span>
                <span style={{ color: colors.brown }}>
                  Any add-ons (numbing, aftercare products, follow-up reviews)
                </span>
              </li>
            </ol>
          </motion.div>
        </div>
      </motion.section>

      {/* Options Compared */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center font-['Georgia',serif]"
            style={{ color: colors.brown }}
          >
            Tattoo Removal{" "}
            <span style={{ color: colors.wine }}>Options Compared</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={scaleIn}
              className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: colors.glass }}
            >
              <Zap className="w-10 h-10 mb-4" style={{ color: colors.wine }} />
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: colors.brown }}
              >
                Laser removal
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.taupe }}
              >
                Most common modern option. Breaks ink into particles over time.
                Multiple sessions.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: colors.glass }}
            >
              <Scissors
                className="w-10 h-10 mb-4"
                style={{ color: colors.wine }}
              />
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: colors.brown }}
              >
                Surgical removal
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.taupe }}
              >
                Can work for very small tattoos, but it leaves a scar and is not
                practical for large pieces.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: colors.glass }}
            >
              <Layers
                className="w-10 h-10 mb-4"
                style={{ color: colors.wine }}
              />
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: colors.brown }}
              >
                Dermabrasion
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.taupe }}
              >
                Mayo Clinic notes results are less predictable and it is less
                effective than laser or combined approaches.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: colors.glass }}
            >
              <XCircle
                className="w-10 h-10 mb-4"
                style={{ color: colors.wine }}
              />
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: colors.brown }}
              >
                Creams and DIY
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.taupe }}
              >
                The AAD warns there is no evidence these products remove
                tattoos, and they can contain strong acids that burn or scar.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Areas We Treat */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.light }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-12 text-center font-['Georgia',serif]"
            style={{ color: colors.brown }}
          >
            Areas We <span style={{ color: colors.wine }}>Commonly Treat</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {treatmentAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="p-4 rounded-xl flex items-center gap-3 hover:shadow-md transition-all"
                style={{ backgroundColor: colors.glass }}
              >
                <CheckCircle2
                  className="w-5 h-5 shrink-0"
                  style={{ color: colors.wine }}
                />
                <span style={{ color: colors.brown }}>{area}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-center italic"
            style={{ color: colors.rose }}
          >
            The AAD also mentions permanent makeup removal as a common reason
            people seek laser tattoo removal.
          </motion.p>
        </div>
      </motion.section>

      {/* Competitor Snapshot */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-6 text-center font-['Georgia',serif]"
            style={{ color: colors.brown }}
          >
            Competitor Snapshot:{" "}
            <span style={{ color: colors.wine }}>
              What Ranking Pages Focus On
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {competitorInsights.map((insight, index) => {
              const IconComponent = insight.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  style={{ backgroundColor: colors.glass }}
                >
                  <IconComponent
                    className="w-10 h-10 mb-4"
                    style={{ color: colors.wine }}
                  />
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: colors.brown }}
                  >
                    {insight.title}
                  </h3>
                  <p className="text-sm" style={{ color: colors.taupe }}>
                    {insight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeInUp}
            className="max-w-3xl mx-auto p-8 rounded-3xl shadow-xl"
            style={{ backgroundColor: colors.glass }}
          >
            <h3
              className="text-2xl font-bold mb-4 text-center"
              style={{ color: colors.brown }}
            >
              How Nexus Clinic KL can stand out
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 shrink-0 mt-1"
                  style={{ color: colors.wine }}
                />
                <span style={{ color: colors.brown }}>
                  Clear education about ink colours, session planning, and sun
                  aftercare
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 shrink-0 mt-1"
                  style={{ color: colors.wine }}
                />
                <span style={{ color: colors.brown }}>
                  Device credibility and multi-wavelength capability (Pico
                  Discovery positioning)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2
                  className="w-5 h-5 shrink-0 mt-1"
                  style={{ color: colors.wine }}
                />
                <span style={{ color: colors.brown }}>
                  Medical-led safety culture aligned with Malaysia aesthetic
                  practice guideline standards
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FAQ data={faqs} />

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.wine }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-bold mb-6 font-['Georgia',serif] text-white"
          >
            Ready to Start Your Journey?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg mb-8 text-white opacity-90"
          >
            If you're searching for tattoo removal in Malaysia or laser tattoo
            removal in Kuala Lumpur, start with a consult that tells you the
            truth: how many sessions, what results look like, and how to protect
            your skin.
          </motion.p>

          <motion.div
            variants={scaleIn}
            className="bg-white p-8 rounded-3xl shadow-2xl inline-block"
          >
            <p
              className="text-xl font-bold mb-2"
              style={{ color: colors.brown }}
            >
              Nexus Clinic Kuala Lumpur
            </p>
            <p className="mb-2" style={{ color: colors.taupe }}>
              LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala
              Lumpur
            </p>
            <p className="text-lg" style={{ color: colors.wine }}>
              Call/WhatsApp: 016-7025699 / 03-21635699
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default TattooRemovalLanding;
