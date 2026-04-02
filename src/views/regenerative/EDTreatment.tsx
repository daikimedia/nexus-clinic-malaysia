"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Shield,
  Brain,
  Activity,
  Sparkles,
  Pill,
  Syringe,
  Zap,
  Stethoscope,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
  Scale,
  Moon,
  Dumbbell,
  Wine,
  TestTube,
  ShieldCheck,
  Calendar,
  Timer,
  TrendingUp,
  Users,
  Lock,
  MessageCircle,
  Target,
  AlertTriangle,
  Droplets,
  ClipboardList,
  Eye,
  Gauge,
  FileText,
  Building,
  Award,
  Clock,
  BarChart3,
  Thermometer,
  Briefcase,
  Star,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from "../../lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import FAQ from "../../components/FAQ";

export default function EDTreatment({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "regenerative/edTreatment");

  const images = {
    doctorConsultation: "/images/regenerative/ed-treatment.webp",
    modernClinic: "/images/clinic/interior.png",
    medicalTeam:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop",
    healthyLifestyle:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    kualaLumpur:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?q=80&w=2069&auto=format&fit=crop",
    consultation:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
  };

  // ED Type to Treatment Matching Table Data
  const edTypeTable = [
    {
      type: "Vascular Erectile Dysfunction (Most Common)",
      recognition:
        "Gradual onset; difficulty maintaining an erection in all situations; reduced morning and nocturnal erections",
      causes:
        "Abnormalities with blood vessels; endothelial dysfunction; diabetes, high blood pressure, hyperlipidaemia, smoking, obesity",
      firstLine:
        "Oral medications (PDE5 inhibitor) as first line; shockwave therapy (Li-ESWT) for mild to moderate cases; aggressive cardiovascular risk factor management",
      prognosis: "Good with treatment; full resolution possible if vascular causes are controlled",
    },
    {
      type: "Psychogenic Erectile Dysfunction",
      recognition:
        "Sudden onset; erection present with masturbation or on waking but absent with partner; situational; associated with performance anxiety or depression",
      causes:
        "Psychological or emotional problems: anxiety, depression, stress; guilt about sexual performance; relationship conflict; performance anxiety",
      firstLine:
        "Sex therapist or counsellor as primary intervention; brief PDE5 oral medications as confidence support; breaking the performance anxiety cycle is the goal",
      prognosis: "Excellent; full resolution common",
    },
    {
      type: "Hormonal Erectile Dysfunction",
      recognition:
        "Reduced libido as dominant symptom; reduced morning erections; fatigue, low mood, reduced muscle mass",
      causes:
        "Testosterone deficiency confirmed on fasting blood test; hormonal imbalances impair both desire and erection mechanism",
      firstLine:
        "Testosterone therapy to restore hormone levels; PDE5 inhibitor added if vascular component also present",
      prognosis: "Good; erectile function improves within 3 to 6 months of testosterone normalisation",
    },
    {
      type: "Neurogenic Erectile Dysfunction",
      recognition:
        "Associated with known neurological conditions; erection attempts with desire but no mechanical response",
      causes:
        "Nerve abnormalities from diabetes with neuropathy, multiple sclerosis, Parkinson's, spinal cord injury, prostate surgery, radiation therapy to the pelvis",
      firstLine:
        "PDE5 inhibitors when some nerve function remains; intracavernosal injection therapy for non-responders; vacuum erection device",
      prognosis: "Variable; depends on degree of nerve damage",
    },
    {
      type: "Mixed Erectile Dysfunction (Most Common Clinical Presentation)",
      recognition:
        "Features of two or more types simultaneously; most common in Malaysian men over 40",
      causes:
        "Multiple causes simultaneously active; both organic (vascular, hormonal) and psychological issues contributing",
      firstLine:
        "PDE5 inhibitor as foundation; shockwave therapy if vascular component significant; testosterone therapy if hormonal confirmed; sex therapist for psychological issues",
      prognosis: "Good with comprehensive approach",
    },
  ];

  // Oral Medications Comparison Table
  const oralMedsTable = [
    {
      name: "Sildenafil (Viagra, generic)",
      onset: "30 to 60 minutes; duration 4 to 6 hours",
      foodEffect:
        "High-fat meal delays absorption significantly; must be taken 1 hour before on empty stomach",
      sideEffects: "Visual colour tinge; headache, flushing, nasal congestion, dyspepsia",
      bestFor:
        "Men who can plan 1 to 2 hours ahead; poorest choice for Malaysian food culture; most affordable option",
    },
    {
      name: "Tadalafil (Cialis, generic)",
      onset: "30 to 60 minutes; duration 24 to 36 hours (up to 2 days)",
      foodEffect: "Minimal food effect; can be taken with or without food at any time",
      sideEffects: "Back pain and myalgia in 2 to 7%; headache, flushing",
      bestFor:
        "Men who want spontaneity; daily low-dose ideal for consistent readiness; most popular for Malaysian patients",
    },
    {
      name: "Vardenafil (Levitra)",
      onset: "25 to 60 minutes; duration 4 to 5 hours",
      foodEffect: "High-fat meal delays onset similarly to sildenafil",
      sideEffects: "Headache, flushing, nasal congestion; QT interval prolongation possible at high doses",
      bestFor: "Men who find sildenafil has too strong a visual side effect",
    },
    {
      name: "Avanafil (Stendra)",
      onset: "Fastest: 15 to 30 minutes; duration 6 hours",
      foodEffect: "Minimal food effect; most flexible regarding meal timing",
      sideEffects: "Fewest side effects due to highest PDE5 selectivity; minimal visual effects",
      bestFor:
        "Men who want fastest and most flexible option with fewest side effects; higher cost",
    },
  ];

  // Shockwave Therapy Evidence Table
  const shockwaveTable = [
    {
      question: "What does shockwave therapy for erectile dysfunction actually do?",
      evidence:
        "Low-intensity extracorporeal shockwave therapy delivers focused acoustic waves to penile tissues; stimulates angiogenesis through upregulation of VEGF; promotes regeneration of cavernous smooth muscle",
      application:
        "Positioned as a treatment that addresses the underlying structural vascular problem rather than managing symptoms",
    },
    {
      question: "Who is the ideal candidate?",
      evidence:
        "Mild to moderate vascular ED with reduced blood flow; PDE5 partial responders; men who want to reduce oral medication dependence; men who cannot take oral medications due to nitrate use",
      application:
        "Recommended after vascular cause is confirmed; not offered as first-line for psychogenic ED",
    },
    {
      question: "How many sessions are needed and what is realistic?",
      evidence:
        "6 to 12 sessions, 1 to 2 per week; 60 to 75% improvement in mild to moderate vascular ED; some benefits lasting up to 1 year",
      application:
        "Patients informed of realistic response rates; men with mild to moderate vascular ED who have partial oral medication response are most likely to benefit",
    },
    {
      question: "Who will NOT benefit meaningfully?",
      evidence:
        "Pure psychogenic ED (no vascular mechanism); severe vascular ED with fixed arterial occlusion; neurogenic ED after radical prostatectomy without nerve preservation",
      application:
        "Nexus Clinic KL does not offer shockwave therapy to these patient groups as primary treatment",
    },
  ];

  // Pricing Table
  const pricingItems = [
    { item: "ED Initial Consultation", details: "Comprehensive history, IIEF-5 assessment, physical examination, cardiovascular risk review, medication review, blood test requisition", price: "RM 150 to RM 300" },
    { item: "ED Blood Panel", details: "Total testosterone, fasting glucose, HbA1c, lipid panel, CBC, LH, FSH, prolactin, thyroid function", price: "RM 250 to RM 450" },
    { item: "Oral Medication (Sildenafil, generic)", details: "On-demand; prescription valid for 1 to 3 months", price: "RM 40 to RM 120 per month" },
    { item: "Oral Medication (Tadalafil)", details: "Daily 2.5 to 5mg or on-demand 10 to 20mg; best for Malaysian food culture", price: "RM 120 to RM 350 per month" },
    { item: "Shockwave Therapy (Li-ESWT) per session", details: "Non-invasive; 20 to 30 minutes; 6 to 12 sessions recommended", price: "RM 600 to RM 1,200 per session" },
    { item: "Li-ESWT Programme (6 sessions)", details: "For mild to moderate vascular ED; includes pre and post programme review", price: "RM 3,500 to RM 6,500" },
    { item: "PRP Therapy (P-Shot, per session)", details: "Autologous PRP; injected into penile tissues; 2 to 3 sessions recommended", price: "RM 1,200 to RM 2,500 per session" },
    { item: "Combination ED Programme", details: "Shockwave plus PRP; 6 shockwave sessions, 2 PRP sessions, 3-month follow-up", price: "From RM 6,500" },
  ];

  // FAQs
  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q6"), a: t("faq.a6") },
    { q: t("faq.q7"), a: t("faq.a7") },
    { q: t("faq.q8"), a: t("faq.a8") },
    { q: t("faq.q9"), a: t("faq.a9") },
    { q: t("faq.q10"), a: t("faq.a10") },
  ];

  return (
    <>
      <main className="min-h-screen bg-cream font-['Inter',sans-serif] overflow-hidden">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
          <div className="absolute inset-0">
            <img
              src={images.modernClinic}
              alt="Modern Clinic Interior"
              className="w-full h-full object-cover opacity-20"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #F3EFEE 0%, rgba(243, 239, 238, 0.95) 50%, #F3EFEE 100%)",
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 z-10 my-4 lg:my-0">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-6">
                <motion.div
                  variants={scaleIn}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <HeartPulse className="w-4 h-4" style={{ color: "#8C4F58" }} />
                  <span className="text-sm" style={{ color: "#4B3A33" }}>Confidential Care</span>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl lg:text-6xl font-serif font-bold"
                  style={{ color: "#4B3A33" }}
                >
                  Erectile Dysfunction Treatment in Malaysia:
                  <span className="block" style={{ color: "#8C4F58" }}>Cause-Matched ED Treatment Kuala Lumpur</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-lg leading-relaxed max-w-lg"
                  style={{ color: "#AC9990" }}
                >
                  Erectile dysfunction treatment in Malaysia matched to your cause. ED treatment Kuala Lumpur clinic offering treatment options for erection problems including oral medications, shockwave therapy and blood flow restoration. Erectile dysfunction treatment in malaysia with honest outcomes. Near Penang. Book your confidential assessment today.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-lg font-medium flex items-center gap-2"
                    style={{
                      background: "#8C4F58",
                      color: "#FAF8F7",
                      boxShadow: "0 10px 25px -5px rgba(140, 79, 88, 0.3)",
                    }}
                  >
                    Book Your Confidential Assessment
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-lg font-medium"
                    style={{
                      background: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(172, 153, 144, 0.3)",
                      color: "#4B3A33",
                    }}
                  >
                    Speak to a Doctor
                  </motion.button>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
                >
                  {[
                    { icon: Award, text: "5,000+ Procedures Completed" },
                    { icon: Users, text: "15+ Years Experience" },
                    { icon: Shield, text: "MOH Approved" },
                    { icon: Lock, text: "100% Confidential" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-2"
                    >
                      <item.icon className="w-4 h-4 mt-1 shrink-0" style={{ color: "#8C4F58" }} />
                      <span className="text-xs" style={{ color: "#4B3A33" }}>{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Location */}
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-2 p-4 rounded-lg"
                  style={{
                    background: "rgba(255, 255, 255, 0.5)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(172, 153, 144, 0.2)",
                  }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "#8C4F58" }} />
                  <span className="text-sm" style={{ color: "#4B3A33" }}>
                    Nexus Clinic KL | Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
                  </span>
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInRight} className="relative">
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                    boxShadow: "0 20px 40px -15px rgba(75, 58, 51, 0.2)",
                  }}
                >
                  <div className="p-8 space-y-6">
                    <h3 className="text-2xl font-serif font-semibold" style={{ color: "#4B3A33" }}>
                      ED in Malaysia: The Numbers
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-3xl font-bold" style={{ color: "#8C4F58" }}>31.6%</p>
                        <p className="text-sm" style={{ color: "#AC9990" }}>Moderate to severe ED among adult men in Malaysia</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold" style={{ color: "#8C4F58" }}>69.5%</p>
                        <p className="text-sm" style={{ color: "#AC9990" }}>Prevalence of any ED among men over 40</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold" style={{ color: "#8C4F58" }}>89.2%</p>
                        <p className="text-sm" style={{ color: "#AC9990" }}>ED prevalence in men with diabetes or heart disease</p>
                      </div>
                    </div>
                    <div
                      className="p-4 rounded-lg"
                      style={{ background: "rgba(140, 79, 88, 0.1)" }}
                    >
                      <p className="text-sm font-medium" style={{ color: "#8C4F58" }}>
                        Only 1 in 5 affected men self-reports the problem
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ED at a Glance Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "#4B3A33" }}
            >
              ED Treatment Malaysia at a Glance: Causes, Symptoms and Treatment Options
            </motion.h2>

            <div className="overflow-x-auto">
              <table className="w-full rounded-3xl overflow-hidden" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr style={{ backgroundColor: "#8C4F58" }}>
                    <th className="p-4 text-left text-white font-georgia">Factor</th>
                    <th className="p-4 text-left text-white font-georgia">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "#F3EFEE", borderBottom: "1px solid #AC9990" }}>
                    <td className="p-4 font-semibold" style={{ color: "#4B3A33" }}>Definition</td>
                    <td className="p-4" style={{ color: "#AC9990" }}>Consistent or recurrent inability to attain and maintain an erection sufficient for satisfactory sexual intercourse</td>
                  </tr>
                  <tr style={{ backgroundColor: "rgba(255,255,255,0.7)", borderBottom: "1px solid #AC9990" }}>
                    <td className="p-4 font-semibold" style={{ color: "#4B3A33" }}>Prevalence in Malaysia</td>
                    <td className="p-4" style={{ color: "#AC9990" }}>31.6% moderate to severe ED; 69.5% among men over 40; 89.2% among men with diabetes or heart disease</td>
                  </tr>
                  <tr style={{ backgroundColor: "#F3EFEE", borderBottom: "1px solid #AC9990" }}>
                    <td className="p-4 font-semibold" style={{ color: "#4B3A33" }}>Treatment Options Available</td>
                    <td className="p-4" style={{ color: "#AC9990" }}>Oral medications (PDE5 inhibitors) | Shockwave therapy (Li-ESWT) | PRP therapy (P-Shot) | Testosterone therapy | Intracavernosal injection therapy | Vacuum erection devices | Psychological counselling</td>
                  </tr>
                  <tr style={{ backgroundColor: "rgba(255,255,255,0.7)", borderBottom: "1px solid #AC9990" }}>
                    <td className="p-4 font-semibold" style={{ color: "#4B3A33" }}>Assessment Required</td>
                    <td className="p-4" style={{ color: "#AC9990" }}>Comprehensive history, IIEF-5 questionnaire, blood panel, cardiovascular risk assessment</td>
                  </tr>
                  <tr style={{ backgroundColor: "#F3EFEE" }}>
                    <td className="p-4 font-semibold" style={{ color: "#4B3A33" }}>ED as a Cardiovascular Signal</td>
                    <td className="p-4" style={{ color: "#AC9990" }}>ED in men over 40 is a sentinel marker for cardiovascular disease; predicts future CVD, diabetes and hypertension</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <motion.div variants={fadeInUp} className="mt-8 text-center">
              <p className="text-lg italic" style={{ color: "#8C4F58" }}>
                Speak to a Doctor About Erectile Dysfunction | Confidential Assessment at Nexus Clinic KL
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Causes of ED - Type to Treatment Matching Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-6 text-center"
              style={{ color: "#4B3A33" }}
            >
              Causes of Erectile Dysfunction: The ED Cause-to-Treatment Matching Framework
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-center mb-12 max-w-3xl mx-auto"
              style={{ color: "#AC9990" }}
            >
              Every Malaysian ED page lists treatment options without explaining that the correct treatment depends entirely on which causes are active. This table maps ED types to distinguishing features, causes, and evidence-based first-line treatments.
            </motion.p>

            <div className="overflow-x-auto">
              <table className="w-full rounded-3xl overflow-hidden" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr style={{ backgroundColor: "#8C4F58" }}>
                    <th className="p-4 text-left text-white font-georgia">Type of ED</th>
                    <th className="p-4 text-left text-white font-georgia">How to Recognise It</th>
                    <th className="p-4 text-left text-white font-georgia">Common Causes</th>
                    <th className="p-4 text-left text-white font-georgia">First-Line Treatment</th>
                    <th className="p-4 text-left text-white font-georgia">Prognosis</th>
                  </tr>
                </thead>
                <tbody>
                  {edTypeTable.map((item, idx) => (
                    <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? "rgba(255,255,255,0.7)" : "#FAF8F7", borderBottom: "1px solid #AC9990" }}>
                      <td className="p-4 font-semibold" style={{ color: "#4B3A33" }}>{item.type}</td>
                      <td className="p-4 text-sm" style={{ color: "#AC9990" }}>{item.recognition}</td>
                      <td className="p-4 text-sm" style={{ color: "#AC9990" }}>{item.causes}</td>
                      <td className="p-4 text-sm" style={{ color: "#AC9990" }}>{item.firstLine}</td>
                      <td className="p-4 text-sm" style={{ color: "#AC9990" }}>{item.prognosis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <motion.div variants={fadeInUp} className="mt-8 p-6 rounded-xl text-center" style={{ backgroundColor: "#4B3A33" }}>
              <p className="text-white">
                Find Out What Is Causing Your ED at Nexus Clinic KL | Cause-First Assessment Before Any Treatment
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ED as Cardiovascular Signal Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-6 text-center"
              style={{ color: "#4B3A33" }}
            >
              Erectile Dysfunction as a Cardiovascular Signal: What Most ED Clinics Do Not Tell You
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-center mb-12 max-w-3xl mx-auto"
              style={{ color: "#AC9990" }}
            >
              No ED competitor page in Malaysia communicates the most clinically significant fact about ED in men over 40: that it is a documented sentinel marker for cardiovascular disease.
            </motion.p>

            <div className="overflow-x-auto">
              <table className="w-full rounded-3xl overflow-hidden" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr style={{ backgroundColor: "#8C4F58" }}>
                    <th className="p-4 text-left text-white font-georgia">Clinical Observation</th>
                    <th className="p-4 text-left text-white font-georgia">The Evidence in Malaysian Context</th>
                    <th className="p-4 text-left text-white font-georgia">What This Means for ED Treatment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ backgroundColor: "#F3EFEE", borderBottom: "1px solid #AC9990" }}>
                    <td className="p-4 font-semibold" style={{ color: "#4B3A33" }}>ED predicts future cardiovascular events in men over 40</td>
                    <td className="p-4 text-sm" style={{ color: "#AC9990" }}>Published Malaysian research confirms ED is the sentinel marker for CVD in men over 40; predicts future diabetes, hypertension, hyperlipidaemia and angina</td>
                    <td className="p-4 text-sm" style={{ color: "#AC9990" }}>A new ED diagnosis is treated as a prompt for cardiovascular risk stratification, not just a signal to prescribe oral medications</td>
                  </tr>
                  <tr style={{ backgroundColor: "rgba(255,255,255,0.7)", borderBottom: "1px solid #AC9990" }}>
                    <td className="p-4 font-semibold" style={{ color: "#4B3A33" }}>Blood vessels of the penis show disease before coronary arteries</td>
                    <td className="p-4 text-sm" style={{ color: "#AC9990" }}>Cavernous arteries are 1-2mm; coronary arteries are 3-4mm; same degree of narrowing causes 50-60% flow reduction to penis vs 10-15% to heart</td>
                    <td className="p-4 text-sm" style={{ color: "#AC9990" }}>ED may present 2-5 years before cardiac symptoms; men over 40 receive cardiovascular risk assessment at Nexus Clinic KL</td>
                   </tr>
                  <tr style={{ backgroundColor: "#F3EFEE", borderBottom: "1px solid #AC9990" }}>
                    <td className="p-4 font-semibold" style={{ color: "#4B3A33" }}>Malaysian men with diabetes and hypertension have ED rates above 80%</td>
                    <td className="p-4 text-sm" style={{ color: "#AC9990" }}>Primary care study found ED prevalence of 89.2% in men with diabetes or heart disease and 80.4% in hypertensive men</td>
                    <td className="p-4 text-sm" style={{ color: "#AC9990" }}>Only 21% of Malaysian men self-report ED despite 65.5% having measurable ED; men with existing conditions should be encouraged to raise the issue</td>
                   </tr>
                  <tr style={{ backgroundColor: "rgba(255,255,255,0.7)" }}>
                    <td className="p-4 font-semibold" style={{ color: "#4B3A33" }}>Treating ED safely in men with cardiac history</td>
                    <td className="p-4 text-sm" style={{ color: "#AC9990" }}>PDE5 inhibitors contraindicated with nitrate medications; combination produces severe unpredictable hypotension</td>
                    <td className="p-4 text-sm" style={{ color: "#AC9990" }}>Full medication review before any prescription; men on nitrates offered non-pharmacological options including shockwave therapy</td>
                   </tr>
                </tbody>
              </table>
            </div>

            <motion.div variants={fadeInUp} className="mt-8 p-6 rounded-xl text-center" style={{ backgroundColor: "#4B3A33" }}>
              <p className="text-white">
                Get a Cause-Based ED Assessment with Cardiovascular Risk Review at Nexus Clinic KL
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Oral Medications Comparison Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-6 text-center"
              style={{ color: "#4B3A33" }}
            >
              Oral Medications for Erectile Dysfunction: Choosing the Right Treatment Option for Malaysian Men
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-center mb-12 max-w-3xl mx-auto"
              style={{ color: "#AC9990" }}
            >
              Malaysian food culture, spontaneity preferences and specific health profiles all influence which oral medication produces the best real-world experience.
            </motion.p>

            <div className="overflow-x-auto">
              <table className="w-full rounded-3xl overflow-hidden" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr style={{ backgroundColor: "#8C4F58" }}>
                    <th className="p-4 text-left text-white font-georgia">Oral Medication</th>
                    <th className="p-4 text-left text-white font-georgia">Onset / Duration</th>
                    <th className="p-4 text-left text-white font-georgia">Food Effect</th>
                    <th className="p-4 text-left text-white font-georgia">Specific Side Effects</th>
                    <th className="p-4 text-left text-white font-georgia">Best For Malaysian Men</th>
                  </tr>
                </thead>
                <tbody>
                  {oralMedsTable.map((item, idx) => (
                    <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? "rgba(255,255,255,0.7)" : "#FAF8F7", borderBottom: "1px solid #AC9990" }}>
                      <td className="p-4 font-semibold" style={{ color: "#4B3A33" }}>{item.name}</td>
                      <td className="p-4 text-sm" style={{ color: "#AC9990" }}>{item.onset}</td>
                      <td className="p-4 text-sm" style={{ color: "#AC9990" }}>{item.foodEffect}</td>
                      <td className="p-4 text-sm" style={{ color: "#AC9990" }}>{item.sideEffects}</td>
                      <td className="p-4 text-sm" style={{ color: "#AC9990" }}>{item.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <motion.div variants={fadeInUp} className="mt-8 p-6 rounded-xl text-center" style={{ backgroundColor: "#4B3A33" }}>
              <p className="text-white">
                Get the Right Oral Medication Prescription for Your Lifestyle at Nexus Clinic KL
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Shockwave Therapy Evidence Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-6 text-center"
              style={{ color: "#4B3A33" }}
            >
              Shockwave Therapy for Erectile Dysfunction: Evidence, Patient Selection and Treatment Solutions
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-center mb-12 max-w-3xl mx-auto"
              style={{ color: "#AC9990" }}
            >
              No Malaysian competitor page explains who is and is not a good candidate, what the evidence actually shows about response rates, or what the regulatory status is.
            </motion.p>

            <div className="overflow-x-auto">
              <table className="w-full rounded-3xl overflow-hidden" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr style={{ backgroundColor: "#8C4F58" }}>
                    <th className="p-4 text-left text-white font-georgia">Clinical Question</th>
                    <th className="p-4 text-left text-white font-georgia">What the Evidence Shows</th>
                    <th className="p-4 text-left text-white font-georgia">How Nexus Clinic KL Applies This</th>
                  </tr>
                </thead>
                <tbody>
                  {shockwaveTable.map((item, idx) => (
                    <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? "rgba(255,255,255,0.7)" : "#F3EFEE", borderBottom: "1px solid #AC9990" }}>
                      <td className="p-4 font-semibold" style={{ color: "#4B3A33" }}>{item.question}</td>
                      <td className="p-4 text-sm" style={{ color: "#AC9990" }}>{item.evidence}</td>
                      <td className="p-4 text-sm" style={{ color: "#AC9990" }}>{item.application}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <motion.div variants={fadeInUp} className="mt-8 p-6 rounded-xl text-center" style={{ backgroundColor: "#4B3A33" }}>
              <p className="text-white">
                Find Out If Shockwave Therapy Is Right for Your ED at Nexus Clinic KL
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Treatment Options Overview Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "#4B3A33" }}
            >
              ED Treatment Options at Nexus Clinic KL: Oral Medications, Shockwave and More
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172,153,144,0.3)",
                }}
              >
                <Pill className="w-10 h-10 mb-4" style={{ color: "#8C4F58" }} />
                <h3 className="text-2xl font-georgia mb-4" style={{ color: "#4B3A33" }}>Oral Medications: PDE5 Inhibitors</h3>
                <p className="mb-4" style={{ color: "#AC9990" }}>
                  PDE5 inhibitors work by inhibiting the phosphodiesterase-5 enzyme, preventing cGMP breakdown and prolonging the vasodilatory effect of nitric oxide. They do not cause erections independently but amplify the natural response to sexual stimulation.
                </p>
                <p style={{ color: "#4B3A33" }}>
                  At Nexus Clinic KL, the specific oral medication prescribed is selected based on food habits, preference for spontaneity, existing cardiovascular medications, and side effect profile.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172,153,144,0.3)",
                }}
              >
                <Zap className="w-10 h-10 mb-4" style={{ color: "#8C4F58" }} />
                <h3 className="text-2xl font-georgia mb-4" style={{ color: "#4B3A33" }}>Shockwave Therapy (Li-ESWT)</h3>
                <p className="mb-4" style={{ color: "#AC9990" }}>
                  Low-intensity extracorporeal shockwave therapy delivers focused acoustic waves to penile tissues, stimulating angiogenesis through upregulation of VEGF and promoting regeneration of cavernous smooth muscle.
                </p>
                <p style={{ color: "#4B3A33" }}>
                  Sessions last 20-30 minutes. The standard programme is 6 sessions over 3 to 6 weeks. Most patients describe a mild tapping sensation with no significant discomfort.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172,153,144,0.3)",
                }}
              >
                <Sparkles className="w-10 h-10 mb-4" style={{ color: "#8C4F58" }} />
                <h3 className="text-2xl font-georgia mb-4" style={{ color: "#4B3A33" }}>PRP Therapy (P-Shot)</h3>
                <p className="mb-4" style={{ color: "#AC9990" }}>
                  Platelet-rich plasma therapy involves drawing blood, centrifuging it to isolate the platelet-rich plasma layer, and injecting it into specific penile locations. Growth factors promote tissue regeneration and improved blood flow.
                </p>
                <p style={{ color: "#4B3A33" }}>
                  Topical numbing cream is applied for 30-45 minutes before the session. Evidence remains in the emerging category; positioned as an adjunct to shockwave therapy.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-8 rounded-3xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(172,153,144,0.3)",
                }}
              >
                <HeartPulse className="w-10 h-10 mb-4" style={{ color: "#8C4F58" }} />
                <h3 className="text-2xl font-georgia mb-4" style={{ color: "#4B3A33" }}>Testosterone Therapy for Hormonal ED</h3>
                <p className="mb-4" style={{ color: "#AC9990" }}>
                  Men whose ED has a primary hormonal driver require testosterone restoration as part of their treatment plan. Testosterone is confirmed low on two fasting morning measurements with consistent symptoms.
                </p>
                <p style={{ color: "#4B3A33" }}>
                  Testosterone therapy alone may restore erections in purely hormonal ED. In mixed ED cases, combination therapy with testosterone plus PDE5 inhibitors provides synergistic benefit.
                </p>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mt-8 text-center">
              <p className="text-lg italic" style={{ color: "#8C4F58" }}>
                Book Your ED Treatment Consultation at Nexus Clinic KL | All Treatment Options Explained
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Pricing Table */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-6 text-center"
              style={{ color: "#4B3A33" }}
            >
              Cost of Erectile Dysfunction Treatment in Malaysia 2026: Transparent Pricing at Nexus Clinic KL
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-center mb-12 max-w-3xl mx-auto"
              style={{ color: "#AC9990" }}
            >
              All pricing is presented at the assessment consultation before any ED treatment begins. Oral medications are the most affordable ongoing option. Shockwave therapy programmes represent a more significant investment but address underlying blood flow.
            </motion.p>

            <div className="overflow-x-auto">
              <table className="w-full rounded-3xl overflow-hidden" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                <thead>
                  <tr style={{ backgroundColor: "#8C4F58" }}>
                    <th className="p-4 text-left text-white font-georgia">Service / Treatment</th>
                    <th className="p-4 text-left text-white font-georgia">Details</th>
                    <th className="p-4 text-left text-white font-georgia">Price Range (RM) 2026</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingItems.map((item, idx) => (
                    <tr key={idx} style={{ backgroundColor: idx % 2 === 0 ? "rgba(255,255,255,0.7)" : "#F3EFEE", borderBottom: "1px solid #AC9990" }}>
                      <td className="p-4 font-semibold" style={{ color: "#4B3A33" }}>{item.item}</td>
                      <td className="p-4 text-sm" style={{ color: "#AC9990" }}>{item.details}</td>
                      <td className="p-4 font-semibold" style={{ color: "#8C4F58" }}>{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <motion.div variants={fadeInUp} className="mt-8 text-center">
              <p className="text-lg" style={{ color: "#4B3A33" }}>
                Get Full ED Treatment Programme Pricing | Free Assessment at Nexus Clinic KL
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Pros and Cons Comparison */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-serif font-bold text-center mb-16"
              style={{ color: "#4B3A33" }}
            >
              ED Treatment Options at a Glance
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: Pill,
                  title: "Oral Medications",
                  pros: "Convenient, effective for most, non-invasive",
                  cons: "Food interactions (sildenafil), side effects, doesn't treat underlying cause",
                },
                {
                  icon: Zap,
                  title: "Shockwave Therapy",
                  pros: "Addresses vascular cause, no medication, sustained improvement",
                  cons: "Cost, multiple sessions required, only for vascular ED",
                },
                {
                  icon: Activity,
                  title: "Vacuum Devices",
                  pros: "Non-invasive, no medication, reusable",
                  cons: "Requires practice, unnatural erection, bruising possible",
                },
                {
                  icon: Syringe,
                  title: "Injections",
                  pros: "Effective for severe ED, works when pills don't",
                  cons: "Needle anxiety, risk of priapism, cost",
                },
                {
                  icon: Sparkles,
                  title: "PRP/Stem Cell",
                  pros: "Regenerative potential, natural",
                  cons: "Emerging evidence, cost, multiple sessions needed",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <item.icon className="w-8 h-8 mb-4" style={{ color: "#8C4F58" }} />
                  <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: "#4B3A33" }}>{item.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-1 shrink-0" style={{ color: "#4B3A33" }} />
                      <span className="text-sm" style={{ color: "#AC9990" }}>{item.pros}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 mt-1 shrink-0" style={{ color: "#8C4F58" }} />
                      <span className="text-sm" style={{ color: "#AC9990" }}>{item.cons}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Process Steps */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#FAF8F7" }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-12 text-center"
              style={{ color: "#4B3A33" }}
            >
              The ED Treatment Process at Nexus Clinic KL
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: 1, title: "Confidential Consultation", desc: "Comprehensive history, IIEF-5 assessment, medical and medication review", icon: MessageCircle },
                { step: 2, title: "Physical Examination", desc: "Cardiovascular risk assessment, blood pressure, genital examination", icon: Stethoscope },
                { step: 3, title: "Blood Panel", desc: "Testosterone, glucose, HbA1c, lipids, CBC, hormones", icon: TestTube },
                { step: 4, title: "Diagnosis & Plan", desc: "Cause identified, treatment options explained, pricing disclosed", icon: ClipboardList },
                { step: 5, title: "Treatment & Follow-up", desc: "Ongoing monitoring, dose adjustment, progress tracking", icon: Calendar },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(172, 153, 144, 0.3)",
                  }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold" style={{ backgroundColor: "#8C4F58", color: "white" }}>
                    {item.step}
                  </div>
                  <item.icon className="w-6 h-6 mx-auto mb-2" style={{ color: "#8C4F58" }} />
                  <h3 className="font-medium mb-1" style={{ color: "#4B3A33" }}>{item.title}</h3>
                  <p className="text-xs" style={{ color: "#AC9990" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p variants={fadeInUp} className="text-center mt-8" style={{ color: "#AC9990" }}>
              All consultations are completely confidential. You are welcome to attend alone.
            </motion.p>
          </div>
        </motion.section>

        {/* Why Nexus Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: "#F3EFEE" }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-georgia mb-6"
              style={{ color: "#4B3A33" }}
            >
              Cause-Based, Evidence-Matched Erectile Dysfunction Treatment at Nexus Clinic KL
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-8 max-w-4xl mx-auto"
              style={{ color: "#AC9990" }}
            >
              ED in Malaysia is undertreated, misdiagnosed as normal ageing and managed without the cause assessment that determines which treatment options will actually work. The 31.6% moderate to severe prevalence confirmed in the Malaysian National Health and Morbidity Survey represents hundreds of thousands of men who deserve better than a generic oral medications prescription without a conversation about causes, cardiovascular risk, and realistic treatment solutions.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg mb-12 max-w-4xl mx-auto"
              style={{ color: "#4B3A33" }}
            >
              At Nexus Clinic KL, every ED patient receives an assessment that identifies the types and causes before any treatment decision is made. The treatment plan is matched to those causes. Outcomes are discussed honestly, including what oral medications can and cannot do, who benefits from shockwave therapy and who does not, the role of a sex therapist for psychogenic ED, and what lifestyle changes produce real improvement.
            </motion.p>

            <motion.div
              variants={scaleIn}
              className="p-8 rounded-3xl max-w-3xl mx-auto"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(172, 153, 144, 0.3)",
              }}
            >
              <Building className="w-12 h-12 mx-auto mb-4" style={{ color: "#8C4F58" }} />
              <p className="mb-2 font-semibold" style={{ color: "#4B3A33" }}>
                Nexus Clinic KL
              </p>
              <p className="mb-4" style={{ color: "#AC9990" }}>
                Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
              </p>
              <p className="text-sm" style={{ color: "#4B3A33" }}>
                Serving patients from KL, Petaling Jaya, Bangsar, KLCC, Ampang, Mont Kiara, Penang and throughout Malaysia
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <FAQ data={faqs} />

        {/* CTA Section */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src={images.modernClinic}
              alt="Nexus Clinic Modern Facility"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(140, 79, 88, 0.9) 0%, rgba(171, 128, 104, 0.9) 100%)",
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div variants={staggerContainer} className="max-w-3xl mx-auto text-center">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-georgia mb-6 text-white">
                Book Your Confidential ED Treatment Assessment at Nexus Clinic KL
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-white/90 mb-8 text-lg">
                Wisma UOA II, Kuala Lumpur | Call or WhatsApp Today
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg font-medium flex items-center gap-2"
                  style={{ background: "white", color: "#8C4F58" }}
                >
                  Book Your Confidential Assessment
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Call or WhatsApp</span>
                  </div>
                </div>

                <p className="text-white/80 text-sm">
                  Serving patients from Kuala Lumpur, Damansara, Penang and throughout Malaysia
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
}