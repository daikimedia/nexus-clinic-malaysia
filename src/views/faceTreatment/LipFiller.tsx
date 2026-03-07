"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Sparkles,
  Shield,
  Heart,
  CheckCircle2,
  AlertCircle,
  Syringe,
  Award,
  FileText,
  Users,
  XCircle,
  Clock,
  Star,
  ChevronRight,
  DollarSign,
  Building2,
  Search,
} from "lucide-react";

import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const LipFillerLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "lipFiller");

  const faqs = [
    {
      q: "How long do lip fillers last?",
      a: "Most lip fillers last about 6 to 12 months, depending on filler type, metabolism, and how much is injected.",
    },
    {
      q: "Do lip fillers hurt?",
      a: "Most people describe it as uncomfortable but manageable. Numbing methods and lidocaine-containing fillers help reduce pain.",
    },
    {
      q: "How long does lip filler swelling last?",
      a: "Swelling often improves within 24 to 48 hours, but it may take up to a week to settle fully.",
    },
    {
      q: "When will I see the final lip filler result?",
      a: "You see changes immediately, but your true “settled” look is clearer after swelling reduces. For big events, it is smart to treat at least two weeks early.",
    },
    {
      q: "How much is lip filler in Malaysia?",
      a: "Ranges vary. Many clinics quote around RM 1,000 to RM 2,500 per syringe, while others cite RM 1,200 to RM 3,500+ per 1 ml depending on brand and expertise.",
    },
    {
      q: "How much does Juvederm lip filler cost in Malaysia?",
      a: "Some clinics list ranges like RM 2,200 to RM 2,800 per syringe, and some product guides show certain lip-focused options around RM 1,500 to RM 2,200 depending on formulation.",
    },
    {
      q: "Can lip filler be dissolved?",
      a: "Most HA fillers can be dissolved using an enzyme called hyaluronidase when medically indicated.",
    },
    {
      q: "Will lip filler make me look fake?",
      a: "Not if the plan is conservative and suited to your lips. A natural look usually comes from small, well-placed amounts and not chasing extreme volume.",
    },
    {
      q: "What should I avoid after lip fillers?",
      a: "Avoid eating until numbness wears off so you do not bite your lips. Some guidance recommends avoiding straws and smoking for at least 24 hours.",
    },
    {
      q: "Can I do lip filler before a wedding or photoshoot?",
      a: "Yes, but plan ahead. Cleveland Clinic suggests booking at least two weeks before a big event.",
    },
    {
      q: "Is bruising normal after lip filler?",
      a: "Yes, bruising can happen. It often settles over several days.",
    },
    {
      q: "How do I know if I need 0.5 ml or 1 ml?",
      a: "If you want subtle change or you are new to filler, 0.5 ml is often a gentle start. If you want more visible volume, 1 ml may be used. Your doctor should assess your lip structure first.",
    },
    {
      q: "Can men get lip filler?",
      a: "Yes. The plan is usually different, focusing on hydration, symmetry, and subtle balance rather than visible plumping.",
    },
    {
      q: "What is the difference between lip augmentation and lip filler?",
      a: "Lip filler is a common non-surgical method of lip augmentation. Lip augmentation can also include surgery or implants, but fillers are the most popular modern option.",
    },
    {
      q: "How do I choose the best lip filler clinic in Kuala Lumpur?",
      a: "Prioritize doctor-performed treatment, clear product discussion, safety standards, and natural planning. Directory listings can help compare options, but your consultation matters most",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-light">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-wine rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-cream rounded-full">
                <Shield className="w-4 h-4 text-wine mr-2" />
                <span className="text-sm text-brown">
                  Nexus Clinic Kuala Lumpur
                </span>
              </div>

              <h2 className="font-georgia text-5xl md:text-5xl lg:text-6xl leading-tight text-brown">
                Lip Filler in Kuala Lumpur That Still Looks Like{" "}
                <span className="text-wine">Your Lips</span>
              </h2>

              <p className="text-lg text-taupe max-w-lg font-inter">
                Soft volume. Better shape. Cleaner borders. No "duck lips" and
                no heavy, obvious filler look.
              </p>

              {/* Trust at a glance */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4 pt-6"
              >
                {[
                  { icon: Award, text: "Doctor-performed in clinical setting" },
                  {
                    icon: Syringe,
                    text: "High-quality, approved hyaluronic acid fillers",
                  },
                  {
                    icon: Heart,
                    text: "Natural planning based on your lip shape and face balance",
                  },
                  { icon: Shield, text: "Clear aftercare & safety protocols" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <item.icon className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                    <span className="text-sm text-brown">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={scaleIn} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Natural lip filler result at Nexus Clinic KL"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/20 to-transparent" />
              </div>

              {/* Glass card */}
              <motion.div
                variants={fadeInUp}
                className="absolute -bottom-6 -left-6 bg-light/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50"
              >
                <p className="text-brown font-medium">Trusted by clients in</p>
                <p className="text-xl font-bold text-wine">
                  Kuala Lumpur, Malaysia
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Quick Competitor Review Section */}
      {/* Quick Competitor Review Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            {/* Header */}
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-wine font-medium mb-2 block">
                Market Analysis
              </span>
              <h2 className="font-georgia text-4xl text-brown mb-4">
                Quick competitor review
              </h2>
              <p className="text-lg text-taupe">
                What ranks in Google searches and what they miss
              </p>
            </motion.div>

            {/* What Google Shows */}
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-wine mb-6 flex items-center">
                <Search className="w-6 h-6 mr-2" />
                When people search "lip filler Kuala Lumpur" or "lip
                augmentation Malaysia", Google often shows:
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Directory Pages */}
                <div className="bg-cream p-6 rounded-xl">
                  <div className="w-12 h-12 bg-rose rounded-full flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-brown mb-3">
                    Large directory pages
                  </h4>
                  <p className="text-sm text-taupe">
                    Like Erufu Care that list many clinics and capture
                    high-intent traffic (they even show KL location coverage and
                    clinic lists).
                  </p>
                </div>

                {/* Clinic Blog Pages */}
                <div className="bg-cream p-6 rounded-xl">
                  <div className="w-12 h-12 bg-rose rounded-full flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-brown mb-3">
                    Clinic blog pages
                  </h4>
                  <p className="text-sm text-taupe">
                    Explaining what lip fillers are, side effects, and "what to
                    expect" (for example, Clique Clinic's detailed guide).
                  </p>
                </div>

                {/* Price-focused Pages */}
                <div className="bg-cream p-6 rounded-xl">
                  <div className="w-12 h-12 bg-rose rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-brown mb-3">
                    Price-focused pages
                  </h4>
                  <p className="text-sm text-taupe">
                    That highlight a wide range per syringe (for example, RM
                    1,000 to RM 2,500 per syringe is commonly stated).
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What They Miss - Nexus Advantage */}
            <motion.div variants={fadeInUp} className="relative">
              {/* Background decorative element */}
              <div className="absolute inset-0 bg-wine rounded-3xl transform rotate-1 opacity-10" />

              <div className="relative bg-wine p-10 rounded-3xl text-white shadow-xl">
                <h3 className="text-3xl font-bold mb-8 flex items-center">
                  <Award className="w-8 h-8 mr-3" />
                  What many competitor pages still do not do well enough
                  <span className="ml-3 text-sm bg-white/20 px-4 py-1 rounded-full">
                    Your advantage for Nexus Clinic KL
                  </span>
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Gap 1: First Timer Fear */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-xl font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          First timer fear
                        </h4>
                        <p className="text-white/90">
                          They talk about filler, but not about the "first timer
                          fear." People worry about looking fake, swelling,
                          migration, and regret. Many pages mention it lightly,
                          but do not guide confidently.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gap 2: Price Explanation */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-xl font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Why your quote changes
                        </h4>
                        <p className="text-white/90">
                          They give price ranges, but do not explain "why your
                          quote changes." Some do list ranges, but most do not
                          explain how many ml you may need for different goals.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gap 3: Lip Design */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-xl font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          Lip design explained simply
                        </h4>
                        <p className="text-white/90">
                          They do not explain lip design in a simple way.
                          Patients want to know: natural vs defined, hydration
                          vs volume, cupid's bow, side balance, and how to avoid
                          stiffness.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Gap 4: PAA Questions */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-xl font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">
                          People Also Ask questions
                        </h4>
                        <p className="text-white/90">
                          They miss the most searched PAA questions in a clean,
                          direct format. That is where featured snippets and AI
                          answers often pull content from.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Closing Statement */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-10 pt-6 border-t border-white/20 text-center"
                >
                  <p className="text-xl italic">
                    "This page is written to cover those gaps, in easy wording,
                    for Kuala Lumpur and Malaysia."
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Visual Summary Card */}
            <motion.div
              variants={scaleIn}
              className="grid md:grid-cols-2 gap-6 mt-8"
            >
              {/* Google's Current State */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold text-brown mb-4 flex items-center">
                  <div className="w-2 h-2 bg-rose rounded-full mr-2" />
                  Current Google Search Results
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-rose shrink-0 mt-1" />
                    <span className="text-sm text-taupe">
                      Directory pages (Erufu Care) with clinic lists
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-rose shrink-0 mt-1" />
                    <span className="text-sm text-taupe">
                      Blog pages explaining basics (Clique Clinic)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ChevronRight className="w-4 h-4 text-rose shrink-0 mt-1" />
                    <span className="text-sm text-taupe">
                      Price-focused: RM 1,000 - RM 2,500 per syringe
                    </span>
                  </li>
                </ul>
              </div>

              {/* Nexus Advantage Summary */}
              <div className="bg-wine p-6 rounded-xl shadow-lg text-white">
                <h4 className="text-lg font-bold mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Nexus Clinic KL Advantage
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-1" />
                    <span className="text-sm">
                      First-timer fear addressed confidently
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-1" />
                    <span className="text-sm">
                      Clear explanation of ml needed for different goals
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-1" />
                    <span className="text-sm">
                      Simple lip design explanation (cupid's bow, balance)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-1" />
                    <span className="text-sm">
                      Complete PAA questions in clean format
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* What is lip filler Section with Image */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                Lip Filler Face Treatment in Malaysia
              </h2>
              <p className="text-xl text-taupe">
                Lip filler is popular in Kuala Lumpur for one main reason. It
                can make a big difference with a small change.
              </p>
              <p className="text-brown">
                Some people want fuller lips. Others want better shape. Many
                just want their lips to look smoother and less tired.
              </p>
              <p className="text-brown font-medium">
                At Nexus Clinic Kuala Lumpur, lip filler is planned around your
                natural lip structure. We focus on balance, softness, and a
                result that still feels like you.
              </p>

              <div className="bg-cream p-6 rounded-xl">
                <h3 className="text-xl font-bold text-wine mb-4">
                  What is lip filler, in simple words?
                </h3>
                <p className="text-brown mb-4">
                  Lip filler is a gel injection placed into specific parts of
                  the lips to improve:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "volume",
                    "shape",
                    "symmetry",
                    "hydration",
                    "smoothness",
                    "lip border",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Droplets className="w-4 h-4 text-rose" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-taupe">
                  Most lip fillers today are made of hyaluronic acid (HA). HA
                  already exists in the body. It holds water, so lips can look
                  softer and more hydrated after treatment.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/skin/acne-treatment.webp"
                  alt="Lip filler treatment at Nexus Clinic Kuala Lumpur"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/40 to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                variants={scaleIn}
                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
              >
                <p className="text-brown font-semibold">Hyaluronic Acid</p>
                <p className="text-sm text-taupe">Naturally exists in body</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Why People Get Lip Filler */}
      <section className="py-20 px-4 bg-light">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-georgia text-4xl text-brown mb-6">
                Why people in Kuala Lumpur get lip filler
              </h2>
              <p className="text-taupe">
                People rarely say, "I want big lips." They usually say things
                like:
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6"
            >
              {[
                "My upper lip disappears when I smile",
                "My lips look dry even with balm",
                "My lips are uneven",
                "I want a nicer shape, not a dramatic change",
                "I want my lipstick to sit better",
              ].map((quote, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white p-6 rounded-xl shadow-lg border border-cream"
                >
                  <div className="text-wine text-3xl mb-2">"</div>
                  <p className="text-brown italic">{quote}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p variants={fadeInUp} className="text-center text-brown">
              Lip filler can help with all of these, when it is done carefully.
            </motion.p>
          </motion.div>
        </div>
      </section>
      {/* Results Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h2 className="font-georgia text-4xl text-brown mb-4">
                Lip filler results you can expect
              </h2>
              <p className="text-taupe">
                Most results are visible right away. Then the lips settle.
              </p>
              <p className="text-sm text-wine mt-2">
                Swelling is normal at the start. According to Cleveland Clinic,
                swelling often improves in 24 to 48 hours, but it can take up to
                a week for swelling to fully settle. They also suggest booking
                at least two weeks before a big event. That is why we always ask
                about your schedule. If you have a wedding, shoot, or
                engagement, timing matters.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Hydrated lips",
                  desc: "This is for people who want softness and smooth texture more than volume.",
                  icon: Droplets,
                },
                {
                  title: "Defined borders",
                  desc: "This is for people who want a cleaner outline, a clearer cupid’s bow, and better lipstick edges.",
                  icon: Sparkles,
                },
                {
                  title: "Soft volume",
                  desc: "This is a gentle plump look that still fits your face.",
                  icon: Heart,
                },
                {
                  title: "Shape correction",
                  desc: "This is for asymmetry, uneven corners, or an upper lip that disappears when smiling.",
                  icon: CheckCircle2,
                },
              ].map((result, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-cream p-6 rounded-xl text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-rose/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose group-hover:text-white transition-colors">
                    <result.icon className="w-8 h-8 text-rose group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brown mb-2">
                    {result.title}
                  </h3>
                  <p className="text-sm text-taupe">{result.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Who is lip filler for */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                Who is lip filler for?
              </h2>
              <div className="space-y-4">
                {[
                  "have naturally thin lips",
                  "lost lip volume with age",
                  "want more balance between top and bottom lip",
                  "want better definition without surgery",
                  "want a treatment with minimal downtime",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-wine" />
                    <span className="text-brown">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-taupe">
                Many clinics describe lip filler as a quick, minimally invasive
                treatment with a short recovery time.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-wine p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-6">
                Who should postpone lip filler
              </h3>
              <div className="space-y-4">
                {[
                  "are pregnant or breastfeeding",
                  "have an active cold sore or skin infection",
                  "have a major dental infection or planned surgery",
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm opacity-90">
                A doctor consultation is the right place to confirm suitability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Appointment Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center"
            >
              What happens during a lip filler appointment at Nexus Clinic KL?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "Step 1",
                  title: "Lip assessment and goal setting",
                  desc: "We look at: your natural lip shape how your lips move when you talk and smile your face proportions what looks “off” to you in photos We also discuss what you do not want. That matters.",
                },
                {
                  step: "Step 2",
                  title: "Comfort and numbing",
                  desc: "Most HA fillers contain lidocaine. Many clinics also use numbing methods to reduce discomfort.",
                },
                {
                  step: "Step 3",
                  title: "Injection placement",
                  desc: "The goal is not to “fill everywhere.” It is to place small amounts where they create the best shape.",
                },
                {
                  step: "Step 4",
                  title: "Review and aftercare plan",
                  desc: "You leave with clear aftercare and what is normal versus what needs a call.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative p-6 bg-white rounded-xl shadow-lg border border-cream"
                >
                  <div className="absolute -top-3 left-6 bg-wine text-white px-4 py-1 rounded-full text-sm">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-brown mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Longevity & Timeline Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-16"
          >
            {/* How Long Does Lip Filler Last */}
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-georgia text-4xl text-brown mb-6">
                How long does lip filler last?
              </h2>
              <p className="text-xl text-taupe mb-4">
                A common expectation is 6 to 12 months, depending on your
                metabolism, filler type, and how much product is used.
              </p>
              <p className="text-brown">
                Some people do a small top-up earlier, especially if they want a
                consistent look.
              </p>
            </motion.div>

            {/* Swelling and Bruising Timeline */}
            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="bg-cream p-8 rounded-2xl">
                <h3 className="font-georgia text-2xl text-wine mb-4">
                  Lip filler swelling and bruising timeline
                </h3>
                <p className="text-brown mb-4">
                  Swelling is part of the process. It can look dramatic on day
                  one.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                    <p className="text-brown">
                      <span className="font-semibold">
                        Cleveland Clinic notes
                      </span>{" "}
                      swelling often improves within 24 to 48 hours, but can
                      take up to a week.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                    <p className="text-brown">
                      Bruising can happen too, especially if you bruise easily.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl mt-4">
                    <p className="text-wine font-medium">
                      If you want to look your best for an event, plan early.{" "}
                      <span className="font-bold">
                        Two weeks is a safe buffer.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Aftercare Section */}
              <div className="bg-wine p-8 rounded-2xl text-white">
                <h3 className="font-georgia text-2xl mb-4">
                  Lip filler aftercare (easy and realistic)
                </h3>
                <p className="mb-4 opacity-90">
                  After lip filler, your lips may feel tender and tight at
                  first.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>
                      Cleveland Clinic recommends waiting to eat until numbness
                      wears off so you do not accidentally bite your lips.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>Avoid straws or smoking for at least 24 hours.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>
                      Avoid heavy pressure, intense exercise, and alcohol if you
                      bruise easily.
                    </p>
                  </div>
                  <p className="mt-4 text-sm italic">
                    Always follow your injector's instructions first.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Pros and Cons Section */}
      <section className="py-20 px-4 bg-light">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center"
            >
              Pros and Cons of Lip Filler
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pros */}
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-2xl shadow-lg border border-cream"
              >
                <h3 className="text-2xl font-bold text-wine mb-6 flex items-center">
                  <Heart className="w-6 h-6 mr-2" />
                  Pros
                </h3>
                <div className="space-y-4">
                  {[
                    "quick treatment",
                    "immediate improvement",
                    "customizable results",
                    "minimal downtime for most people",
                    "HA fillers can be dissolved if medically indicated (reassuring for many patients)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Cons */}
              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-2xl shadow-lg border border-cream"
              >
                <h3 className="text-2xl font-bold text-wine mb-6 flex items-center">
                  <XCircle className="w-6 h-6 mr-2" />
                  Cons
                </h3>
                <div className="space-y-4">
                  {[
                    "swelling and bruising can happen",
                    "results are not permanent",
                    "poor technique can look unnatural",
                    "rare complications exist, so clinic choice matters",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <XCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Side Effects and Risks Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center"
            >
              Side effects and risks (honest and clear)
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Common Side Effects */}
              <motion.div
                variants={fadeInLeft}
                className="bg-cream p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-wine mb-6">
                  Common side effects
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {["swelling", "redness", "tenderness", "bruising"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-lg text-center"
                      >
                        <span className="text-brown font-medium">{item}</span>
                      </div>
                    ),
                  )}
                </div>
                <p className="text-brown">
                  These usually settle as healing progresses.
                </p>
              </motion.div>

              {/* Rare but Serious Risks */}
              <motion.div
                variants={fadeInRight}
                className="bg-wine p-8 rounded-2xl text-white"
              >
                <h3 className="text-2xl font-bold mb-6">
                  Rare but serious risks
                </h3>
                <p className="mb-4">
                  All injectable fillers carry rare risks, including vascular
                  issues. That is why doctor skill, anatomy knowledge, and safe
                  clinical standards are important.
                </p>
                <div className="bg-white/20 p-4 rounded-xl">
                  <p className="text-sm">
                    <span className="font-bold">
                      ⚠️ If you ever have severe pain, unusual skin color
                      changes, or vision symptoms, seek urgent medical care.
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Cost Section */}
      <section className="py-20 px-4 bg-cream">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-georgia text-4xl text-brown mb-6">
                Lip filler cost in Kuala Lumpur, Malaysia
              </h2>
              <p className="text-taupe mb-4">Prices vary by:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  "filler brand",
                  "amount used (0.5 ml vs 1 ml)",
                  "complexity of shaping",
                  "injector expertise",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg text-sm text-brown"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-3 gap-6"
            >
              {/* Price Range 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-wine mb-4">
                  General Range
                </h3>
                <p className="text-3xl font-bold text-brown mb-2">
                  RM 1,000 - 2,500
                </p>
                <p className="text-sm text-taupe">per syringe</p>
              </div>

              {/* Price Range 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-wine mb-4">
                  Premium Range
                </h3>
                <p className="text-3xl font-bold text-brown mb-2">
                  RM 1,200 - 3,500+
                </p>
                <p className="text-sm text-taupe">per 1 ml syringe</p>
              </div>

              {/* Juvederm Range */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-wine mb-4">Juvederm</h3>
                <p className="text-lg font-bold text-brown">RM 1,500 - 2,200</p>
                <p className="text-sm text-taupe mb-2">
                  subtle lip filler types
                </p>
                <p className="text-lg font-bold text-brown">RM 2,200 - 2,800</p>
                <p className="text-sm text-taupe">per syringe average</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine p-6 rounded-xl text-white text-center max-w-3xl mx-auto"
            >
              <p className="text-lg">
                At Nexus Clinic Kuala Lumpur, the right price is the one based
                on your lip goals and what you truly need, not a random package.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* How Much Do I Need Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h2 className="font-georgia text-4xl text-brown mb-4">
                How much lip filler do I need?
              </h2>
              <p className="text-taupe mb-8">
                This is one of the biggest questions in Kuala Lumpur.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* 0.5 ml */}
              <motion.div
                variants={fadeInLeft}
                className="bg-cream p-8 rounded-2xl text-center"
              >
                <div className="w-20 h-20 bg-rose rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">0.5</span>
                </div>
                <h3 className="text-xl font-bold text-brown mb-3">0.5 ml</h3>
                <p className="text-taupe">
                  Great for first-timers who want hydration or light definition
                </p>
              </motion.div>

              {/* 1 ml */}
              <motion.div
                variants={fadeInUp}
                className="bg-wine p-8 rounded-2xl text-white text-center"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">1 ml</h3>
                <p className="opacity-90">
                  More visible volume and shape changes
                </p>
              </motion.div>

              {/* More than 1 ml */}
              <motion.div
                variants={fadeInRight}
                className="bg-cream p-8 rounded-2xl text-center"
              >
                <div className="w-20 h-20 bg-rose rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1+</span>
                </div>
                <h3 className="text-xl font-bold text-brown mb-3">
                  More than 1 ml
                </h3>
                <p className="text-taupe">
                  Usually better done gradually across sessions to avoid a heavy
                  look
                </p>
              </motion.div>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-center text-brown font-medium max-w-2xl mx-auto"
            >
              A natural result is often about patience, not pushing too much
              product in one day.
            </motion.p>
          </motion.div>
        </div>
      </section>
      {/* Lip Filler vs Lip Flip Section */}
      <section className="py-20 px-4 bg-light">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-4xl text-brown text-center"
            >
              Lip filler vs lip flip (Botox)
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-taupe">
              People often confuse these.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Lip Filler */}
              <motion.div
                variants={fadeInLeft}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-wine mb-4">
                  Lip filler
                </h3>
                <p className="text-brown mb-4">
                  Adds volume and shape using HA gel.
                </p>
                <div className="bg-cream p-4 rounded-xl">
                  <p className="text-sm text-brown">
                    <span className="font-semibold">Best for:</span> Shape and
                    fullness
                  </p>
                </div>
              </motion.div>

              {/* Lip Flip */}
              <motion.div
                variants={fadeInRight}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-wine mb-4">Lip flip</h3>
                <p className="text-brown mb-4">
                  Uses a small amount of botulinum toxin to relax the upper lip
                  muscle so the lip may "roll out" slightly. It does not add
                  true volume.
                </p>
                <div className="bg-cream p-4 rounded-xl">
                  <p className="text-sm text-brown">
                    <span className="font-semibold">Best for:</span> "My lip
                    disappears when I smile"
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine p-6 rounded-xl text-white text-center max-w-3xl mx-auto"
            >
              <p>
                If your main issue is "my lip disappears when I smile," a lip
                flip may help. If your goal is shape and fullness, filler is
                usually the better option.{" "}
                <span className="font-bold">Many people combine both.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* How to Choose the Right Clinic Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            className="space-y-12"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-georgia text-4xl text-brown mb-6">
                How to choose the right lip filler clinic in Kuala Lumpur
              </h2>
              <p className="text-taupe mb-4">
                Directory sites rank well because they list many options and
                reviews. But your decision should come down to safety and
                planning.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: Syringe,
                  title: "Doctor-performed injections",
                  desc: "Ensure your treatment is performed by a qualified doctor",
                },
                {
                  icon: FileText,
                  title: "Clear explanation",
                  desc: "Of filler type and plan, no rushed selling",
                },
                {
                  icon: Heart,
                  title: "Natural-looking portfolio",
                  desc: "Look for realistic results, not dramatic transformations",
                },
                {
                  icon: Users,
                  title: "Proper consultation",
                  desc: "Not rushed selling, takes time to understand your goals",
                },
                {
                  icon: Shield,
                  title: "Aftercare discussion",
                  desc: "Clinic that discusses aftercare and risks clearly",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-cream p-6 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-rose rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-taupe">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-wine p-8 rounded-2xl text-white text-center max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-4">
                Why choose Nexus Clinic Kuala Lumpur?
              </h3>
              <p className="mb-6">
                People come to us for lip filler because they want a soft,
                natural look, shape that matches their face, honest guidance on
                what suits them, careful technique and safety-first standards.
              </p>
              <p className="text-lg font-medium">
                We plan lip filler to fit your features. Not a trend. Not a
                template.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - People Also Ask */}
      <FAQ data={faqs} />
    </main>
  );
};

export default LipFillerLanding;
