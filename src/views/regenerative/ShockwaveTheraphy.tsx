"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Activity,
  Shield,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Award,
  Zap,
  FileText,
  MapPin,
  Phone,
  ChevronRight,
  Info,
} from "lucide-react";

import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  fadeInUp,
} from "../../lib/animations";
import FAQ from "@/src/components/FAQ";

const ShockwaveLanding = () => {
  const faqs = [
    {
      q: "Does shockwave therapy work for erectile dysfunction?",
      a: "It can help some men, especially mild to moderate vasculogenic ED. Early results are promising, but outcomes vary. European guidance supports it for selected patients, while AUA still labels it investigational.",
    },
    {
      q: "How many shockwave sessions do I need for ED?",
      a: "Protocols vary. Many clinics use 6 sessions, while some use 12 sessions depending on severity and response. Trials have compared different schedules.",
    },
    {
      q: "Is shockwave therapy painful?",
      a: "It is typically described as pain-free or mildly uncomfortable in certain spots, and energy can be adjusted.",
    },
    {
      q: "How long does shockwave therapy take to work?",
      a: "Many patients notice changes within 1 to 3 months, with improvement potentially continuing over several months.",
    },
    {
      q: "How long do results last?",
      a: "Some guidance suggests benefits may last around 1 to 2 years in responders, but results are not permanent for everyone.",
    },
    {
      q: "Is shockwave therapy approved for ED?",
      a: "In the US, the FDA has not approved Li-ESWT specifically for ED, and the AUA classifies it as experimental or investigational. Malaysia has different regulatory pathways, and the treatment is offered by clinics.",
    },
    {
      q: "What are the risks or side effects?",
      a: "Side effects are usually mild, such as temporary redness or tenderness. Some studies report no significant adverse side effects, but reporting varies.",
    },
    {
      q: "Can shockwave therapy replace Viagra or Cialis?",
      a: "Sometimes it reduces reliance, but many men still use medication, especially early. ESWT is often positioned as restorative, while tablets are short-term support.",
    },
    {
      q: "What is the cost of shockwave therapy in Malaysia?",
      a: "Published ranges commonly mention RM 1,000 to RM 3,000 per session, with total costs depending on how many sessions you need. Some clinics advertise package pricing such as RM 4,500 for 6 sessions.",
    },
    {
      q: "Is 'radial wave therapy' the same as shockwave for ED?",
      a: "Not really. Cleveland Clinic warns radial wave therapy does not deliver the same energy and has not been proven effective for ED.",
    },
    {
      q: "Who should not do shockwave therapy for ED?",
      a: "Men whose ED is mainly due to nerve damage or psychological causes typically do not respond well. Severe ED and long duration ED may also respond less.",
    },
    {
      q: "Where can I get shockwave therapy in Kuala Lumpur?",
      a: "Several men's health clinics offer ESWT in Kuala Lumpur. If you want a centrally located option, Nexus Clinic Kuala Lumpur is at Wisma UOA II, Jalan Pinang.",
    },
  ];
  return (
    <main className="bg-light font-[--font-inter] overflow-hidden">
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative min-h-screen flex items-center"
        style={{
          background:
            "linear-gradient(135deg, var(--color-cream) 0%, #FFFFFF 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, var(--color-taupe) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full">
                <Heart className="w-4 h-4 text-wine" />
                <span className="text-sm font-medium text-wine">
                  Nexus Clinic Kuala Lumpur
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-georgia text-brown leading-tight">
                Fix the blood flow problem,{" "}
                <span className="text-wine">not just the moment.</span>
              </h2>

              <p className="text-lg text-taupe leading-relaxed max-w-lg">
                If erections feel weaker, inconsistent, or don't last, it can
                quietly damage confidence and intimacy. Shockwave Therapy (ESWT)
                is a non-surgical option that aims to support healthier blood
                flow, so your erections can feel more natural again.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-wine text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-rose transition-all shadow-lg hover:shadow-xl"
                >
                  Schedule Private Consult
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-wine text-wine px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-wine/5 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  016-7025699
                </motion.button>
              </div>

              <div className="flex items-center gap-4 text-sm text-brown/70">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-wine" />
                  <span>KLCC Area</span>
                </div>
                <div className="w-1 h-1 bg-taupe rounded-full" />
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-wine" />
                  <span>Medical Screening First</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative z-10 bg-[--color-glass] backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-wine/10 rounded-2xl flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown">Visit Us</h3>
                      <p className="text-sm text-taupe">
                        LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang,
                        50450 Kuala Lumpur
                      </p>
                    </div>
                  </div>

                  <div className="bg-wine/5 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <p className="text-sm text-brown">
                        <span className="font-semibold">
                          A proper medical check first
                        </span>{" "}
                        because ED can be a risk marker for underlying
                        cardiovascular disease and other health issues.
                      </p>
                    </div>
                  </div>
                  <div className="bg-wine/5 rounded-2xl p-6">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-wine shrink-0 mt-1" />
                      <p className="text-sm text-brown">
                        <span className="font-semibold">
                          Clear expectations:
                        </span>{" "}
                        international guidance is not perfectly aligned. Europe
                        supports ESWT for selected men, while the AUA still
                        classifies ESWT as investigational.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/50 rounded-2xl p-6">
                    <p className="text-sm text-taupe italic">
                      "International guidance is not perfectly aligned. Europe
                      supports ESWT for selected men, while the AUA still
                      classifies ESWT as investigational."
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-wine/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-rose/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is Shockwave Therapy Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-georgia text-brown">
                What is{" "}
                <span className="text-wine">Shockwave Therapy (ESWT)</span>
              </h2>

              <p className="text-lg text-brown/80 leading-relaxed">
                Shockwave Therapy for ED usually means low-intensity
                extracorporeal shockwave therapy (Li-ESWT).
              </p>

              <div className="bg-[--color-cream] rounded-3xl p-8 space-y-4">
                <p className="text-brown">
                  In simple words, a handheld device delivers gentle sound waves
                  to targeted areas. The goal is to stimulate healing responses
                  that may improve penile blood flow and erection quality over
                  time.
                </p>

                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl">
                  <AlertCircle className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <p className="text-sm text-brown">
                    <span className="font-semibold">Important:</span> shockwave
                    therapy for ED is not the same as the powerful shockwaves
                    used to break kidney stones (lithotripsy). Low-intensity
                    therapy is designed to stimulate tissue repair, not destroy
                    tissue.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/regenerative/embryonic.webp"
                  alt="Shockwave Therapy Procedure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-wine/10 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-wine" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brown">
                      Low-Intensity ESWT
                    </p>
                    <p className="text-xs text-taupe">
                      Stimulates tissue repair
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why ED happens */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-[--color-cream]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-georgia text-brown mb-6">
              Why ED happens{" "}
              <span className="text-wine">
                (and why shockwave is even discussed)
              </span>
            </h2>
            <p className="text-lg text-brown/80">
              A strong erection depends heavily on healthy blood flow. Anything
              that reduces circulation can reduce erection quality. Common
              contributors include diabetes, hypertension, high cholesterol,
              smoking, obesity, and overall cardiovascular disease risk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Activity, label: "Diabetes", desc: "Affects blood flow" },
              {
                icon: Activity,
                label: "Hypertension",
                desc: "Damages vessels",
              },
              {
                icon: Activity,
                label: "High Cholesterol",
                desc: "Clogs arteries",
              },
              { icon: Activity, label: "Smoking", desc: "Reduces circulation" },
              { icon: Activity, label: "Obesity", desc: "Increases risk" },
              {
                icon: Activity,
                label: "Cardiovascular Disease",
                desc: "Early signal",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-wine/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-semibold text-brown mb-2">{item.label}</h3>
                <p className="text-sm text-taupe}">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center mt-8 text-lg text-wine font-semibold"
          >
            That's also why ED is often described as an early health signal, not
            just a bedroom issue.
          </motion.p>
        </div>
      </motion.section>

      {/* How ESWT works */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold font-georgia text-brown">
                How does <span className="text-wine">ESWT work for ED?</span>
              </h2>

              <p className="text-lg text-brown/80">Li-ESWT is thought to:</p>

              <div className="space-y-4">
                {[
                  "stimulate growth factors and blood vessel repair responses",
                  "support new microvessel development (angiogenesis)",
                  "improve endothelial function and local circulation",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInLeft}
                    custom={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-wine shrink-0" />
                    <p className="text-brown">{text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-[--color-cream] rounded-2xl p-6">
                <p className="text-brown italic">
                  This is the "restorative" appeal. Pills can help blood flow
                  for a few hours. Shockwave aims to improve the underlying
                  vascular function over weeks and months.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-wine/5 rounded-3xl p-8">
                <h3 className="text-xl font-semibold text-brown mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-wine" />
                  Not all "Shockwave Therapy" is the same
                </h3>

                <p className="text-brown mb-4">
                  This matters a lot in Kuala Lumpur because many places market
                  "wave therapy" in different forms.
                </p>

                <div className="bg-white rounded-2xl p-6">
                  <h4 className="font-semibold text-wine mb-3">
                    Focused Li-ESWT vs radial wave therapy
                  </h4>
                  <p className="text-sm text-brown mb-3">
                    Some clinics advertise shockwave therapy but use radial wave
                    devices. Cleveland Clinic warns radial wave therapy does not
                    deliver the same energy and has not been shown to resolve ED
                    in scientific studies. Yale Urology also notes radial waves
                    deliver much lower energy and have not shown benefits for ED
                    in studies.
                  </p>

                  <div className="mt-4 p-4 bg-[--color-cream] rounded-xl">
                    <p className="text-sm font-semibold text-brown mb-2">
                      If you are paying for shockwave therapy in Malaysia, ask:
                    </p>
                    <ul className="space-y-2 text-sm text-brown">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-wine rounded-full mt-2" />
                        Is it focused Li-ESWT intended for ED?
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-wine rounded-full mt-2" />
                        What device is used and what protocol is followed?
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-wine rounded-full mt-2" />
                        What outcomes are you tracking (IIEF score, erection
                        hardness, medication use)?
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Who is Shockwave Therapy for */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-[--color-cream]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-georgia text-brown mb-4">
              Who is <span className="text-wine">Shockwave Therapy</span> for?
            </h2>
            <p className="text-lg text-brown/80 max-w-2xl mx-auto">
              The best evidence and guideline support is for mild to moderate
              vasculogenic ED, especially when blood flow is the main issue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInLeft}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-brown">
                  Good Candidates
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  "You still get partial erections, but they are weak or inconsistent",
                  "You respond somewhat to tablets like sildenafil or tadalafil, but want a more restorative option",
                  "You prefer a drug-free approach, or want to reduce reliance on pills over time",
                  "You are a poor responder to PDE5 inhibitors and want alternatives (some studies include this group)",
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                    <span className="text-brown">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-brown">
                  May Not Benefit As Much
                </h3>
              </div>

              <p className="text-brown mb-4">
                Shockwave therapy is less likely to help when ED is mainly
                caused by:
              </p>

              <ul className="space-y-4">
                {[
                  "nerve damage (for example, certain post-surgery cases)",
                  "severe psychological causes without vascular issues",
                  "very severe, long-standing ED",
                ].map((text, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                    <span className="text-brown">{text}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm text-wine font-semibold">
                This is why screening matters.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What happens at Nexus Clinic */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-georgia text-brown text-center ">
            What happens at{" "}
            <span className="text-wine">Nexus Clinic Kuala Lumpur</span>
          </h2>
          <p className="text-taupe text-sm max-w-3xl mx-auto text-center mb-16 mt-4">
            Nexus Clinic’s men’s ED approach includes multiple treatment options
            such as medications, hormone therapy, shockwave therapy, lifestyle
            changes, and regenerative treatments. A realistic patient journey
            looks like this:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Private consult and root-cause check",
                icon: FileText,
                details: [
                  "how long the problem has been present",
                  "whether it's situational or consistent",
                  "lifestyle and stress",
                  "medical risk factors like diabetes, blood pressure, and cholesterol",
                ],
                note: "Guidelines also encourage clinicians to counsel that ED can be a risk marker for underlying cardiovascular disease and warrants evaluation.",
              },
              {
                step: "02",
                title: "Optional labs if needed",
                icon: Activity,
                details: [
                  "If libido is low or fatigue is present",
                  "hormone checks may be part of the work-up",
                ],
                note: "Nexus Clinic positions hormone evaluation as part of ED care pathways.",
              },
              {
                step: "03",
                title: "ESWT sessions",
                icon: Zap,
                details: [
                  "no anesthesia",
                  "short sessions, often around 15 to 20 minutes",
                  "a series of sessions, not a one-time thing",
                ],
                note: "Nexus Clinic's ED shockwave landing page also states most men need a series of sessions and plans vary by individual needs.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-[--color-cream] rounded-3xl p-8 h-full hover:shadow-xl transition-all">
                  <div className="text-5xl font-bold text-wine/20 mb-4">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 bg-wine rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-brown mb-4">
                    {item.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {item.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-brown"
                      >
                        <div className="w-1.5 h-1.5 bg-wine rounded-full mt-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-taupe italic">{item.note}</p>
                </div>

                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 text-wine">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Sessions and Results */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-[--color-cream]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold font-georgia text-brown">
                How many sessions{" "}
                <span className="text-wine">do you need?</span>
              </h2>

              <div className="bg-white rounded-2xl p-6 space-y-4">
                <p className="text-brown">
                  6 sessions over a few weeks (very common in clinic FAQs)
                </p>
                <p className="text-brown">
                  6 vs 12 session protocols have been compared in randomized
                  trials, with some evidence suggesting stronger improvement
                  with more sessions in some cases.
                </p>
                <div className="bg-wine/5 p-4 rounded-xl">
                  <p className="text-sm text-brown font-medium">
                    Your plan should match your ED severity, vascular risk
                    factors, and response after the first few sessions.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-wine mb-4">
                  When will you see results?
                </h3>
                <p className="text-brown mb-4">
                  Shockwave therapy is not an instant effect treatment.
                </p>
                <p className="text-brown mb-4">
                  Many clinical discussions suggest improvements may appear
                  within 1 to 3 months, with continued improvement over several
                  months in responders.
                </p>
                <div className="bg-[--color-cream] p-4 rounded-xl">
                  <p className="text-sm text-brown">
                    In a long-term study of PDE5 inhibitor non-responders, about
                    63.5% achieved erections sufficient for penetration at 18
                    months (with or without PDE5 inhibitors), though some
                    initial responders declined over time.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-8">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-wine mb-4">
                  How long do results last?
                </h3>
                <p className="text-brown">
                  Results vary. Cleveland Clinic notes benefits may last about
                  one to two years for some patients, and that effects are not
                  necessarily permanent. Some men choose maintenance sessions
                  depending on response and lifestyle risk factors.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-wine mb-4">
                  Pros and Cons
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Pros
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Non-surgical, no anesthesia for most protocols",
                        "Targets vascular causes of ED instead of only treating the symptom",
                        "Minimal downtime is commonly reported by clinics",
                        "Can be used alone or alongside PDE5 inhibitors in selected men (as per European guidance)",
                      ].map((text, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-brown"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-1" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      Cons
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Not guaranteed, results vary",
                        "Needs a course of sessions, which adds time and cost",
                        "Evidence is still debated internationally: EAU supports it for selected men, AUA calls it investigational",
                        "Not ideal for every ED type (severe neurogenic ED, complex cases)",
                      ].map((text, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-brown"
                        >
                          <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Side effects */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-[--color-cream] rounded-3xl p-8">
            <h2 className="text-2xl font-bold font-georgia text-brown mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-wine" />
              Side effects and safety
            </h2>

            <p className="text-brown mb-4">
              Most reports describe mild side effects such as:
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                "temporary redness",
                "mild discomfort in a specific spot",
                "minor tenderness",
              ].map((effect, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-3 text-center"
                >
                  <p className="text-sm text-brown">{effect}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-brown">
                Cleveland Clinic describes the procedure as typically pain-free
                and notes energy can be adjusted if discomfort occurs. In the
                18-month follow-up study cited above, researchers reported no
                adverse side effects.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-24 bg-[--color-cream]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-georgia text-brown text-center mb-16">
            Shockwave Therapy{" "}
            <span className="text-wine">cost in Malaysia</span> (Kuala Lumpur)
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <p className="text-lg text-brown">
                Prices vary by clinic, device type, and number of sessions.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-brown mb-4">
                  Published Malaysia references commonly cite:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-wine rounded-full mt-2" />
                    <span className="text-brown">
                      around RM 1,000 to RM 3,000 per session, with many
                      patients needing 6 to 12 sessions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-wine rounded-full mt-2" />
                    <span className="text-brown">
                      package pricing example: Universal Clinic advertises 6
                      sessions for RM 4,500, and describes sessions lasting
                      about 20 minutes with pulses delivered to specific penile
                      areas
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-wine/5 rounded-2xl p-6">
                <h3 className="font-semibold text-brown mb-3">
                  Your real cost depends on:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-brown">
                    <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                    number of sessions recommended
                  </li>
                  <li className="flex items-start gap-2 text-brown">
                    <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                    whether ED evaluation and lab work are included
                  </li>
                  <li className="flex items-start gap-2 text-brown">
                    <ChevronRight className="w-4 h-4 text-wine shrink-0 mt-1" />
                    whether you combine therapy with medication or regenerative
                    options
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-wine mb-4">
                  Shockwave Therapy vs other ED treatments
                </h3>

                <div className="space-y-4">
                  <div className="border-b border-[--color-cream] pb-4">
                    <p className="font-semibold text-brown mb-2">
                      ESWT vs ED tablets (Viagra, Cialis type)
                    </p>
                    <p className="text-sm text-brown">
                      Tablets help blood flow short-term. ESWT aims to improve
                      blood flow pathways over time. Many men use both,
                      especially early on.
                    </p>
                  </div>

                  <div className="border-b border-[--color-cream] pb-4">
                    <p className="font-semibold text-brown mb-2">
                      ESWT vs P- Shot (PRP)
                    </p>
                    <p className="text-sm text-brown">
                      PRP and shockwave are often discussed together in men's
                      health clinics. Evidence for PRP and ESWT both varies, and
                      some guidelines classify PRP as experimental.
                    </p>
                  </div>

                  <div className="border-b border-[--color-cream] pb-4">
                    <p className="font-semibold text-brown mb-2">
                      ESWT vs injections (alprostadil)
                    </p>
                    <p className="text-sm text-brown">
                      Injections can work reliably for some men, but they are
                      more invasive and are used differently in a treatment
                      ladder.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-brown mb-2">
                      ESWT vs penile implants
                    </p>
                    <p className="text-sm text-brown">
                      Implants are a surgical option for severe ED when other
                      treatments fail. Many men consider ESWT earlier because it
                      is non-surgical.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Competitor Review */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold font-georgia text-brown text-center mb-8">
            Quick competitor review (Malaysia and Kuala Lumpur)
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "He Medical Clinic",
                desc: "non-surgical ESWT positioning and improved blood flow messaging",
              },
              {
                name: "The Alpha Clinic",
                desc: "20-minute sessions, 4 to 6 weekly appointments, no downtime style messaging",
              },
              {
                name: "Universal Clinic",
                desc: 'strong pricing angle, 6-session package, weekly sessions, "affordable" positioning',
              },
              {
                name: "Vivardi Clinics",
                desc: '"men over 35" and mild to moderate ED positioning, drug-free angle',
              },
            ].map((clinic, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-[--color-cream] rounded-2xl p-6"
              >
                <p className="font-semibold text-wine mb-2">{clinic.name}</p>
                <p className="text-sm text-brown">{clinic.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-wine/5 rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-wine mb-4">
              How Nexus Clinic KL can stand out:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-brown">
                  Make it medical, not just marketing. ED is a cardiovascular
                  risk marker, so screening matters.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-brown">
                  Be transparent about device type (focused Li-ESWT vs radial).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                <span className="text-brown">
                  Offer a full pathway: lifestyle, hormone review, medication
                  support, regenerative options, and ESWT in one plan.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <FAQ data={faqs} />

      {/* Final CTA */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-wine"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-georgia text-white mb-6">
              Start with a private consult and a clear plan
            </h2>

            <p className="text-white/90 text-lg mb-8">
              If you're searching for Shockwave Therapy in Malaysia or ESWT in
              Kuala Lumpur, start with a private consult and a clear plan that
              fits your ED type, your health, and your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-wine px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[--color-cream] transition-all shadow-lg"
              >
                Schedule Consultation
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                href="tel:016-7025699"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                016-7025699
              </motion.a>
            </div>

            <div className="mt-8 text-white/80 text-sm">
              <p>Nexus Clinic Kuala Lumpur</p>
              <p>
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>
              <p className="mt-2">Mobile: 016-7025699 / 03-21635699</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default ShockwaveLanding;
