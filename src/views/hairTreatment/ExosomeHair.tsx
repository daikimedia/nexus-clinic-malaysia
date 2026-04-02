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
  FlaskRound,
  Microscope,
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

interface ExosomeHairTreatmentProps {
  locale: string;
}

export default function ExosomeLanding({ locale }: ExosomeHairTreatmentProps) {
  const exosomeProductTiers = [
    { tier: "Standard Clinical Grade", concentration: "100 to 200 billion exosomal vesicles per vial", bestFor: "Early hair thinning, scalp health maintenance, combined sessions", characteristics: "Stable, purified, biocompatible. Suitable for most patients." },
    { tier: "Advanced Concentration (HRLV)", concentration: "200 to 500 billion vesicles per vial", bestFor: "Moderate to significant androgenetic alopecia, post-transplant support", characteristics: "Hair-specific RNA and growth factor payload. Targets follicle regeneration pathway directly." },
    { tier: "Premium Multi-Protein Formula", concentration: "500 billion+ vesicles. Enriched with targeted RNA cargo.", bestFor: "Advanced hair loss, thinning hair unresponsive to PRP, maximum regeneration cases", characteristics: "Includes specific mRNA sequences that reprogram ageing follicle cells. Deepest cellular repair." },
    { tier: "Skin Rejuvenation Grade (SRLV)", concentration: "100 to 300 billion vesicles. Collagen-pathway optimised.", bestFor: "Facial skin and scalp rejuvenation, signs of aging, improve skin texture", characteristics: "Collagen and elastin stimulation primary. Also benefits scalp skin layer." },
  ];

  const treatmentComparison = [
    { factor: "Source", exosome: "Stem cell-derived exosomes. Lab-prepared vial. No blood draw.", prp: "Patient's own blood. Centrifuged to concentrate platelets.", mesotherapy: "Pharmaceutical cocktail of vitamins, amino acids, growth factors." },
    { factor: "Growth Factor Density", exosome: "3x to 5x higher than PRP. Standardised per vial.", prp: "Variable. Depends on patient's platelet count and centrifuge quality.", mesotherapy: "Moderate. Depends on cocktail formulation and concentration." },
    { factor: "Cellular Mechanism Depth", exosome: "Deepest. mRNA reprogramming of ageing follicle cells.", prp: "Growth factor stimulation of stem cells in dermal papilla.", mesotherapy: "Nutritional and hormonal environment optimisation at mesoderm layer." },
    { factor: "Customisation", exosome: "Product tier selection. Not ingredient-customisable.", prp: "Blood concentration only. Not ingredient-customisable.", mesotherapy: "Fully customisable cocktail per hair loss type and patient condition." },
    { factor: "Sessions Required", exosome: "1 to 4 sessions. Less frequent due to potency.", prp: "4 to 6 sessions, 4 to 6 weeks apart.", mesotherapy: "6 to 10 sessions, 2 to 4 weeks apart." },
    { factor: "Best For", exosome: "Advanced thinning hair, post-transplant, patients wanting maximum regeneration.", prp: "Moderate hair loss, androgenetic alopecia, good first-line regenerative option.", mesotherapy: "Nutritional deficiency hair loss, early thinning, fully customisable DHT-targeting." },
    { factor: "Cost per Session (Malaysia)", exosome: "RM 1,500 to RM 4,000", prp: "RM 800 to RM 2,000", mesotherapy: "RM 400 to RM 900" },
  ];

  const follicleRegenerationTimeline = [
    { timeframe: "Days 1 to 7", follicleLevel: "Exosomes bind to follicle receptor sites. Cellular signalling cascade begins. Anti-inflammatory proteins reduce scalp inflammation.", patientNotices: "Mild scalp sensitivity resolves. No visible change yet. Reduced scalp tightness reported by some patients." },
    { timeframe: "Week 2 to 3", follicleLevel: "Growth factors and proteins activate dormant hair follicles and stimulate transition from telogen to anagen phase.", patientNotices: "Reduced daily hair fall noticeable. First measurable sign the exosome therapy works." },
    { timeframe: "Month 1 to 2", follicleLevel: "New cellular activity building in previously dormant follicles. Blood supply improved by VEGF-pathway signalling.", patientNotices: "Very fine new hair growth visible at hairline or thinning areas. Hair density beginning to improve." },
    { timeframe: "Month 2 to 3", follicleLevel: "Hair follicle regeneration progressing. New hairs thickening and extending. Existing thin hairs gaining calibre.", patientNotices: "Visible new hair growth. Hair thinning areas showing meaningful coverage. Hair condition notably improved." },
    { timeframe: "Month 3 to 6", follicleLevel: "Anagen phase extended by exosome-mediated growth cycle reprogramming. Hair density and thickness continue building.", patientNotices: "Full hair density improvement measurable. Luscious, healthier hair texture clearly different from baseline." },
    { timeframe: "Month 6 and Beyond", follicleLevel: "Follicle health sustained by completed cellular regeneration. Maintenance session recommended every 6 to 12 months.", patientNotices: "Full result established. Maintenance ensures continued follicle vitality and hair density preservation." },
  ];

  const pricingTiers = [
    { treatment: "Exosome Hair Loss Treatment (Standard)", sessionType: "Per session", price: "RM 1,500 to RM 2,500" },
    { treatment: "Advanced Exosome Hair Therapy (HRLV)", sessionType: "Per session", price: "RM 2,200 to RM 3,500" },
    { treatment: "Premium Exosome Hair Package (3 sessions)", sessionType: "Package", price: "RM 5,500 to RM 9,000" },
    { treatment: "Exosome Skin Rejuvenation (Face)", sessionType: "Per session", price: "RM 1,500 to RM 2,800" },
    { treatment: "Combined Exosome Hair + Skin Session", sessionType: "Per combined session", price: "RM 2,500 to RM 4,500" },
    { treatment: "Exosome + Microneedling Protocol", sessionType: "Per session", price: "RM 1,800 to RM 3,200" },
    { treatment: "Post-Transplant Exosome Support", sessionType: "Per session (post-FUE)", price: "RM 1,800 to RM 3,000" },
  ];

  const faqData = [
    { q: "What are exosomes and how are they different from stem cell therapy?", a: "Exosomes are extracellular vesicles produced by stem cells as biological messenger particles. They carry the repair and regeneration signals of the stem cell without containing the stem cell itself. Unlike stem cell therapy, which introduces living cells into the body, exosome hair treatment uses only the cellular messages, which are non-cellular and therefore carry no risk of immune rejection or uncontrolled cell proliferation. The clinical advantage is that all the regenerative signals of stem cells are delivered in a stable, consistent, injectable format without the regulatory complexity of live cell transplantation." },
    { q: "How does exosome therapy compare to PRP for hair loss?", a: "Exosomes deliver three to five times more growth factors than PRP at a standardised, consistent concentration. PRP is derived from the patient's own blood, meaning the quality and concentration varies based on individual platelet count, which changes with age, health status, and medications. Exosome products are prepared from stem cells to a fixed concentration per vial, ensuring a reliable and predictable therapeutic dose in every session. For patients who have not responded to PRP or who want the most potent non-surgical hair loss solution available, exosome therapy offers a meaningfully superior mechanism." },
    { q: "Is exosome hair loss treatment painful?", a: "The treatment involves injections into the scalp, which are made essentially painless by applying a topical numbing cream for 20 minutes before the session begins. The microinjections themselves are then experienced as mild pressure sensations rather than pain by the vast majority of patients. Post-session scalp sensitivity is minimal and resolves within 24 hours. Patients who choose microneedling delivery of the exosome serum rather than direct injection report a similar level of comfort with the same numbing cream preparation." },
    { q: "Who is suitable for exosome hair loss therapy?", a: "Suitable candidates include men and women with androgenetic alopecia, diffuse hair thinning, postpartum hair loss, or stress-related hair fall where viable hair follicles are still present in the scalp. Exosome therapy is also highly effective as post-FUE transplant support to improve graft integration and accelerate new hair growth after surgery. Patients who have not responded adequately to PRP or mesotherapy and want a more potent regenerative approach are ideal candidates. Exosome treatment is not recommended during pregnancy or breastfeeding, or for patients with active scalp infections or certain autoimmune conditions affecting the scalp." },
    { q: "How many exosome sessions will I need?", a: "The number of sessions required depends on the severity of the hair loss and the patient's response to the initial session. Patients with mild to moderate hair thinning typically see strong results from two to three sessions. Patients with more advanced hair loss or those using exosome therapy as post-transplant support may need three to four sessions. Unlike mesotherapy or PRP which require ongoing regular sessions, exosome therapy typically needs fewer sessions due to its superior potency. Maintenance sessions every six to twelve months are recommended to sustain the results as the natural ageing process continues." },
    { q: "When will I see results from exosome hair treatment?", a: "Most patients notice a reduction in hair fall within two to four weeks of the first session, which is the first measurable sign that the exosome therapy works. Very fine new hair growth becomes visible from month two to three. Meaningful improvement in hair density and thickness is measurable at month three to six. The full result of a complete treatment programme is best assessed at six months from the start of treatment. Patients using exosome therapy in combination with other hair loss solutions such as minoxidil or laser therapy may see faster and more noticeable progression than those using exosomes alone." },
    { q: "Can exosome therapy be used for skin rejuvenation as well as hair?", a: "Yes. The same regenerative mechanism that reactivates dormant hair follicles also stimulates collagen and elastin production in skin cells, reduces the signs of aging, and improves overall skin texture when applied to the face. Patients at Nexus Clinic KL can receive combined hair and skin sessions, addressing both concerns in a single visit. Exosome therapy for the face is delivered either through microinjections or through a microneedling delivery protocol that drives the exosomal serum into the dermis for maximum cellular uptake." },
    { q: "Is exosome hair therapy safe?", a: "Yes. Clinical-grade exosome products are non-cellular, meaning they contain no DNA from the source stem cells and cannot trigger an immune rejection response. They are purified, standardised, and tested for microbial contamination before use. The treatment uses the same injection technique as PRP or mesotherapy, performed by a licensed doctor in a fully registered aesthetic clinic. The risk profile is very low when medical-grade products are used and the procedure is performed in a properly equipped clinical setting. At Nexus Clinic KL, all exosome products used are sourced from verified clinical-grade manufacturers." },
    { q: "Can exosome treatment be combined with other hair loss treatments?", a: "Yes, and combination approaches often produce the best overall outcomes. Treatments like exosome therapy combined with PRP provide both the potent regenerative signal of exosomes and the growth factor stimulation of the patient's own platelets. Exosomes can also be combined with laser therapy to improve scalp blood circulation alongside follicle regeneration. For patients undergoing or planning a hair transplant, post-procedure exosome sessions significantly improve graft survival and new hair growth timelines." },
    { q: "How do I make an appointment for exosome hair loss treatment at Nexus Clinic KL?", a: "Contact us at Nexus Clinic KL, located at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur. The initial consultation and scalp assessment are complimentary. During this visit, the doctor will review your hair condition, assess your scalp under magnification, confirm your suitability for exosome hair therapy, and design a personalized treatment plan matched to your specific hair loss pattern and goals. We welcome patients from across KL, Malaysia, and international patients seeking the most advanced non-surgical hair loss solutions currently available in regenerative medicine." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-exesome-hair-treatment1.webp",
      after: "/images/B&A-hair/B&A-exesome-hair-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-exesome-hair-treatment2.webp",
      after: "/images/B&A-hair/B&A-exesome-hair-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-exesome-hair-treatment3.webp",
      after: "/images/B&A-hair/B&A-exesome-hair-treatment3.webp",
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
                <span className="text-sm font-inter text-wine font-medium">Advanced Regenerative • No Blood Draw</span>
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
              >
                Exosome Hair Loss Treatment in Malaysia for{" "}
                <span className="text-wine italic">Advanced Hair Regeneration</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-taupe font-inter leading-relaxed"
              >
                Clinical trial data does not lie. Exosomes deliver three to five times more growth factors and proteins than PRP to the hair follicle, without requiring any blood draw from the patient.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-brown font-inter"
              >
                Exosomes are tiny extracellular vesicles that carry a payload of growth factors, messenger RNA, microRNA, and signalling molecules that instruct recipient cells to repair, regenerate, and resume normal function. When injected into the scalp, they deliver this cellular repair programme directly to dormant hair follicles.
              </motion.p>

              <motion.div className="bg-wine/5 p-4 rounded-xl border-l-4 border-wine">
                <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Important Clinical Information
                </p>
                <p className="text-taupe font-inter text-sm mt-1">
                  Nexus Clinic KL is among the first in Malaysia to offer advanced exosome hair loss treatment. Every patient receives a complimentary consultation and a personalized treatment plan before any treatment begins.
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
                <Whatsapp message="Hi, I'm interested in exosome hair treatment at Nexus Clinic KL. I'd like to book a consultation." variant="light" />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <Image
                  src="/images/hair/exesome-hair-treatment.webp"
                  alt="Nexus Clinic Kuala Lumpur - Exosome Hair Treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream p-4 rounded-xl shadow-lg hidden md:block">
                <p className="font-inter font-bold text-brown">3x to 5x More Growth Factors</p>
                <p className="font-inter text-sm text-taupe">Than PRP • Standardised per vial</p>
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
                    <p className="font-inter text-taupe text-xs leading-relaxed">Licensed doctor administers every session</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in regenerative medicine</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">3x to 5x More Growth Factors than PRP</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">No Blood Draw Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">1 to 4 Sessions Typically Needed</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Exosome Hair Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Advanced regenerative therapy for hair restoration</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Session Duration", value: "60 to 90 minutes per session" },
              { icon: Heart, label: "Downtime", value: "Minimal. Redness resolves within 24 hours." },
              { icon: Clock, label: "Sessions Required", value: "1 to 4 sessions depending on severity" },
              { icon: TrendingUp, label: "Visible Results", value: "2 to 4 weeks (reduced shedding)" },
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
                <p className="font-georgia text-brown font-semibold">Stem cell-derived exosomes. No blood draw required.</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Growth Factor Concentration</p>
                <p className="font-georgia text-brown font-semibold">3x to 5x higher than PRP. Standardised per vial.</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Also Used For</p>
                <p className="font-georgia text-brown">Skin and scalp regeneration, signs of aging, improve skin texture</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Consultation</p>
                <p className="font-georgia text-brown">Complimentary at Nexus Clinic KL</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Exosome Hair Therapy | Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Exosome Product Tiers Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Exosome Product Tiers</h2>
            <p className="text-taupe font-inter">Understanding the difference in treatment outcomes</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Exosome Product Tier</th>
                  <th className="p-4 text-left font-georgia">Growth Factor Concentration</th>
                  <th className="p-4 text-left font-georgia">Best Application</th>
                  <th className="p-4 text-left font-georgia">Key Characteristics</th>
                </tr>
              </thead>
              <tbody>
                {exosomeProductTiers.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.tier}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.concentration}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.bestFor}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.characteristics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Exosome vs PRP vs Mesotherapy Comparison Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Exosome vs PRP vs Mesotherapy</h2>
            <p className="text-taupe font-inter">Which hair loss treatment is right for you?</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Factor</th>
                  <th className="p-4 text-left font-georgia">Exosome Therapy</th>
                  <th className="p-4 text-left font-georgia">PRP (Platelet-Rich Plasma)</th>
                  <th className="p-4 text-left font-georgia">Mesotherapy</th>
                </tr>
              </thead>
              <tbody>
                {treatmentComparison.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.factor}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.exosome}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.prp}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.mesotherapy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Follicle Regeneration Timeline Slider Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Exosome Hair Treatment Results Timeline</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">What to expect and when to see results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-2xl border border-taupe/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-wine" />
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
                  <span>Exosome product concentration and quality</span>
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
                  <span>Combination with other hair loss treatments</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  Most patients notice reduced shedding within 2 to 4 weeks. Visible improvement in density typically becomes noticeable after 2 to 3 months.
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
                <h3 className="font-georgia text-2xl font-bold">Follicle Regeneration Timeline</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Reduced Shedding</span>
                    <span className="font-georgia text-xl font-bold text-white">Week 2 to 3</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "25%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">First measurable sign exosome therapy works</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">New Hair Growth Visible</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 1 to 2</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "45%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Very fine new hair growth at hairline or thinning areas</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Meaningful Improvement</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 2 to 3</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Hair thinning areas showing meaningful coverage</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Full Density Improvement</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 3 to 6</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Full hair density improvement measurable</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Maintenance</span>
                    <span className="font-georgia text-xl font-bold text-white">Every 6 to 12 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1, delay: 1.0 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Maintenance ensures continued follicle vitality</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Full result of a complete treatment programme is best assessed at 6 months from the start of treatment.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-taupe font-inter text-sm">
              ✨ Unlike PRP which requires ongoing regular sessions, exosome therapy typically needs fewer sessions due to its superior potency. Maintenance sessions every 6 to 12 months sustain the results.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Follicle Regeneration Timeline Detailed Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Follicle Regeneration Timeline</h2>
            <p className="text-taupe font-inter">What happens at the follicle level vs what the patient notices</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Timeframe After First Session</th>
                  <th className="p-4 text-left font-georgia">What Happens at the Follicle Level</th>
                  <th className="p-4 text-left font-georgia">What the Patient Notices</th>
                </tr>
              </thead>
              <tbody>
                {follicleRegenerationTimeline.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.timeframe}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.follicleLevel}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.patientNotices}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Exosome Treatment Process Steps */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Exosome Hair Loss Treatment Process</h2>
            <p className="text-taupe font-inter">Step by step at Nexus Clinic KL</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation & Health Screening", desc: "Doctor reviews hair loss history, current medications, scalp condition. Scalp analysis under magnification confirms follicle density and thinning areas." },
              { step: "02", title: "Scalp Preparation & Numbing", desc: "Topical numbing cream applied to scalp for 20 minutes. Scalp cleaned with antiseptic before session begins." },
              { step: "03", title: "Exosome Delivery", desc: "Exosome solution injected into scalp using fine-gauge needle at dermal papilla level in systematic pattern across thinning areas." },
              { step: "04", title: "Aftercare Instructions", desc: "Patients advised to avoid washing hair for 24 hours, avoid strenuous exercise and direct sun exposure for 48 hours." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="text-center">
                <div className="w-14 h-14 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mx-auto mb-4 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-georgia text-lg text-brown mb-2 font-semibold">{item.title}</h3>
                <p className="text-taupe font-inter text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-10">
            <button className="bg-wine text-light px-8 py-3 rounded-full font-georgia text-lg hover:bg-wine/90 transition-all shadow-lg inline-flex items-center gap-2">
              Book Your Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-taupe text-sm mt-3">Advanced regenerative exosome therapy at Nexus Clinic KL</p>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Exosome Hair Treatment Cost in Malaysia 2026</h2>
            <p className="text-taupe font-inter">Transparent pricing at Nexus Clinic KL</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Exosome Treatment Package</th>
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
                    Exosome hair loss treatment is the premium tier of regenerative hair therapy available in Malaysia. All consultations are complimentary at Nexus Clinic KL. Final pricing confirmed after scalp assessment.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get Your Personalised Exosome Treatment Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Skin Rejuvenation Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Exosome Treatment for Skin Rejuvenation</h2>
            <p className="text-taupe font-inter">Beyond hair: regenerative aesthetics for face and scalp</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border-l-4 border-wine">
            <p className="text-brown font-inter mb-4">The same regenerative mechanisms that make exosomes highly effective for hair follicle regeneration also make them one of the most powerful tools available in regenerative aesthetics for skin and scalp rejuvenation.</p>
            <ul className="space-y-2 text-taupe font-inter text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Stimulates collagen and elastin production in the dermis</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Reduces signs of aging and improves skin texture</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Accelerates cellular renewal at a deeper level than topicals</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Combined hair and skin sessions available in one appointment</span>
              </li>
            </ul>
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
              Start Your Exosome Hair Treatment Journey at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Exosomes deliver three to five times more growth factors than PRP to the hair follicle. They represent a fundamental advance beyond platelet-rich plasma in both the concentration and specificity of the cellular signals they deliver to the scalp.
            </p>
            <p className="text-cream/90 font-inter">
              Our licensed doctors bring over 15 years of combined experience, perform every procedure personally, and use only medical-grade, clinically tested exosome products. Every patient receives a complimentary consultation and a personalized treatment plan before any treatment begins.
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
                message="Hi, I'd like to book a consultation for exosome hair treatment at Nexus Clinic KL. Please let me know available slots."
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