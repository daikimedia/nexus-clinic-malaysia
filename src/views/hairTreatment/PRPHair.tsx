"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  MapPin,
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  Shield,
  ArrowRight,
  AlertCircle,
  Activity,
  Zap,
  Eye,
  AlertTriangle,
  Droplet,
  TrendingUp,
  DollarSign,
  Layers,
  Users,
  Target,
  Syringe,
  Thermometer,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import Whatsapp from "../../components/Whatsapp";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import Image from "next/image";

interface PRPHairTreatmentProps {
  locale: string;
}

export default function PRPLandingPage({ locale }: PRPHairTreatmentProps) {
  const prpComparison = [
    { type: "Standard PRP", concentration: "1.5x to 3x baseline", density: "Moderate", application: "General scalp health maintenance and mild hair thinning" },
    { type: "High-Concentration PRP", concentration: "3x to 5x baseline", density: "High", application: "Androgenetic alopecia, moderate hair loss, post-transplant support" },
    { type: "Pure PRP (Leucocyte-poor)", concentration: "4x to 6x baseline", density: "Very High", application: "Sensitive scalp applications, facial skin rejuvenation, acne scar treatment" },
    { type: "Activated PRP (Calcium Chloride)", concentration: "Variable", density: "Maximised", application: "Dormant hair follicle reactivation, combined laser and PRP protocols" },
  ];

  const combinationTreatments = [
    { combination: "PRP + Minoxidil", mechanism: "PRP reactivates dormant follicles; minoxidil increases scalp blood flow simultaneously", bestFor: "Early-stage androgenetic alopecia in both men and women" },
    { combination: "PRP + Finasteride", mechanism: "PRP addresses follicle health from outside; finasteride blocks DHT causing internal follicle damage", bestFor: "Male pattern hair loss with active miniaturisation" },
    { combination: "PRP + Low-Level Laser Therapy", mechanism: "Laser activates follicles through photobiomodulation; PRP delivers growth factors at the same session", bestFor: "Accelerated regrowth, plateau-stage hair loss, post-PRP maintenance" },
    { combination: "PRP + FUE Hair Transplant", mechanism: "PRP injected at transplant site improves graft survival and accelerates new hair growth post-surgery", bestFor: "Post-transplant healing, maximising graft integration success rate" },
    { combination: "PRP + Mesotherapy", mechanism: "Mesotherapy delivers nutrient cocktail; PRP adds concentrated growth factors for synergistic scalp stimulation", bestFor: "Diffuse hair thinning with scalp nutrient deficiency component" },
    { combination: "PRP + Exosome Therapy", mechanism: "Exosomes deliver cellular signalling molecules; PRP provides growth factor concentration for dual cellular repair", bestFor: "Advanced hair thinning, post-transplant, or patients wanting maximum regenerative effect" },
  ];

  const aestheticApplications = [
    { application: "Hair Loss Treatment", whatItDoes: "Reactivates dormant hair follicles, improves hair density and thickness, strengthens existing follicles", sessions: "4 to 6 sessions, then quarterly maintenance" },
    { application: "Acne Scar Treatment", whatItDoes: "Collagen stimulation fills depressed scars, reduces redness, improves skin texture from within", sessions: "3 to 5 sessions, 4 to 6 weeks apart" },
    { application: "Facial Skin Rejuvenation", whatItDoes: "Promotes new collagen production, improves skin elasticity, reduces appearance of fine wrinkle lines", sessions: "3 to 4 sessions, then twice-yearly maintenance" },
    { application: "Under-Eye and Thin Skin", whatItDoes: "Thickens thin under-eye skin, reduces hollowing, improves skin quality in delicate areas", sessions: "2 to 4 sessions depending on degree of concern" },
    { application: "Post-Surgical Scar Reduction", whatItDoes: "Accelerates healing, reduces scar formation, improves skin quality at incision sites", sessions: "3 sessions starting from 6 to 8 weeks post-surgery" },
  ];

  const pricingTiers = [
    { treatment: "PRP Hair Treatment (Standard)", sessionType: "Per session", price: "RM 800 to RM 1,500" },
    { treatment: "PRP Hair Treatment (High-Concentration)", sessionType: "Per session", price: "RM 1,200 to RM 2,000" },
    { treatment: "PRP Hair Package (4 sessions)", sessionType: "Package rate", price: "RM 2,800 to RM 5,500" },
    { treatment: "PRP Hair Package (6 sessions)", sessionType: "Package rate", price: "RM 4,200 to RM 8,000" },
    { treatment: "PRP Facial Skin Rejuvenation", sessionType: "Per session", price: "RM 800 to RM 1,500" },
    { treatment: "PRP Acne Scar Treatment", sessionType: "Per session", price: "RM 900 to RM 1,600" },
    { treatment: "Combined PRP + Laser Session", sessionType: "Per combined session", price: "RM 1,200 to RM 2,500" },
  ];

  const faqData = [
    { q: "How does PRP therapy stop hair loss and stimulate regrowth?", a: "PRP therapy delivers a concentrated dose of your own growth factors directly to the scalp. These growth factors activate the stem cells in the dermal papilla of the hair follicle, extend the anagen (growth) phase of the hair cycle, and improve blood supply to the follicle. Follicles that have been miniaturised by DHT begin producing thicker, longer hairs, and follicles that have been suppressed into a dormant phase are reactivated to produce new hair growth. The treatment also reduces the scalp inflammation that accelerates follicle miniaturisation in androgenetic alopecia." },
    { q: "How many PRP hair treatment sessions do I need?", a: "Most patients require four to six sessions spaced four to six weeks apart for the initial course. This is followed by maintenance treatments every three to six months depending on hair loss severity and individual response. Patients with mild to moderate hair thinning often see substantial improvement within three to four sessions. Those with more significant hair loss may need the full six-session course and quarterly maintenance to sustain results. Your doctor at Nexus Clinic KL will personalise the session schedule based on your scalp condition and treatment response." },
    { q: "Is PRP hair treatment painful?", a: "Most patients at Nexus Clinic KL report that PRP hair injections involve mild discomfort comparable to small pinprick sensations at each injection point. The level of discomfort is generally well tolerated without anaesthesia. For patients who prefer additional comfort, a topical numbing cream is applied to the scalp for twenty minutes before the injections begin. The injection session itself typically takes fifteen to twenty minutes, after which any scalp sensitivity resolves quickly." },
    { q: "Can PRP be combined with minoxidil or finasteride?", a: "Yes, and combining PRP with medical treatments generally produces better outcomes than either approach alone. Minoxidil increases scalp blood flow and prolongs the anagen phase independently of PRP, creating a synergistic environment for follicle recovery. Finasteride blocks DHT at the hormonal level, addressing the root cause of androgenetic alopecia while PRP addresses the current follicle health status. Your doctor will review your current medications and recommend which combination best matches your hair loss pattern." },
    { q: "How soon will I see results from PRP hair treatment?", a: "Most patients notice a reduction in daily hair shedding within four to six weeks of their first session. This is the first indicator that the treatment is working. Visible improvement in hair density and thickness typically becomes noticeable after three to four sessions, usually at three to four months from the start of treatment. The full benefit of a complete treatment course is visible at six months. Hair growth improvements continue to develop gradually, so the final assessment is best made at twelve months from the start of the programme rather than after a single session." },
    { q: "Does PRP treatment work for both men and women?", a: "Yes. PRP hair therapy is evidence-based for androgenetic alopecia in both male and female patients. Women with postpartum hair shedding, diffuse hair thinning, or early-stage pattern hair loss respond particularly well to PRP because their hair loss is typically less advanced than male pattern baldness and more follicles remain viable. Men with Norwood Stage 1 to 4 hair loss show the most consistent clinical response. Patients with fully bald scalps where follicles have been permanently lost do not respond to PRP because there are no viable follicles remaining to reactivate." },
    { q: "Can PRP be used for skin care as well as hair loss?", a: "Yes. PRP treatment uses the same concentrated growth factor preparation for both hair and skin applications. For skin care, PRP is injected into targeted areas to promote collagen production, improve skin texture, reduce the appearance of acne scars, and soften fine lines and wrinkle formation. The treatment rejuvenates skin from within by activating the skin's own repair mechanisms. At Nexus Clinic KL, combined hair and skin PRP sessions can be arranged for patients who want to address both concerns in a single clinic visit." },
    { q: "Are there any side effects from PRP hair treatment?", a: "Because PRP uses the patient's own blood, the risk of allergic reactions is essentially zero. The most common side effects are mild redness and minor swelling or tenderness at the injection sites, which typically subsides within a few hours to twenty-four hours for most patients. Occasional mild headache or scalp sensitivity on the day of treatment resolves without intervention. Bruising at the injection sites is uncommon but possible. Infection risk is negligible when the procedure is performed in a licensed clinic using sterile technique. Patients on blood-thinning medications should disclose this at consultation as it may affect suitability for the procedure." },
    { q: "Is PRP hair therapy a permanent solution to hair loss?", a: "PRP is not a permanent cure for androgenetic alopecia because the underlying genetic predisposition to hair loss continues. However, regular PRP maintenance sessions can significantly slow the progression of pattern hair loss and sustain the improvements in hair density and scalp health achieved during the initial treatment course. Patients who combine PRP with medical treatments like minoxidil and finasteride experience more sustained results because the medical treatments address the hormonal cause while PRP maintains follicle health. For permanent hair restoration in areas that have already become bald, a hair transplant remains the only surgical solution." },
    { q: "How do I know if I am a good candidate for PRP hair therapy?", a: "The ideal candidate for PRP hair therapy is a patient with early to moderate hair thinning where viable hair follicles are still present but underperforming. Patients with androgenetic alopecia at Norwood Stage 1 to 4 in men and Ludwig Stage 1 to 2 in women are the most responsive. Patients with alopecia areata, postpartum shedding, or stress-related hair loss also benefit from PRP. Patients who are not suitable include those who are pregnant or breastfeeding, patients with platelet disorders or clotting conditions, patients with active scalp infections, and heavy smokers whose platelet function may be significantly impaired. A scalp assessment at Nexus Clinic KL will confirm your suitability and provide a personalised treatment plan." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-prp-hair-treatment1.webp",
      after: "/images/B&A-hair/B&A-prp-hair-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-prp-hair-treatment2.webp",
      after: "/images/B&A-hair/B&A-prp-hair-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-prp-hair-treatment3.webp",
      after: "/images/B&A-hair/B&A-prp-hair-treatment3.webp",
    },
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-light to-rose/15" />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-rose/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-wine" />
                <span className="text-sm font-inter text-wine font-medium">Natural • Non-Surgical • Doctor-Performed</span>
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
              >
                PRP Hair Treatment in Malaysia for{" "}
                <span className="text-wine italic">Hair Loss, Scalp Health and Skin Rejuvenation</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-taupe font-inter leading-relaxed"
              >
                Hair loss responds to your own biology better than to any synthetic drug. PRP therapy harnesses this principle directly: a small blood sample is drawn, processed to concentrate platelets and growth factors, and injected into the scalp.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-brown font-inter"
              >
                At Nexus Clinic KL, PRP hair treatment is delivered as a personalised treatment programme within a fully licensed aesthetic clinic setting, with doctor-administered injections and a structured session schedule matched to your hair loss pattern and severity.
              </motion.p>

              <motion.div className="bg-wine/5 p-4 rounded-xl border-l-4 border-wine">
                <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Important Clinical Information
                </p>
                <p className="text-taupe font-inter text-sm mt-1">
                  PRP uses your own blood, making allergic reactions essentially impossible. It is a completely natural, non-surgical approach that stops hair shedding and promotes new hair growth in patients at early to moderate stages of hair loss.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeInLeft} 
                className="flex flex-col sm:flex-row gap-4 items-center justify-start pt-2"
              >
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-wine text-light px-8 py-4 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <Whatsapp message="Hi, I'm interested in PRP hair treatment at Nexus Clinic KL. I'd like to book a consultation." variant="light" />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <Image
                  src="/images/hair/prp-hair-treatment.webp"
                  alt="Nexus Clinic Kuala Lumpur - PRP Hair Treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream p-4 rounded-xl shadow-lg hidden md:block">
                <p className="font-inter font-bold text-brown">Natural Growth Factors</p>
                <p className="font-inter text-sm text-taupe">Your own platelets, concentrated</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-12 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-taupe/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-wine" />
                </div>
                <h2 className="font-georgia text-2xl md:text-3xl text-brown">Trust at a glance</h2>
              </div>
              <div className="hidden sm:block w-px h-8 bg-taupe/20" />
              <p className="text-taupe font-inter text-sm">Nexus Clinic Kuala Lumpur — Excellence in Aesthetic Medicine</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-4 border-y border-taupe/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Experience</p>
                  <p className="font-georgia text-brown font-bold text-lg">Over 15 Years</p>
                  <p className="font-inter text-taupe text-xs">Combined clinical experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Location</p>
                  <p className="font-georgia text-brown font-bold text-sm">Wisma UOA II, Jalan Pinang</p>
                  <p className="font-inter text-taupe text-xs">KLCC, 50450 Kuala Lumpur</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-wine/5 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Opening Hours</p>
                  <p className="font-georgia text-brown font-bold text-sm">Monday - Saturday</p>
                  <p className="font-inter text-taupe text-xs">9:00am – 6:00pm | Closed Sundays & PH</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">MOH Licensed</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Ministry of Health Malaysia licensed clinic</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Doctor-Performed</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Qualified doctor administers every session</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in PRP therapy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Natural, No Allergic Reaction Risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">4 to 6 Sessions for Initial Course</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Hair + Skin Applications</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Treatment Overview Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">PRP Hair Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Platelet-rich plasma therapy for hair restoration</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Session Duration", value: "45 to 60 minutes per session" },
              { icon: Heart, label: "Downtime", value: "Minimal. Redness subsides within hours." },
              { icon: Clock, label: "Treatment Frequency", value: "4 to 6 sessions, 4 to 6 weeks apart" },
              { icon: TrendingUp, label: "Visible Results", value: "3 to 6 months after starting" },
            ].map((item, idx) => (
              <div key={idx} className="bg-light p-5 rounded-xl border border-taupe/10 shadow-sm">
                <item.icon className="w-8 h-8 text-wine mb-3" />
                <p className="font-inter text-sm text-taupe">{item.label}</p>
                <p className="font-georgia text-md text-brown font-semibold">{item.value}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-8 bg-wine/5 rounded-2xl p-6 border border-wine/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="font-inter text-sm text-taupe">Source</p>
                <p className="font-georgia text-brown font-semibold">Patient's own blood. Completely natural.</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown font-semibold">Hair thinning, androgenetic alopecia, postpartum shedding</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Also Used For</p>
                <p className="font-georgia text-brown">Facial skin care: acne scars, wrinkle reduction, rejuvenation</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Consultation</p>
                <p className="font-georgia text-brown">Complimentary at Nexus Clinic KL</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About PRP Therapy | Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* PRP Quality and Concentration Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">PRP Quality and Platelet Concentration</h2>
            <p className="text-taupe font-inter">Understanding the difference in treatment outcomes</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">PRP Type</th>
                  <th className="p-4 text-left font-georgia">Platelet Concentration</th>
                  <th className="p-4 text-left font-georgia">Growth Factor Density</th>
                  <th className="p-4 text-left font-georgia">Best Application</th>
                </tr>
              </thead>
              <tbody>
                {prpComparison.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.type}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.concentration}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.density}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              Not all PRP treatments deliver the same clinical result. The therapeutic effect depends directly on the concentration of platelets in the final preparation. At Nexus Clinic KL, the PRP preparation protocol is calibrated to deliver therapeutically meaningful platelet concentrations for each application.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Combination Treatments Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">PRP in Combination with Other Treatments</h2>
            <p className="text-taupe font-inter">Enhanced results through multi-modal approach</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Combined Treatment</th>
                  <th className="p-4 text-left font-georgia">How They Work Together</th>
                  <th className="p-4 text-left font-georgia">Best For</th>
                </tr>
              </thead>
              <tbody>
                {combinationTreatments.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.combination}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.mechanism}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* PRP Aesthetic Applications Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">PRP Aesthetic Applications</h2>
            <p className="text-taupe font-inter">Beyond hair loss: skin rejuvenation and scar treatment</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Aesthetic Application</th>
                  <th className="p-4 text-left font-georgia">What PRP Does</th>
                  <th className="p-4 text-left font-georgia">Typical Sessions Needed</th>
                </tr>
              </thead>
              <tbody>
                {aestheticApplications.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.application}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.whatItDoes}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.sessions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* PRP Treatment Results Timeline Slider Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">PRP Hair Treatment Results Timeline</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">What to expect and when to see results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              variants={fadeInLeft}
              className="bg-light p-8 rounded-2xl border border-taupe/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown">Factors Affecting Response</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Individual healing response and biology</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>PRP concentration (standard vs high-concentration)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Underlying cause of hair loss (androgenetic vs telogen effluvium)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Consistency with treatment schedule</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Combination with medical treatments (minoxidil, finasteride)</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  Most patients notice reduced shedding within 4 to 6 weeks. Visible improvement in density typically becomes noticeable after 3 to 4 sessions.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-wine p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-georgia text-2xl font-bold">Improvement Timeline</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Reduced Shedding</span>
                    <span className="font-georgia text-xl font-bold text-white">4 to 6 weeks</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "25%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">First indicator that treatment is working</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Visible Regrowth</span>
                    <span className="font-georgia text-xl font-bold text-white">3 to 4 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "55%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">After 3 to 4 sessions</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Full Benefit</span>
                    <span className="font-georgia text-xl font-bold text-white">6 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Complete initial course assessment</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Maintenance</span>
                    <span className="font-georgia text-xl font-bold text-white">Quarterly</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Every 3 to 6 months for sustained results</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Final assessment is best made at 12 months from the start of the programme rather than after a single session.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-taupe font-inter text-sm">
              ✨ PRP is not a permanent cure for androgenetic alopecia. Regular maintenance sessions significantly slow progression and sustain improvements achieved during the initial course.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* PRP Treatment Process Steps */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The PRP Treatment Process at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Scalp Assessment", desc: "Doctor examines hair loss pattern, scalp health, and determines if PRP is appropriate for your condition." },
              { step: "02", title: "Blood Draw", desc: "Small blood sample (10 to 20ml) drawn from arm, same as routine blood test. No fasting required." },
              { step: "03", title: "Centrifuge Processing", desc: "Blood spun in calibrated centrifuge to separate and concentrate platelet-rich plasma layer." },
              { step: "04", title: "Scalp Numbing", desc: "Topical numbing cream applied for patient comfort. Most patients find injections well-tolerated." },
              { step: "05", title: "PRP Injections", desc: "Concentrated PRP injected into thinning areas using fine-gauge needle in grid pattern." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-lg mx-auto mb-3 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-georgia text-sm text-brown mb-1 font-semibold">{item.title}</h3>
                <p className="text-taupe font-inter text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-10">
            <button className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2">
              Book Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-taupe text-sm mt-3">PRP therapy for hair and skin at Nexus Clinic KL</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">PRP Hair Treatment Cost in Malaysia 2026</h2>
            <p className="text-taupe font-inter">Transparent pricing at Nexus Clinic KL</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Treatment</th>
                  <th className="p-4 text-left font-georgia">Session Type</th>
                  <th className="p-4 text-left font-georgia">Price Range (RM) 2026</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, idx) => (
                  <tr key={idx} className="border-t border-taupe/10">
                    <td className="p-4 font-inter font-semibold text-brown">{tier.treatment}</td>
                    <td className="p-4 font-inter text-taupe text-sm">{tier.sessionType}</td>
                    <td className="p-4 font-inter font-semibold text-wine">{tier.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-wine/5">
                  <td colSpan={3} className="p-4 text-taupe font-inter text-sm italic">
                    Package rates for multiple sessions represent the most cost-effective approach for patients committing to a full course of treatment. All consultations are complimentary at Nexus Clinic KL.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get Your Personalised PRP Treatment Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Before After Section */}
      <SectionBeforeAfter transformations={transformations} />

      {/* FAQ Section */}
      <FAQ data={faqData} />
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-3xl md:text-5xl text-light">
              Start Your PRP Hair Treatment Journey at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              PRP is a non-surgical, natural approach to hair restoration using your own biology. For patients in Kuala Lumpur, Selangor, and across Malaysia who are not ready for surgical options, PRP therapy provides a clinically evidence-based first step.
            </p>
            <p className="text-cream/90 font-inter">
              Our licensed doctors bring over 15 years of combined experience, perform every procedure personally, and use only MOH-approved techniques. One biological mechanism. Multiple aesthetic results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <Whatsapp 
                message="Hi, I'd like to book a consultation for PRP hair treatment at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available | Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors">Call: 016-7025699</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors">WhatsApp: 03-21635699</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}