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
  Scissors,
  TrendingUp,
  DollarSign,
  Layers,
  Users,
  Stethoscope,
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

interface HairTransplantProps {
  locale: string;
}

export default function HairTransplantLanding({ locale }: HairTransplantProps) {
  const methodComparison = [
    { factor: "Extraction Method", fue: "Individual hair follicles extracted one by one using punch tool", dhi: "Individual follicles extracted using DHI implanter pen in single motion", fut: "Strip of skin removed from back of scalp, dissected into grafts" },
    { factor: "Scarring", fue: "Tiny circular dot scars. Not visible with normal hair length.", dhi: "Minimal. Similar to FUE but fewer incisions at recipient site.", fut: "Linear scar at donor area. Visible with very short hair." },
    { factor: "Graft Survival Rate", fue: "90 to 95%", dhi: "95 to 99% (less out-of-body time)", fut: "95 to 98%" },
    { factor: "Max Grafts Per Session", fue: "Up to 4,000 grafts", dhi: "Up to 4,000 grafts (time dependent)", fut: "Up to 4,500+ grafts" },
    { factor: "Recovery Time", fue: "7 to 10 days", dhi: "Fastest. 5 to 7 days", fut: "10 to 14 days" },
    { factor: "Best For", fue: "Most patients. Excellent natural results for hairline and crown.", dhi: "Dense packing, hairline precision, no full shave required.", fut: "Large sessions, extensive loss, or where maximum graft count is priority." },
    { factor: "Cost in Malaysia (per graft)", fue: "RM 8 to RM 12", dhi: "RM 10 to RM 15", fut: "RM 5 to RM 10" },
  ];

  const norwoodStages = [
    { stage: "Stage 1 to 2", pattern: "Minimal recession at temples. Early hairline movement.", grafts: "800 to 1,500", sessions: "1 session", bestMethod: "FUE or DHI" },
    { stage: "Stage 3", pattern: "Visible recession at temples. Hairline clearly moving back.", grafts: "1,500 to 2,500", sessions: "1 session", bestMethod: "FUE or DHI" },
    { stage: "Stage 3 Vertex", pattern: "Recession at temples plus early crown thinning.", grafts: "2,000 to 2,800", sessions: "1 to 2 sessions", bestMethod: "FUE or DHI" },
    { stage: "Stage 4", pattern: "Significant recession and crown loss. Band of hair between zones.", grafts: "2,500 to 3,200", sessions: "1 to 2 sessions", bestMethod: "FUE or FUT" },
    { stage: "Stage 5", pattern: "Recession and crown merging. Extensive balding area.", grafts: "3,000 to 4,000", sessions: "2 sessions", bestMethod: "FUE or FUT" },
    { stage: "Stage 6 to 7", pattern: "Near total hair loss. Only side and rear band remaining.", grafts: "3,500 to 4,500+", sessions: "2 to 3 sessions", bestMethod: "FUT or multiple FUE" },
  ];

  const growthTimeline = [
    { period: "Days 1 to 7", happening: "Grafts anchor in recipient site. Early healing begins. Scabs form around implanted follicles.", experience: "Mild swelling and redness. Scabs visible. Rest and gentle washing as instructed." },
    { period: "Weeks 2 to 3", happening: "Shock loss begins. Transplanted hair shafts fall out. Follicle roots remain intact.", experience: "Most transplanted hair appears to fall out. This is normal and expected." },
    { period: "Month 1 to 2", happening: "Follicles in dormant telogen phase. No visible hair growth at surface.", experience: "Scalp appears similar to pre-surgery. Patience required." },
    { period: "Month 3 to 4", happening: "New hair shafts begin emerging from transplanted follicles. Initial growth phase.", experience: "Fine baby hairs become visible. Early signs of hairline forming." },
    { period: "Month 5 to 6", happening: "Hair thickens progressively. Density continues building. Texture normalising.", experience: "Meaningful cosmetic improvement visible. Most patients begin styling transplanted area." },
    { period: "Month 8 to 10", happening: "Approximately 60 to 80% of final density achieved. Hair maturing.", experience: "Significant change in appearance. Confidence returning. Results clearly visible." },
    { period: "Month 12 to 15", happening: "Full density reached. Hair grows permanently at normal rate.", experience: "Final result. Natural-looking, full, permanent hair requiring normal grooming only." },
  ];

  const pricingTiers = [
    { package: "Hairline Restoration (FUE)", grafts: "1,000 to 1,500 grafts", price: "RM 8,000 to RM 18,000" },
    { package: "Crown Restoration (FUE)", grafts: "1,500 to 2,500 grafts", price: "RM 12,000 to RM 30,000" },
    { package: "Moderate Hair Loss (FUE)", grafts: "2,500 to 3,500 grafts", price: "RM 20,000 to RM 42,000" },
    { package: "Extensive Hair Loss (FUT)", grafts: "3,000 to 4,500 grafts", price: "RM 15,000 to RM 45,000" },
    { package: "DHI Programme", grafts: "1,000 to 3,000 grafts", price: "RM 10,000 to RM 45,000" },
    { package: "Beard / Eyebrow / Facial Hair", grafts: "500 to 1,500 grafts", price: "RM 6,000 to RM 22,500" },
  ];

  const faqData = [
    { q: "Is hair transplant treatment permanent in Malaysia?", a: "Yes. The transplanted hair is permanent because the hair follicles from the donor area are genetically DHT-resistant. Pattern hair loss (androgenetic alopecia) is caused by dihydrotestosterone (DHT) destroying follicles in the front and crown of the scalp. The follicles at the back and sides of the scalp, which form the donor area, are not sensitive to DHT and continue growing throughout the patient's lifetime even when relocated to the recipient site. This is the biological principle of donor dominance and it is why hair transplant results are permanent while the surrounding existing hair may continue to thin over time without additional medication." },
    { q: "How many grafts will I need for my hair transplant?", a: "Graft count depends on the extent of your hair loss, the density of your donor area, and the density you want to achieve at the recipient site. As a guide, hairline restoration typically requires 1,000 to 2,000 grafts, crown area restoration needs 1,500 to 3,000 grafts, and more extensive pattern hair loss may require 3,000 to 4,500 grafts. These are estimates. The definitive number is determined at a scalp assessment by the hair transplant specialist at Nexus Clinic KL, who evaluates donor density under magnification and plans the procedure based on your specific anatomy and goals." },
    { q: "What is the difference between FUE and DHI hair transplant in Malaysia?", a: "FUE (Follicular Unit Extraction) extracts individual hair follicles from the donor area and implants them into pre-made recipient sites. DHI (Direct Hair Implantation) uses a specialised Choi pen to extract and immediately implant each follicle in a single step without pre-made incisions. DHI achieves higher graft survival rates due to reduced time outside the body, allows greater control over angle and depth at the recipient site, and requires no full head shave for most patients. FUE is appropriate for most cases and is faster for large graft counts. DHI is preferred for hairline precision and dense packing where control of each individual hair follicle is the priority." },
    { q: "What is the recovery process like after a hair transplant?", a: "The first two to three days involve mild swelling, redness, and scabbing at both the donor and recipient areas. Most patients return to desk work within three to five days. Strenuous physical activity should be avoided for two to three weeks. The transplanted hair shafts fall out within two to three weeks due to shock loss. This is expected and the follicle roots remain intact. New hair begins emerging from month three. Most patients achieve 60 to 80 percent of their final density by month eight to ten, with full results visible at month twelve to fifteen. Nexus Clinic KL provides written aftercare instructions and a direct contact line for any concerns during the recovery period." },
    { q: "Can women undergo hair transplant in Malaysia?", a: "Yes. Female hair transplant is an increasingly common procedure in Malaysia, particularly for women with traction alopecia, localised thinning along the part, or hairline recession at the temples. Women with diffuse hair loss across the entire scalp require individual assessment because diffuse patterns may not have a stable donor area free from miniaturisation. A scalp assessment at Nexus Clinic KL determines donor area suitability for female patients and ensures that hair transplant treatment is appropriate rather than inappropriate for the specific pattern of hair loss. The FUE and DHI techniques are the preferred approaches for female patients as they do not require a large shaved area." },
    { q: "How do I choose the right hair transplant clinic in Malaysia?", a: "The right hair transplant clinic is one where every surgical step is performed by a qualified hair transplant surgeon, not by nurses or technicians. Verify that the operating doctor is registered with the Malaysian Medical Council and holds relevant training in hair restoration surgery. Ask to see patient reviews and before-and-after photographs of real patients treated at the clinic, ideally patients with similar hair types and loss stages to your own. A reputable clinic will assess your scalp thoroughly before any recommendation, provide a transparent graft-count and cost breakdown, and offer a structured aftercare programme. Clinics that promise guaranteed results or instant transformations without proper assessment should be avoided." },
    { q: "Is FUE hair transplant in Malaysia painful?", a: "The procedure is performed under local anaesthesia, which means patients remain awake but do not feel pain during the transplant. The administration of the anaesthetic injections involves brief discomfort, comparable to a dental injection, after which the scalp is completely numb for the duration of the procedure. Most patients spend the session watching content on their phone or resting. Post-procedure soreness at both the donor and recipient sites typically resolves within three to five days and is managed with standard pain relief. Patients consistently report that the procedure was more comfortable than they anticipated." },
    { q: "How much does a hair transplant cost in Malaysia compared to other countries?", a: "Hair transplant cost in Malaysia is significantly lower than equivalent procedures in Western markets. A typical FUE session of 2,000 to 3,000 grafts costs approximately RM 16,000 to RM 36,000 at a quality clinic in Malaysia, compared to equivalent procedures costing RM 50,000 to RM 120,000 in Australia or the UK. This cost advantage does not reflect lower standards. Malaysia offers internationally trained surgeons, modern facilities, and Ministry of Health-regulated clinical environments at a fraction of Western overhead costs. Malaysia has become a leading destination for hair transplant medical tourism from across Asia, the Middle East, and beyond for exactly this reason." },
    { q: "What non-surgical options should I consider before committing to hair transplant?", a: "Patients at earlier stages of hair loss or those who want to preserve existing hair before surgery should discuss non-surgical options with their doctor. Minoxidil treatment and finasteride treatment are the two most clinically proven medications for slowing pattern hair loss and may stabilise the existing hair before transplant planning. PRP hair treatment can strengthen hair follicles and improve scalp health. These are not substitutes for a hair transplant where significant balding has already occurred, but they are important parts of a comprehensive hair treatment strategy." },
    { q: "What happens to the transplanted hair over time as I continue to age?", a: "The transplanted hair continues to grow permanently because it comes from DHT-resistant follicles. It will not fall out due to androgenetic alopecia. However, the existing natural hair around the transplanted area may continue to thin over time if the underlying pattern hair loss is not managed with medication. This is why many hair transplant surgeons recommend concurrent use of finasteride or minoxidil to protect the non-transplanted hair and preserve the overall density of the result over the long term. At Nexus Clinic KL, a comprehensive hair treatment plan including both surgical and medical management of hair loss is discussed at consultation to give patients the clearest picture of their long-term outcomes." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-hair-transplant1.webp",
      after: "/images/B&A-hair/B&A-hair-transplant1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-hair-transplant2.webp",
      after: "/images/B&A-hair/B&A-hair-transplant2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-hair-transplant3.webp",
      after: "/images/B&A-hair/B&A-hair-transplant3.webp",
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
                <span className="text-sm font-inter text-wine font-medium">FUE • DHI • FUT • Doctor-Performed</span>
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
              >
                Expert Hair Transplant in Malaysia for{" "}
                <span className="text-wine italic">Natural, Permanent Results</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-taupe font-inter leading-relaxed"
              >
                Hair loss is not vanity. When pattern hair loss progresses from a receding hairline to visible thinning or bald patches, it changes how people see themselves.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-brown font-inter"
              >
                A hair transplant at Nexus Clinic KL offers a medically grounded, permanent solution: moving healthy hair follicles from the donor area at the back of the scalp to the areas where hair loss has occurred, creating new growth that is indistinguishable from natural hair and lasts for life.
              </motion.p>

              <motion.div className="bg-wine/5 p-4 rounded-xl border-l-4 border-wine">
                <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Important Clinical Information
                </p>
                <p className="text-taupe font-inter text-sm mt-1">
                  Every hair transplant at Nexus Clinic KL is performed by a qualified hair transplant surgeon rather than by nurses or technicians, under full medical supervision and to the highest clinical standards.
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
                <Whatsapp message="Hi, I'm interested in hair transplant at Nexus Clinic KL. I'd like to book a consultation." variant="light" />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <Image
                  src="/images/hair/hair-transplant.webp"
                  alt="Nexus Clinic Kuala Lumpur - Hair Transplant"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream p-4 rounded-xl shadow-lg hidden md:block">
                <p className="font-inter font-bold text-brown">FUE • DHI • FUT</p>
                <p className="font-inter text-sm text-taupe">Graft survival 90-99%</p>
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
                    <p className="font-inter text-taupe text-xs leading-relaxed">Qualified hair transplant surgeon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in hair restoration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">FUE • DHI • FUT</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">90-99% Graft Survival Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Permanent, Natural Results</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Hair Transplant at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">FUE, DHI, and FUT hair restoration by licensed doctors</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Clock, label: "Session Duration", value: "4 to 8 hours depending on graft count" },
              { icon: Heart, label: "Anaesthesia", value: "Local anaesthesia. Patient remains awake." },
              { icon: Activity, label: "Graft Survival Rate", value: "90 to 99% depending on technique" },
              { icon: TrendingUp, label: "Results Timeline", value: "Full density at 12 to 15 months" },
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
                <p className="font-inter text-sm text-taupe">Procedure Type</p>
                <p className="font-georgia text-brown font-semibold">Hair Transplant Surgery (FUE, DHI, FUT)</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Permanence</p>
                <p className="font-georgia text-brown font-semibold">Transplanted hair is permanent and DHT-resistant</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Suitable For</p>
                <p className="font-georgia text-brown">Pattern hair loss, receding hairline, crown thinning, facial hair</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Consultation</p>
                <p className="font-georgia text-brown">Complimentary at Nexus Clinic KL</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Hair Transplant Options | Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* FUE vs DHI vs FUT Comparison Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">FUE vs DHI vs FUT</h2>
            <p className="text-taupe font-inter">Hair transplant method comparison for Malaysian patients</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Factor</th>
                  <th className="p-4 text-left font-georgia">FUE (Follicular Unit Extraction)</th>
                  <th className="p-4 text-left font-georgia">DHI (Direct Hair Implantation)</th>
                  <th className="p-4 text-left font-georgia">FUT (Follicular Unit Transplantation)</th>
                </tr>
              </thead>
              <tbody>
                {methodComparison.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.factor}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.fue}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.dhi}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.fut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              The right hair transplant method is never a single universal answer. It is determined by a scalp assessment, donor area density, hair type, and the specific areas being treated. Nexus Clinic KL performs all three methods and selects the approach that best serves the individual patient's needs.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Norwood Scale Guide Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Norwood Scale Guide</h2>
            <p className="text-taupe font-inter">Understanding your hair loss stage and graft requirements</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Norwood Stage</th>
                  <th className="p-4 text-left font-georgia">Hair Loss Pattern</th>
                  <th className="p-4 text-left font-georgia">Estimated Grafts Needed</th>
                  <th className="p-4 text-left font-georgia">Sessions Typically Needed</th>
                  <th className="p-4 text-left font-georgia">Best Method</th>
                </tr>
              </thead>
              <tbody>
                {norwoodStages.map((stage, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{stage.stage}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{stage.pattern}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{stage.grafts}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{stage.sessions}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{stage.bestMethod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Hair Transplant Results Timeline Slider Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Hair Transplant Growth Timeline</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Month-by-month what to expect after your procedure</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              variants={fadeInLeft}
              className="bg-cream p-8 rounded-2xl border border-taupe/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-wine" />
                </div>
                <h3 className="font-georgia text-2xl text-brown">Factors Affecting Growth</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Individual healing response varies by patient</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Technique used (FUE, DHI, or FUT)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Surgeon skill and graft handling quality</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Post-operative care compliance</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Use of finasteride or minoxidil for native hair protection</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  The most common source of anxiety after a hair transplant is shock loss. Most transplanted hair shafts fall out within two to three weeks. This is normal and expected. New growth begins from month three.
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
                <h3 className="font-georgia text-2xl font-bold">Growth Timeline</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Shock Loss</span>
                    <span className="font-georgia text-xl font-bold text-white">Weeks 2 to 3</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "15%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Transplanted hair shafts fall out. Follicle roots remain intact.</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Initial Growth</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 3 to 4</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "30%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Fine baby hairs become visible. Early hairline formation.</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Progressive Thickening</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 5 to 6</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "55%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Meaningful cosmetic improvement visible. Styling possible.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Maturation</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 8 to 10</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">60 to 80% of final density achieved.</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Full Results</span>
                    <span className="font-georgia text-xl font-bold text-white">Month 12 to 15</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 1.0 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Final result. Natural-looking, permanent hair.</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Full results are not visible until month 12 to 15. Patience during the growth phase is essential for optimal outcomes.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-taupe font-inter text-sm">
              ✨ Understanding the timeline from day one eliminates the most common source of post-procedure distress and helps patients trust the process during the months when change is happening invisibly beneath the scalp surface.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Growth Timeline Detailed Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Month-by-Month Hair Transplant Growth Timeline</h2>
            <p className="text-taupe font-inter">What happens to transplanted hair and what the patient experiences</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Timeframe</th>
                  <th className="p-4 text-left font-georgia">What Happens to Transplanted Hair</th>
                  <th className="p-4 text-left font-georgia">What the Patient Experiences</th>
                </tr>
              </thead>
              <tbody>
                {growthTimeline.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.period}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.happening}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.experience}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Asian Hair Considerations */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Hair Transplant for Malaysian and Asian Patients</h2>
            <p className="text-taupe font-inter">What makes our hair type different</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border-l-4 border-wine">
            <p className="text-brown font-inter mb-4">Asian hair, including the hair of Malaysian, Chinese, Indian, and Malay patients, has distinct physical characteristics that affect graft harvesting, density planning, and natural-looking result creation.</p>
            <ul className="space-y-3 text-taupe font-inter text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Asian hair is typically thicker in shaft diameter than Caucasian hair, with a rounder cross-section producing a stiffer, more visible individual hair.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Fewer grafts per square centimetre are needed to create the appearance of full coverage, because each individual hair delivers more visual density.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Transplanted hair placed at incorrect angles or directions appears significantly more unnatural than it would with finer Caucasian hair.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                <span>Darker hair colour against lighter scalp background means higher contrast, making any density gaps or unnatural placement more visible.</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Process Steps */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">The Hair Transplant Process at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Step by step</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation and Scalp Check", desc: "Doctor discusses hair loss story, checks donor area density and scalp health, reviews lifestyle, job, and downtime needs." },
              { step: "02", title: "Hairline Design and Graft Planning", desc: "Hairline designed to fit age and features. Graft count determined based on Norwood stage and donor density." },
              { step: "03", title: "Procedure Day", desc: "Local anaesthesia administered. FUE, DHI, or FUT performed. Patient remains awake and comfortable for 4 to 8 hours." },
              { step: "04", title: "Aftercare and Follow-Ups", desc: "Written aftercare instructions provided. Activity limits and washing guidance given. Follow-up at 1 week, 1 month, 3 months, 6 months, and 12 months." },
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
            <p className="text-taupe text-sm mt-3">FUE • DHI • FUT — Expert hair restoration at Nexus Clinic KL</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Hair Transplant Cost in Malaysia 2026</h2>
            <p className="text-taupe font-inter">Transparent pricing at Nexus Clinic KL</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Package</th>
                  <th className="p-4 text-left font-georgia">Graft Range</th>
                  <th className="p-4 text-left font-georgia">Estimated Total Price (RM) 2026</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, idx) => (
                  <tr key={idx} className="border-t border-taupe/10">
                    <td className="p-4 font-inter font-semibold text-brown">{tier.package}</td>
                    <td className="p-4 font-inter text-taupe text-sm">{tier.grafts}</td>
                    <td className="p-4 font-inter font-semibold text-wine">{tier.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-wine/5">
                  <td colSpan={3} className="p-4 text-taupe font-inter text-sm italic">
                    Hair transplant cost in Malaysia is calculated per graft rather than as a flat fee. All consultations are complimentary at Nexus Clinic KL. Final pricing confirmed after scalp assessment.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get Your Personalised Hair Transplant Quote
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
              Begin Restoring Your Hair at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              A hair transplant can be life-changing, but only when it is planned well. If you want a natural hairline and a realistic timeline, start with a proper assessment at Nexus Clinic KL.
            </p>
            <p className="text-cream/90 font-inter">
              Our licensed doctors bring over 15 years of combined experience, perform every procedure personally, and use only MOH-approved techniques. Malaysia has become a leading destination for hair transplant medical tourism for exactly this reason.
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
                message="Hi, I'd like to book a consultation for hair transplant at Nexus Clinic KL. Please let me know available slots."
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