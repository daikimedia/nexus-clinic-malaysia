"use client";
import { motion } from "framer-motion";
import {
  Droplets,
  Heart,
  Shield,
  Clock,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Users,
  Activity,
  Eye,
  HeartPulse,
  Droplet,
  Sparkle,
  MessageCircle,
  MapPin,
  ChevronDown,
} from "lucide-react";

import {
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "../../lib/animations";
import FAQ from "@/src/components/FAQ";

const OShotLanding = () => {
  const faqs = [
    {
      q: "What is the O-Shot?",
      a: "O-Shot is a PRP based procedure where platelet-rich plasma from your own blood is injected into intimate tissue to support healing signals and potentially improve comfort and sexual function.",
    },
    {
      q: "Does O-Shot really work?",
      a: "Studies show mixed results. A systematic review suggests PRP may improve female sexual dysfunction and stress urinary incontinence symptoms, but evidence is limited and protocols vary.",
    },
    {
      q: "Is O-Shot safe?",
      a: "PRP is autologous (from your own blood), which reduces allergy risk. Most reported side effects are mild and short-term, but good clinical screening matters.",
    },
    {
      q: "Is O-Shot painful?",
      a: "Most clinics use numbing to reduce discomfort. You may still feel pressure or mild tenderness during and after.",
    },
    {
      q: "How long does O-Shot last?",
      a: "There is no fixed duration. Many studies assess outcomes between 1 and 6 months, and some clinics describe benefits lasting months to over a year depending on the person.",
    },
    {
      q: "How many O-Shot sessions do I need?",
      a: "It depends on your concern. Research protocols vary, and one review describes monthly PRP injections for 3 months as a common protocol for female sexual dysfunction studies.",
    },
    {
      q: "Can O-Shot help with urinary incontinence?",
      a: "PRP injections have been studied for female stress urinary incontinence, with some trials reporting symptom improvement, but it should be considered carefully and not as a replacement for standard care when severity is higher.",
    },
    {
      q: "Can O-Shot help vaginal dryness?",
      a: "Some PRP studies and clinical reviews discuss improvements in dryness and tissue quality, but menopause-related dryness often needs broader care, sometimes including local treatments.",
    },
    {
      q: "Is O-Shot the same as vaginal tightening?",
      a: "Not exactly. O-Shot is PRP injection aimed at tissue support and sensation. Tightening is more often linked with laser or RF based collagen tightening approaches.",
    },
    {
      q: "What is the cost of O-Shot in Malaysia?",
      a: "Public references commonly show RM 1,500 to RM 6,000 depending on clinic and inclusions, with some providers listing RM 2,000.",
    },
    {
      q: "Who is not suitable for O-Shot?",
      a: "Women who are pregnant, have active infection, certain bleeding issues, or unexplained symptoms should be assessed first. A consult determines suitability.",
    },
    {
      q: "Where can I get O-Shot in Kuala Lumpur?",
      a: "Several KL providers offer O-Shot, including clinics that position it within intimate wellness and aesthetic gynaecology. Nexus Clinic Kuala Lumpur is centrally located at Wisma UOA II, Jalan Pinang.",
    },
  ];
  return (
    <div className="min-h-screen bg-light font-[--font-inter] overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-linear(135deg, var(--color-cream) 0%, var(--color-light) 100%)",
        }}
      >
        {/* Decorative Elements */}
        <motion.div
          variants={scaleIn}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-rose opacity-5 blur-3xl"
        />
        <motion.div
          variants={scaleIn}
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-wine opacity-5 blur-3xl"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-glass backdrop-blur-sm rounded-full border border-taupe border-opacity-20">
                <Heart className="w-4 h-4 text-wine mr-2" />
                <span className="text-sm text-brown font-medium">
                  Women's Wellness at Nexus Clinic Kuala Lumpur
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brown leading-tight font-georgia">
                O-Shot in Malaysia
                <span className="block text-wine mt-2">PRP "Orgasm Shot"</span>
              </h2>

              <p className="text-xl leading-relaxed">
                Feeling dry, less sensitive, or "not the same" down there? You
                are not alone, and you have options.
              </p>

              <p className="text-lg text-brown border-l-4 border-rose pl-6 italic">
                Intimacy can change after childbirth, during menopause, or
                simply with time and stress. The O-Shot is a PRP based treatment
                that some women in Kuala Lumpur choose to support comfort,
                sensation, and confidence.
              </p>

              <motion.div
                variants={scaleIn}
                className="flex flex-wrap gap-4 pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-wine text-white rounded-full font-semibold hover:bg-rose transition-colors shadow-lg"
                >
                  Schedule Private Consult
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-glass backdrop-blur-sm text-brown rounded-full font-semibold border border-taupe hover:bg-cream transition-colors"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-wine to-rose opacity-10 rounded-3xl transform rotate-3" />
              <div className="relative bg-glass backdrop-blur-sm p-8 rounded-3xl border border-white border-opacity-20 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-brown">
                        Central Kuala Lumpur clinic
                      </h3>
                      <p className="text-taupe">
                        Nexus Clinic Kuala Lumpur, LG 10, Lower Ground Floor,
                        Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
                      </p>
                      <p className="text-wine font-medium mt-1">
                        Mobile: 016-7025699 / 03-21635699
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-taupe border-opacity-20 pt-4">
                    <h3 className="font-semibold text-brown mb-2">
                      Women's wellness approach:
                    </h3>
                    <p className="text-taupe">
                      Nexus Clinic describes vaginal rejuvenation goals like
                      comfort, confidence, lubrication support, and addressing
                      occasional urine leakage, and also mentions O-Shot
                      alongside ThermiVa as part of women's wellness options.
                    </p>
                  </div>

                  <div className="bg-wine bg-opacity-5 p-4 rounded-xl">
                    <p className="text-light text-sm italic">
                      <span className="font-semibold">Clear expectations:</span>{" "}
                      the O-Shot is widely marketed as "non-invasive," but it
                      involves small PRP injections, so we keep the conversation
                      honest, medical, and realistic.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-taupe" />
          </div>
        </motion.div>
      </motion.section>

      {/* What is O-Shot Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
              What Is the O-Shot?
            </h2>
            <div className="w-24 h-1 bg-rose mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="prose prose-lg text-brown">
                <p className="text-xl text-wine font-medium">
                  The O-Shot (often called the Orgasm Shot) is a procedure that
                  uses platelet-rich plasma (PRP) made from your own blood.
                </p>
                <p>
                  PRP is prepared by drawing blood, spinning it (centrifuge),
                  and separating the platelet-rich layer. Then PRP is injected
                  into specific intimate areas to support tissue healing signals
                  and blood flow.
                </p>
                <p>
                  In Malaysia, many clinics position O-Shot as part of female
                  intimate wellness for concerns like vaginal dryness, reduced
                  sensation, orgasm difficulty, and sometimes mild urinary
                  leakage.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { icon: Droplet, label: "Vaginal dryness" },
                  { icon: Eye, label: "Reduced sensation" },
                  { icon: Sparkle, label: "Orgasm difficulty" },
                  { icon: Activity, label: "Mild leakage" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="bg-cream p-4 rounded-xl text-center"
                  >
                    <item.icon className="w-6 h-6 text-wine mx-auto mb-2" />
                    <span className="text-sm text-brown">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-wine to-rose opacity-10 rounded-3xl transform -rotate-3" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/regenerative/embryonic.webp"
                  alt="O-Shot Procedure at Nexus Clinic"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm opacity-90">
                    PRP preparation process at Nexus Clinic Kuala Lumpur
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Truth Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <AlertCircle className="w-12 h-12 text-wine mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
                The Most Important Truth Before You Book
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="text-2xl font-semibold text-wine mb-4">
                Does O-Shot "work"?
              </h3>

              <p className="text-brown mb-6 text-lg">
                Evidence is mixed. Some studies show improvements in sexual
                function and stress urinary incontinence symptoms, but reviews
                also stress limitations like small sample sizes and inconsistent
                PRP protocols.
              </p>

              <div className="bg-cream p-6 rounded-xl mb-8">
                <p className="text-brown italic">
                  A 2023 systematic review concluded PRP might improve female
                  sexual dysfunction (FSD) and female stress urinary
                  incontinence (SUI), but also said strong conclusions are
                  difficult due to clinical heterogeneity.
                </p>
              </div>

              <div className="border-l-4 border-rose pl-6">
                <p className="text-xl font-medium text-brown mb-2">
                  So the honest promise is:
                </p>
                <p className="text-wine text-lg">
                  Some women feel better. Some feel little change. The right
                  screening and expectation-setting matter as much as the
                  injection.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Who Considers Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Users className="w-12 h-12 text-wine mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
              Who Typically Considers O-Shot in Kuala Lumpur?
            </h2>
            <p className="text-taupe text-lg">
              You may be a good fit if you relate to one or more of these:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Droplets,
                title: "Vaginal dryness or discomfort",
                desc: "This is common in perimenopause and menopause, but it can also happen from breastfeeding, stress, medications, or hormonal shifts.",
              },
              {
                icon: Eye,
                title: "Reduced sensation or difficulty reaching orgasm",
                desc: "Some women describe it as 'I'm there mentally, but my body is slow.'",
              },
              {
                icon: HeartPulse,
                title: "Pain during intercourse (dyspareunia)",
                desc: "Pain has many causes. PRP is not the first line for all pain, but it may be discussed after proper assessment.",
              },
              {
                icon: Activity,
                title: "Mild urinary leakage (stress urinary incontinence)",
                desc: "Some PRP studies focus on injections in the vaginal wall for SUI improvement, with short-term benefits reported in certain trials.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                className="bg-cream p-6 rounded-2xl hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-wine bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-light" />
                </div>
                <h3 className="text-xl font-semibold text-brown mb-2">
                  {item.title}
                </h3>
                <p className="text-taupe">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe mt-8 italic"
          >
            Competitor clinics in Malaysia openly list these concerns as O-Shot
            targets (orgasm difficulty, reduced sensation, urinary incontinence,
            painful intercourse).
          </motion.p>
        </div>
      </motion.section>

      {/* Who Should Avoid Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-wine bg-opacity-10 rounded-full">
                <Shield className="w-4 h-4 text-light mr-2" />
                <span className="text-sm text-light font-medium">
                  Important Safety Screening
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-brown font-georgia">
                Who Should Avoid O-Shot
                <span className="block text-wine text-xl mt-2">
                  (or Needs Careful Review First)
                </span>
              </h2>

              <p className="text-taupe text-lg">
                A responsible clinic should screen you first. You may be asked
                to postpone or avoid treatment if you have:
              </p>

              <ul className="space-y-4">
                {[
                  "Pregnancy, or immediate post-delivery complications",
                  "Active vaginal/urinary infection or unexplained bleeding",
                  "Bleeding disorders, or certain blood-thinning medications",
                  "Significant pelvic pain with unclear cause (needs diagnosis first)",
                  "Unrealistic expectations such as guaranteed results or 'permanent change'",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInRight}
                    className="flex items-start space-x-3"
                  >
                    <XCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-brown">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white p-8 rounded-3xl shadow-xl"
            >
              <AlertCircle className="w-8 h-8 text-wine mb-4" />
              <h3 className="text-xl font-semibold text-brown mb-3">
                Important Note
              </h3>
              <p className="text-taupe mb-4">
                If your main concern is urinary leakage that is moderate to
                severe, you may need pelvic floor therapy, medical management,
                or specialist referral.
              </p>
              <div className="bg-cream p-4 rounded-xl">
                <p className="text-wine font-medium">
                  O-Shot is not a replacement for proper urogynaecology care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
              How O-Shot Works
            </h2>
            <p className="text-taupe text-lg">In Simple Words</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <p className="text-brown text-lg leading-relaxed">
                Platelets contain growth factors that participate in healing.
                PRP therapy is built on the idea that concentrating platelets
                and placing them in a target area may support tissue
                regeneration signals, collagen remodeling, and local
                circulation.
              </p>
              <p className="text-brown text-lg leading-relaxed">
                In female sexual health research, PRP injections have been
                studied in areas like the lower anterior vaginal wall, with
                measured outcomes for sexual function and orgasm.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-cream p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-wine mb-4">
                Step by Step Process
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "1: Private consult first",
                    desc: "We start with your symptoms, timeline, and what your body has been through (childbirth, menopause, breastfeeding, stress, medications). If needed, we discuss whether you should first treat dryness with simpler solutions, or whether O-Shot fits your goals. Nexus Clinic’s women’s wellness content positions vaginal rejuvenation around comfort, lubrication support, confidence, and leakage support, which is the right “whole picture” frame.",
                  },
                  {
                    step: "Step 2: PRP preparation",
                    desc: "Blood is drawn from your arm and processed to prepare PRP. PRP preparation and injection protocols vary in research, which is one reason outcomes vary.",
                  },
                  {
                    step: "Step 3: Numbing and injection",
                    desc: "Most providers use numbing cream or local anaesthetic for comfort. Then PRP is injected into targeted areas based on your concern (often around the anterior vaginal wall and/or clitoral region in many published protocols).",
                  },
                  {
                    step: "Step 4: Back to normal life",
                    desc: "Most women return to normal routines quickly. You may have mild tenderness or swelling for a short time. Plan a calm day if you can.",
                  },
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-rose pl-4">
                    <p className="font-semibold text-brown">{item.step}</p>
                    <p className="text-sm text-taupe mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-3xl">
            <p className="text-center text-brown italic mb-4">
              Nexus Clinic's women's wellness content positions vaginal
              rejuvenation around comfort, lubrication support, confidence, and
              leakage support, which is the right "whole picture" frame.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Aftercare Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-brown text-center mb-12 font-georgia">
              Aftercare (Practical Tips)
            </h2>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <p className="text-brown mb-6">
                Your clinic will give you instructions, but a sensible approach
                usually includes:
              </p>

              <ul className="space-y-4">
                {[
                  "Keep the area clean and avoid harsh products for a short period",
                  "Avoid intense exercise if you bruise easily",
                  "Pause sexual activity for the time your clinician recommends",
                  "Contact the clinic if you develop fever, severe pain, unusual discharge, or persistent bleeding",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInRight}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                    <span className="text-brown">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Results Timeline Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Clock className="w-12 h-12 text-wine mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
              When Will You See Results?
            </h2>
            <p className="text-taupe">
              Results are not instant like a painkiller.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-2xl mb-8"
            >
              <p className="text-brown">
                Many studies measure outcomes at 1 month to 6 months, and
                improvements (if they happen) tend to build gradually.
              </p>
            </motion.div>

            <div className="relative py-8">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-rose bg-opacity-30" />

              {[
                { time: "Week 1", desc: "recovery and settling" },
                {
                  time: "Weeks 2 to 6",
                  desc: "early changes in comfort or sensation for some women",
                },
                {
                  time: "Months 2 to 6",
                  desc: "clearer pattern (either improvement or not)",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} mb-8`}
                >
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}
                  >
                    <div className="bg-cream p-4 rounded-xl">
                      <p className="font-semibold text-wine">{item.time}</p>
                      <p className="text-brown text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-wine rounded-full" />
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              className="bg-cream p-6 rounded-2xl mt-8"
            >
              <h3 className="text-xl font-semibold text-brown mb-3">
                How Many Sessions Do You Need?
              </h3>
              <p className="text-taupe mb-4">There is no universal rule.</p>
              <p className="text-brown">
                In the medical literature, PRP protocols differ, but the 2023
                systematic review notes one common approach for female sexual
                dysfunction is monthly injections for 3 months in the distal
                anterior vaginal wall (protocol examples vary).
              </p>
              <p className="text-taupe mt-4 italic">
                In real clinics, some women do one session, others choose a
                short series. Your plan should match your symptoms and budget,
                and should never feel like pressure.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Comparison Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
              O-Shot vs Other Options in Malaysia
            </h2>
            <p className="text-taupe">Quick, Honest Comparison</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                vs: "Lubricants and moisturisers",
                desc: "If the main issue is dryness during sex, you might improve with the right products and simple medical guidance. These are often the first step.",
              },
              {
                vs: "Vaginal oestrogen (menopause dryness)",
                desc: "For menopause-related dryness, many women benefit from local oestrogen options under medical care. O-Shot is not a replacement for proven menopause GSM treatments, but may be discussed if you want additional support.",
              },
              {
                vs: "Laser vaginal rejuvenation",
                desc: "Laser treatments are common in Malaysia and are often used for tissue quality and collagen stimulation. A KL clinic overview explains laser works via controlled thermal energy and collagen rebuilding, typically over multiple sessions.",
              },
              {
                vs: "Radiofrequency (ThermiVa style)",
                desc: "Nexus Clinic's women's wellness content describes ThermiVa as a non-invasive RF approach to improve collagen and blood flow, and explicitly mentions combining O-Shot with ThermiVa as a 'powerful duo.'",
              },
              {
                vs: "Pelvic floor therapy",
                desc: "If urinary leakage is your main issue, pelvic floor physiotherapy can be a strong first step. PRP has research interest for SUI, but pelvic floor rehab remains a standard approach in many cases.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-wine mb-2">
                  {item.vs}
                </h3>
                <p className="text-brown">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits and Cons */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
              Benefits and Cons
            </h2>
            <p className="text-taupe">What Patients Actually Care About</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="bg-green-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
                  <CheckCircle2 className="w-6 h-6 mr-2" />
                  Potential benefits (not guaranteed)
                </h3>
                <ul className="space-y-3">
                  {[
                    "Better comfort and less dryness",
                    "Improved sensation or arousal response",
                    "More confidence during intimacy",
                    "Possible improvement in mild leakage in selected cases",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-taupe mt-4 italic">
                  These are consistent with how Malaysia clinics position O-Shot
                  services and how PRP research measures outcomes.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-red-50 p-6 rounded-2xl">
                <h3 className="text-2xl font-semibold text-red-700 mb-4 flex items-center">
                  <XCircle className="w-6 h-6 mr-2" />
                  Downsides and limitations
                </h3>
                <ul className="space-y-3">
                  {[
                    "Results vary and may be subtle",
                    "Evidence quality is still evolving",
                    "You may need more than one session",
                    "Cost is out-of-pocket",
                    "It will not fix every cause of pain, low libido, or orgasm difficulty",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-brown">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Side Effects and Safety */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-12 h-12 text-wine mx-auto mb-4" />
              <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
                Side Effects and Safety
              </h2>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl space-y-6">
              <p className="text-brown text-lg">
                Because PRP comes from your own blood, allergy risk is generally
                low. The main risks are from the injection process itself:
              </p>

              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Temporary swelling, bruising, tenderness",
                  "Spotting or mild discomfort",
                  "Infection risk (rare, but possible with any injection)",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 bg-cream p-3 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5 text-wine shrink-0" />
                    <span className="text-brown">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-taupe italic border-t border-taupe border-opacity-20 pt-6">
                Research reviews often report minimal serious adverse events,
                but also emphasize the need for better quality trials and
                consistent reporting.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4 font-georgia">
              O-Shot Cost in Malaysia
            </h2>
            <p className="text-taupe mb-8">Kuala Lumpur</p>

            <div className="bg-linear-to-br from-wine to-rose text-white p-8 rounded-3xl shadow-2xl mb-8">
              <p className="text-2xl mb-4">Pricing varies by provider</p>
              <div className="text-5xl font-bold mb-4">RM 1,500 - RM 6,000</div>
              <p className="text-white text-opacity-90">
                depending on needs and clinic positioning
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-cream p-4 rounded-xl">
                <p className="text-wine font-semibold">Published references</p>
                <p className="text-brown">RM 2,000 for P-Shot & O-Shot</p>
              </div>
              <div className="bg-cream p-4 rounded-xl">
                <p className="text-wine font-semibold">KL blog-style pricing</p>
                <p className="text-brown">MYR 1,500 to MYR 2,000</p>
              </div>
              <div className="bg-cream p-4 rounded-xl">
                <p className="text-wine font-semibold">
                  Minimally invasive option
                </p>
                <p className="text-brown">clinic-specific</p>
              </div>
            </div>

            <div className="bg-cream p-6 rounded-2xl">
              <p className="text-brown font-medium mb-2">
                Best way to compare prices:
              </p>
              <p className="text-taupe">
                Ask what's included (consult, numbing, PRP prep method,
                follow-up), and ask how many sessions they recommend for your
                goal.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Competitor Review */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-brown text-center mb-12 font-georgia">
              Competitor Review
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-brown text-center text-lg">
                When people search "O-Shot Malaysia" and "O-Shot Kuala Lumpur,"
                these types of pages commonly appear:
              </p>

              {[
                "Clinic service pages listing O-Shot as 'orgasm shot' for dryness, orgasm difficulty, reduced sensation, and urinary incontinence (example: ESOCLINIQ)",
                "Aesthetic gynaecology clinics listing O-Shot (PRP) alongside laser options for vaginal relaxation and urinary incontinence (example: Dr K & Associates)",
                "Aggregators and directories that list multiple clinics offering PRP O-Shot across Malaysia, often with reviews and locations (example: Erufu Care)",
                "Pricing pages that anchor expectations with a published range or fixed price point (example: Premier's public pricing statements via snippets)",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInRight}
                  className="bg-white p-4 rounded-xl shadow-md"
                >
                  <p className="text-brown">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-wine bg-opacity-5 p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-light mb-4">
                How Nexus Clinic KL can stand out
              </h3>
              <ul className="space-y-4">
                {[
                  "Clear, medical-first screening and a comfort-first conversation (not sales-first)",
                  "Transparent expectation setting (what is proven vs still evolving) using real research summaries.",
                  "A 'plan' approach, combining options like RF (ThermiVa) where appropriate, since Nexus explicitly references that pairing.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-taupe shrink-0 mt-0.5" />
                    <span className="text-taupe">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FAQ data={faqs} />

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={scaleIn} className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-6 font-georgia">
              Start with a Private Consult
            </h2>
            <p className="text-xl text-taupe mb-8">
              If you're searching for O-Shot in Malaysia or O-Shot in Kuala
              Lumpur, start with a private consult and an honest plan that fits
              your body and your comfort.
            </p>

            <div className="bg-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-semibold text-wine mb-4">
                Nexus Clinic Kuala Lumpur
              </h3>
              <p className="text-brown mb-2">
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>
              <p className="text-wine font-semibold text-lg mb-6">
                Mobile: 016-7025699 / 03-21635699
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-wine text-white rounded-full font-semibold hover:bg-rose transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Schedule Your Consultation Today</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default OShotLanding;
