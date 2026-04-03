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
  Droplets,
  FileText,
  Leaf,
  Phone,
  Mail,
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

interface HairLossTreatmentProps {
  locale: string;
}

export default function HairLossTreatment({ locale }: HairLossTreatmentProps) {
  // Hair Loss Types Table Data
  const hairLossTypesTable = [
    {
      type: "Androgenetic Alopecia (Pattern Hair Loss)",
      features: "Most common type. Gradual thinning. In men: receding hairline and crown. In women: diffuse thinning over crown with preserved hairline.",
      causes: "Genetic sensitivity of hair follicles to DHT (dihydrotestosterone). Hormonal changes.",
      treatment: "Finasteride (men), minoxidil, PRP growth factors injection, low-level laser therapy."
    },
    {
      type: "Alopecia Areata",
      features: "Sudden patchy hair loss. Round or oval smooth bald patches. Can progress to total scalp or body hair loss.",
      causes: "Autoimmune condition. Immune system attacks hair follicles. Associated with other autoimmune conditions.",
      treatment: "Intralesional corticosteroid injections, topical immunotherapy, minoxidil, PRP as regenerative option."
    },
    {
      type: "Telogen Effluvium",
      features: "Diffuse hair thinning across scalp. Increased hair fall. No distinct bald patches.",
      causes: "Physiological stress (surgery, illness), hormonal changes (post-partum, thyroid), nutritional deficiency (iron, vitamin D, zinc), medications.",
      treatment: "Identify and remove trigger. Self-limiting in most cases. Nutritional support. Minoxidil if prolonged."
    },
    {
      type: "Traction Alopecia",
      features: "Thinning along hairline and temples. Redness and tenderness in early stages.",
      causes: "Repeated mechanical tension from tight hairstyles (braids, ponytails, extensions), chemical treatments.",
      treatment: "Stop causative hairstyles. Early cases may regrow. Advanced cases with scarring require specialist intervention."
    },
    {
      type: "Scarring Alopecia",
      features: "Permanent hair loss. Scalp shows visible scarring. Follicles replaced by scar tissue.",
      causes: "Inflammatory skin conditions, autoimmune cutaneous conditions, physical scalp trauma.",
      treatment: "Scalp biopsy for diagnosis. Focus on halting progression. Natural regrowth not possible in scarred areas."
    },
    {
      type: "Secondary Hair Loss",
      features: "Hair thinning from underlying medical condition. Often diffuse and reversible.",
      causes: "Thyroid dysfunction, iron deficiency anaemia, PCOS, nutritional deficiencies, medications.",
      treatment: "Identify and treat underlying medical condition first. Hair typically regrows when primary cause corrected."
    }
  ];

  // Treatment Options Table Data
  const treatmentOptionsTable = [
    {
      treatment: "PRP (Platelet-Rich Plasma) Hair Treatment",
      howItWorks: "Growth factors from platelet-rich plasma injected into scalp at follicle level. PDGF, VEGF, TGF-beta stimulate follicles and promote hair growth.",
      bestFor: "Men and women with androgenetic alopecia. Hair loss from multiple causes. Combination with finasteride and minoxidil.",
      evidence: "Good to strong evidence. Multiple studies show improved hair density. Recognised by international dermatology societies.",
      downtime: "No downtime. Mild scalp tenderness 24-48 hours."
    },
    {
      treatment: "Minoxidil (Topical Lotion, Foam or Tonic)",
      howItWorks: "Applied directly to scalp. Increases blood flow to follicles. Extends anagen (growth) phase. Vasodilatory mechanism independent of DHT.",
      bestFor: "Androgenetic alopecia in males and females. First-line treatment. Hair density maintenance.",
      evidence: "Very strong evidence. One of only two medications approved for androgenetic alopecia. Effective in majority with consistent use.",
      downtime: "No downtime. Some experience scalp dryness or irritation."
    },
    {
      treatment: "Finasteride (Oral or Topical)",
      howItWorks: "Blocks 5-alpha reductase enzyme. Reduces conversion of testosterone to DHT. Slows androgenic alopecia progression.",
      bestFor: "Men with androgenetic alopecia. Early signs of hair loss. Combination with minoxidil for advanced cases.",
      evidence: "Strongest evidence of all oral options. 83-90% of men maintain or improve hair count at 2 years. Gold standard prescription medication.",
      downtime: "No downtime. Medical assessment and prescription required."
    },
    {
      treatment: "Low-Level Laser Therapy (LLLT)",
      howItWorks: "Red light (630-680nm) delivered to scalp. Photobiomodulation increases cellular energy (ATP) in follicle cells. Promotes hair growth.",
      bestFor: "Androgenetic alopecia in males and females. Mild to moderate loss. Complement to PRP and minoxidil.",
      evidence: "Moderate to good evidence. FDA-cleared devices. Most effective when combined with other modalities.",
      downtime: "No downtime. Sessions 20-30 minutes. Repeated sessions required."
    },
    {
      treatment: "Scalp Mesotherapy with Hyaluronic Acid",
      howItWorks: "Customised cocktail of vitamins, minerals, hyaluronic acid delivered by microinjection. Concentrated nutrients to scalp.",
      bestFor: "Diffuse thinning from nutritional deficiency. Scalp health improvement. Combination with PRP for comprehensive regeneration.",
      evidence: "Moderate evidence as standalone. Strong synergistic evidence when combined with PRP.",
      downtime: "No downtime. Mild redness for 24 hours."
    }
  ];

  // Causes of Hair Loss Table Data
  const causesTable = [
    {
      cause: "DHT and Hormonal Changes",
      mechanism: "DHT binds to androgen receptors in genetically susceptible follicles, progressively miniaturising them. Hormonal changes at menopause, post-partum, or from thyroid/PCOS conditions cause hair loss through different mechanisms.",
      affected: "Majority of Malaysian men with progressive thinning. Perimenopausal and post-partum women. Women with PCOS. Those with undiagnosed thyroid conditions.",
      approach: "Hormonal assessment included in every initial evaluation. Thyroid function, testosterone, DHEA-S, oestrogen checked where indicated. Treat underlying hormonal imbalance first."
    },
    {
      cause: "Nutritional Deficiency",
      mechanism: "Iron required for metabolic activity of hair follicle matrix cells. Iron deficiency impairs healthy growth. Vitamin D, zinc, biotin and protein deficiency contribute to thinning hair.",
      affected: "Malaysian women with heavy periods. Vegetarians and vegans. Those with chronic restrictive dieting. Patients exposed to harsh chemical treatments and environmental stressors.",
      approach: "Blood test for nutritional status (iron, ferritin, vitamin D, zinc, full blood count). Correcting deficiencies is most effective treatment. Dietary improvement and lifestyle changes provided."
    },
    {
      cause: "Autoimmune (Alopecia Areata)",
      mechanism: "Immune system mistakenly targets hair follicles. Follicles enter state of arrested activity, not permanently destroyed. Bald patches appear suddenly.",
      affected: "Any age, both males and females. Often begins in childhood or young adulthood. Associated with thyroid disease, vitiligo, Type 1 diabetes. Family history is risk factor.",
      approach: "Diagnosis confirmed by clinical examination or scalp biopsy. Managed with intralesional corticosteroids, topical immunotherapy, PRP as regenerative option."
    },
    {
      cause: "Stress, Lifestyle and Scalp Health",
      mechanism: "Chronic psychological stress causes telogen effluvium. Large proportion of follicles simultaneously enter resting phase. Diffuse hair fall 2-3 months after stress event.",
      affected: "Malaysian professionals with work-related stress. Post-COVID hair loss patients. New mothers with post-partum hair fall. Those with chronic scalp conditions.",
      approach: "Lifestyle changes and stress management discussed at every consultation. Scalp health assessment included. Shampoo and tonic recommendations provided in writing."
    }
  ];

  // Growth Timeline Data
  const growthTimeline = [
    { period: "Month 1", happening: "Initial hope and anticipation. Some notice less shedding first. Follicles beginning to respond to treatment.", experience: "Feel hopeful, then impatient. Early signs may be subtle. Continue treatment consistently." },
    { period: "Months 2 to 3", happening: "Small improvements may become visible. Hair follicles entering active growth phase. Cellular changes occurring beneath scalp surface.", experience: "Photos help track progress. Daily mirror checks can be misleading. Trust the process." },
    { period: "Months 3 to 6", happening: "Real change becomes visible if treatment plan suits your hair loss type. New hair shafts emerging. Density gradually improving.", experience: "Most patients notice meaningful difference during this period. Continue all treatments as prescribed." },
    { period: "Month 9 onwards", happening: "Results look more settled. Full benefits of treatment programme visible. Maximum density achieved for non-surgical approaches.", experience: "Results appear natural and established. Maintenance plan continues for long-term preservation." },
  ];

  // Pricing Data
  const pricingTiers = [
    { service: "Initial Hair Loss Consultation", details: "Comprehensive hair loss assessment. Trichoscopy scalp examination. Hair loss pattern grading. Diagnosis of type. Blood test panel where indicated. Personalised treatment recommendation.", price: "RM 150 - RM 300" },
    { service: "PRP Hair Treatment (per session)", details: "Platelet-rich plasma injected into scalp. Growth factors stimulate hair growth. Doctor-performed. Topical anaesthetic. 45-60 minutes. No downtime.", price: "RM 1,200 - RM 2,500" },
    { service: "PRP Hair Treatment Programme (3 sessions)", details: "3-session PRP programme for comprehensive follicle stimulation. Programme pricing for initial course. Includes follow-up scalp assessment at 8-12 weeks.", price: "From RM 3,500" },
    { service: "Scalp Mesotherapy with Hyaluronic Acid", details: "Customised nutrient and hyaluronic acid cocktail. Regenerative scalp rejuvenation. Encourages hair growth. No downtime. Can combine with PRP.", price: "RM 600 - RM 1,500" },
    { service: "Finasteride 1mg Prescription (per month)", details: "Doctor-prescribed oral finasteride for male androgenetic alopecia. Full side effect discussion. Review at 6 and 12 months with hair density photography.", price: "RM 60 - RM 180" },
    { service: "Low-Level Laser Therapy (per session)", details: "Laser therapy for scalp follicle stimulation. 630-680nm red light. Non-surgical. No downtime. 20-30 minute sessions.", price: "RM 200 - RM 500" },
    { service: "Follow-Up Hair Growth Review", details: "Structured 6-month and 12-month reviews. Standardised hair density photography. Scalp trichoscopy. Treatment response assessment.", price: "RM 100 - RM 200" },
  ];

  // FAQ Data (expanded from content)
  const faqData = [
    { q: "Can hair loss be reversed naturally?", a: "Sometimes. If hair loss is linked to a temporary trigger like stress or mild nutrient issues, it may improve when the trigger is addressed. Genetic pattern loss (androgenetic alopecia) usually needs medical treatment for real change. At Nexus Clinic KL, we identify the specific cause before recommending any treatment approach." },
    { q: "What is the most effective hair loss treatment in Malaysia?", a: "The most effective treatment depends entirely on your type of hair loss. For androgenetic alopecia (pattern hair loss), the combination of finasteride (for men), topical minoxidil, and PRP produces the best results. For telogen effluvium, identifying and removing the trigger is most effective. For alopecia areata, intralesional corticosteroid injections and PRP show good results. A proper diagnosis at Nexus Clinic KL ensures you receive the treatment matched to your specific condition." },
    { q: "How long does it take to see results from hair loss treatment?", a: "Most treatments need at least 3 to 6 months of consistency before visible change appears. Minoxidil typically shows results at 3-6 months. Finasteride shows hair loss slowing at 3-6 months and maximum benefit at 12-24 months. PRP shows improvement beginning from the second session onward, with maximum results at 3-6 months after completing the initial 3-session course. Patience and consistency are essential for optimal outcomes." },
    { q: "Is PRP treatment effective for hair regrowth in Malaysia?", a: "Yes. PRP (platelet-rich plasma) is an effective treatment for stimulating hair growth in patients with androgenetic alopecia and in some patients with alopecia areata. PRP delivers growth factors including PDGF, VEGF and TGF-beta directly to hair follicles. Published clinical studies consistently show improvement in hair density and scalp hair count after a course of PRP treatment. PRP is most effective when combined with finasteride and minoxidil rather than used as a standalone treatment." },
    { q: "How many PRP sessions do I need for hair loss?", a: "Most patients require 3 to 4 initial PRP sessions spaced 4 to 6 weeks apart. After completing the initial course, maintenance sessions every 4 to 6 months help preserve the results. The exact number depends on your specific hair loss type, the extent of thinning, and how well your follicles respond to treatment. Your personalised treatment plan at Nexus Clinic KL will include a clear session schedule based on your assessment." },
    { q: "What are the side effects of PRP for hair?", a: "Most reported side effects are temporary and mild, including tenderness at injection sites, mild scalp redness, and slight swelling that resolves within 24 to 48 hours. Because PRP uses your own blood components, there is no risk of allergic reaction. Some patients experience mild headache on the day of treatment. Serious complications are extremely rare when performed by a qualified medical professional." },
    { q: "Is finasteride safe for hair loss treatment?", a: "Finasteride is used for male pattern hair loss but requires proper medical counselling. Side effects can include sexual side effects (reported in 1-2% of users) and rare mood changes. Regulators have issued reminders about psychiatric risks. Finasteride should only be taken under medical supervision with regular follow-up. At Nexus Clinic KL, we discuss all risks thoroughly before prescribing and monitor patients throughout treatment. Women who are or may be pregnant must never use finasteride." },
    { q: "Does minoxidil regrow hair permanently?", a: "Minoxidil can help early hair loss and may slow loss or support regrowth, but it will not restore an entire head of hair. It requires consistent use for months to see results. If minoxidil works for you, you typically need to continue using it to maintain benefits. Stopping minoxidil usually leads to gradual return of hair loss within 3 to 6 months. Minoxidil is most effective when started early, before significant follicle miniaturisation has occurred." },
    { q: "What causes hair loss in Malaysian women?", a: "Common causes of hair loss in Malaysian women include: female pattern hair loss (androgenetic alopecia), telogen effluvium from stress or post-partum changes, iron deficiency (particularly common in women with heavy periods), thyroid dysfunction, PCOS-related hormonal changes, traction alopecia from tight hairstyles, and nutritional deficiencies. A proper diagnosis at Nexus Clinic KL avoids wasted time on inappropriate treatments." },
    { q: "Can stress cause hair loss?", a: "Yes. Stress is a well-recognised trigger for telogen effluvium, a condition where a large number of hair follicles simultaneously enter the resting phase, causing diffuse hair fall 2 to 3 months after the stressful event. Chronic psychological stress, significant illness, surgery, or dramatic weight loss can all trigger this response. In most cases, hair grows back naturally when the stress trigger is resolved, though nutritional support and minoxidil can accelerate recovery." },
    { q: "When should I consider a hair transplant?", a: "A hair transplant should be considered when hair follicles in an area are no longer producing hair and non-surgical treatments cannot revive them. For most patients, we recommend starting with a 12-month non-surgical programme (finasteride, minoxidil, PRP) before considering transplant. This stabilises ongoing hair loss and maximises existing density. Men with advanced baldness (Norwood grade V to VII) are more likely to be transplant candidates. At Nexus Clinic KL, we provide honest guidance on whether you are an immediate or deferred transplant candidate." },
    { q: "How much does hair loss treatment cost in Malaysia?", a: "Costs vary by treatment type and number of sessions. PRP sessions typically range from RM 800 to RM 2,500 per session. Hair transplant costs range from RM 6,000 to RM 15,000 depending on graft count and technique. Medication plans vary based on product and dose. A comprehensive non-surgical programme including PRP, finasteride, minoxidil and follow-up consultations costs approximately RM 7,000 to RM 15,000 annually. At Nexus Clinic KL, all pricing is disclosed at the initial consultation before any treatment begins." },
    { q: "What scalp care does Nexus Clinic KL recommend between treatments?", a: "Between hair loss treatment sessions, patients receive a personalised self-care programme including: appropriate shampoo selection for their specific scalp type (oily, dry, seborrhoeic, normal); scalp tonic applied directly to the scalp after cleansing; sun exposure protection using a cap or hat in Malaysia's intense UV environment; dietary guidance including adequate protein and iron-rich foods; lifestyle changes including stress management; and specific post-treatment scalp care instructions after every PRP or mesotherapy session. The post-treatment self-care programme is as important as the clinical treatment itself." },
    { q: "Is the hair loss consultation at Nexus Clinic KL free?", a: "The initial hair loss assessment at Nexus Clinic KL is priced at RM 150 to RM 300 and includes a comprehensive trichoscopy scalp examination, hair loss type diagnosis, blood test panel where indicated for medical causes of hair loss, personalised treatment recommendation with full pricing, and discussion of all treatment options including finasteride, minoxidil, PRP, laser therapy, and when considering a hair transplant is appropriate. This investment ensures you receive a proper diagnosis rather than a generic sales pitch." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-hair-loss-treatment1.webp",
      after: "/images/B&A-hair/B&A-hair-loss-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-hair-loss-treatment2.webp",
      after: "/images/B&A-hair/B&A-hair-loss-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-hair-loss-treatment3.webp",
      after: "/images/B&A-hair/B&A-hair-loss-treatment3.webp",
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
                <span className="text-sm font-inter text-wine font-medium">PRP • Finasteride • Minoxidil • Laser Therapy</span>
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
              >
                Hair Loss Treatment in Malaysia for{" "}
                <span className="text-wine italic">All Types of Alopecia</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-taupe font-inter leading-relaxed"
              >
                Hair loss is one of the most common concerns bringing Malaysian patients to a specialist clinic, yet it is also one of the most inconsistently managed.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-brown font-inter"
              >
                The reason most hair loss treatment approaches fail is that they do not start with a correct diagnosis of which type of hair loss the patient has, what causes hair loss in that specific case, and what the evidence-based treatment options are for that particular cause.
              </motion.p>

              <motion.div className="bg-wine/5 p-4 rounded-xl border-l-4 border-wine">
                <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Important Clinical Information
                </p>
                <p className="text-taupe font-inter text-sm mt-1">
                  At Nexus Clinic KL, every hair loss assessment begins with a clinical diagnosis of the specific type of hair loss, followed by a personalised hair growth treatment programme designed around that diagnosis.
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
                  Book Hair Loss Assessment
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <Whatsapp message="Hi, I'm interested in hair loss treatment at Nexus Clinic KL. I'd like to book a consultation." variant="light" />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <Image
                  src="/images/hair/hair-loss-treatment.webp"
                  alt="Nexus Clinic Kuala Lumpur - Hair Loss Treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream p-4 rounded-xl shadow-lg hidden md:block">
                <p className="font-inter font-bold text-brown">PRP • Finasteride • Minoxidil</p>
                <p className="font-inter text-sm text-taupe">Doctor-performed treatments</p>
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
                  <Calendar className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Experience</p>
                  <p className="font-georgia text-brown font-bold text-lg">Founded 2001</p>
                  <p className="font-inter text-taupe text-xs">Over two decades of service</p>
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
                  <Shield className="w-5 h-5 text-wine" />
                </div>
                <div>
                  <p className="font-inter text-xs text-taupe uppercase tracking-wide">Credentials</p>
                  <p className="font-georgia text-brown font-bold text-sm">MOH Licensed</p>
                  <p className="font-inter text-taupe text-xs">Certified aesthetic doctors</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Stethoscope className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Doctor-Performed</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Qualified medical professionals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive clinical experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Personalised Care</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Treatment matched to your hair loss type</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">PRP • Finasteride • Minoxidil</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Low-Level Laser Therapy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Scalp Mesotherapy</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Answers Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Quick Answers About Hair Loss Treatment</h2>
            <p className="text-taupe font-inter">What you need to know before your consultation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-georgia text-lg text-brown mb-2">Can hair loss be treated?</h3>
              <p className="text-taupe font-inter text-sm">Yes. Many types can be slowed, improved, or managed, depending on the cause.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-georgia text-lg text-brown mb-2">What works best for genetic hair loss?</h3>
              <p className="text-taupe font-inter text-sm">First-line options often include minoxidil and, for many men, finasteride under medical advice.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-georgia text-lg text-brown mb-2">When do results show?</h3>
              <p className="text-taupe font-inter text-sm">Most treatments need at least 3 to 6 months of consistency before visible change.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-georgia text-lg text-brown mb-2">Do clinic treatments help?</h3>
              <p className="text-taupe font-inter text-sm">Options like PRP, laser, and transplant can help selected patients when matched to the right hair loss type.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Types of Hair Loss Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Types of Hair Loss and Alopecia</h2>
            <p className="text-taupe font-inter">Understanding your hair loss type is the first step to effective treatment</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Type of Hair Loss / Alopecia</th>
                  <th className="p-4 text-left font-georgia">Clinical Features</th>
                  <th className="p-4 text-left font-georgia">Causes</th>
                  <th className="p-4 text-left font-georgia">Treatment Approach</th>
                </tr>
              </thead>
              <tbody>
                {hairLossTypesTable.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown text-sm">{item.type}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.features}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.causes}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.treatment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm">
              <span className="font-semibold">Important:</span> The secondary hair loss from medical conditions row in this table is the most practically important for Malaysian patients who have been using hair loss treatment products without improvement. Many Malaysian women experiencing significant hair fall have an underlying thyroid condition, iron deficiency or PCOS-related hormonal imbalance as the primary cause. At Nexus Clinic KL, a blood test panel to identify medical causes is included where clinically suspected.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Treatment Options Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Hair Loss Treatment Options in Malaysia</h2>
            <p className="text-taupe font-inter">PRP, Finasteride, Minoxidil and Laser Therapy for Hair Regrowth</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Treatment</th>
                  <th className="p-4 text-left font-georgia">How It Works</th>
                  <th className="p-4 text-left font-georgia">Best For</th>
                  <th className="p-4 text-left font-georgia">Evidence & Efficacy</th>
                  <th className="p-4 text-left font-georgia">Downtime</th>
                </tr>
              </thead>
              <tbody>
                {treatmentOptionsTable.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown text-sm">{item.treatment}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.howItWorks}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.bestFor}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.evidence}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.downtime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm">
              The combination of treatments consistently produces better results than any single treatment alone. PRP provides growth factors, minoxidil promotes blood flow, finasteride blocks DHT, laser therapy provides additional stimulation, and scalp mesotherapy optimises the scalp environment. At Nexus Clinic KL, your treatment programme is customised to your specific hair loss type, degree of hair loss, lifestyle and budget.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Causes of Hair Loss Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Causes of Hair Loss in Malaysian Patients</h2>
            <p className="text-taupe font-inter">Hormonal, Nutritional, Autoimmune and Environmental Factors</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Cause of Hair Loss</th>
                  <th className="p-4 text-left font-georgia">How It Affects Hair Follicles</th>
                  <th className="p-4 text-left font-georgia">Who Is Affected in Malaysia</th>
                  <th className="p-4 text-left font-georgia">Approach at Nexus Clinic KL</th>
                </tr>
              </thead>
              <tbody>
                {causesTable.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown text-sm">{item.cause}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.mechanism}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.affected}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.approach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl">
            <p className="text-brown font-inter text-sm">
              <span className="font-semibold">Malaysia-specific note:</span> Environmental factors and nutritional deficiency are particularly relevant for Malaysian patients. Malaysia's year-round intense sun exposure, high-pollution urban environment, widespread use of chemical treatments on hair, and the high prevalence of iron deficiency among Malaysian women combine to create a unique set of contributing factors not addressed by simply prescribing finasteride or minoxidil.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Hair Growth Timeline Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">What Does Hair Loss Treatment Feel Like Over Time?</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">The honest timeline most patients experience</p>
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
                <h3 className="font-georgia text-2xl text-brown">What Affects Your Results</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Your specific type of hair loss diagnosis</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>How early you started treatment</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Consistency with your treatment plan</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Combination of treatments used</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Addressing underlying medical causes</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  Patience is essential. Most treatments need 3-6 months of consistency before visible change appears. The most common reason patients conclude treatment doesn't work is stopping too early.
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
                <h3 className="font-georgia text-2xl font-bold">Treatment Timeline</h3>
              </div>

              <div className="space-y-6">
                {growthTimeline.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-inter text-white/90">{item.period}</span>
                      <span className="font-georgia text-xl font-bold text-white">{item.period}</span>
                    </div>
                    <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${25 + idx * 25}%` }}
                        transition={{ duration: 1, delay: 0.2 * idx }}
                        className="bg-white h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                    <p className="text-white/70 text-xs mt-2">{item.happening}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Photos help track progress. Daily mirror checks can be misleading. Trust the process and follow your treatment plan consistently.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Growth Timeline Detailed Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Month-by-Month Hair Growth Timeline</h2>
            <p className="text-taupe font-inter">What happens during treatment and what patients experience</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Timeframe</th>
                  <th className="p-4 text-left font-georgia">What Happens During Treatment</th>
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

      {/* Scalp Care Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Scalp Care and Self-Care for Hair Growth in Malaysia</h2>
            <p className="text-taupe font-inter">Shampoo, tonic and lifestyle guidance for hair health</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border-l-4 border-wine shadow-md">
              <h3 className="font-georgia text-xl text-brown mb-3">Scalp Cleansing and Shampoo Selection</h3>
              <p className="text-taupe font-inter text-sm mb-3">Regular scalp cleansing with an appropriate shampoo removes sebum, dead skin cells, product buildup and pollutants that can clog hair follicles. In Malaysia's humid climate, daily or every-other-day cleansing is typically appropriate.</p>
              <p className="text-wine font-inter text-sm font-semibold">At Nexus Clinic KL:</p>
              <p className="text-taupe font-inter text-sm">Patients receive specific shampoo selection advice based on their scalp condition (oily, dry, seborrhoeic dermatitis, normal) rather than generic guidance.</p>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border-l-4 border-wine shadow-md">
              <h3 className="font-georgia text-xl text-brown mb-3">Scalp Tonic and Topical Treatment Absorption</h3>
              <p className="text-taupe font-inter text-sm mb-3">A scalp tonic applied directly to the scalp between treatment sessions delivers active ingredients to the follicle level without dilution from shampoo rinse.</p>
              <p className="text-wine font-inter text-sm font-semibold">At Nexus Clinic KL:</p>
              <p className="text-taupe font-inter text-sm">The scalp tonic recommendation is personalised to each patient's hair loss type. Application technique is demonstrated at the first consultation.</p>
            </motion.div>

            <motion.div variants={fadeInLeft} className="bg-light p-6 rounded-xl border-l-4 border-wine shadow-md">
              <h3 className="font-georgia text-xl text-brown mb-3">Sun Exposure Protection for the Scalp</h3>
              <p className="text-taupe font-inter text-sm mb-3">Malaysia's year-round UV index of 10-13 damages hair follicle DNA and degrades the scalp skin barrier. Men with thinning hair are particularly vulnerable.</p>
              <p className="text-wine font-inter text-sm font-semibold">At Nexus Clinic KL:</p>
              <p className="text-taupe font-inter text-sm">Sun exposure protection is included in the self-care guidance at every consultation. Patients are specifically advised to protect the scalp in the 48 hours after treatment.</p>
            </motion.div>

            <motion.div variants={fadeInRight} className="bg-light p-6 rounded-xl border-l-4 border-wine shadow-md">
              <h3 className="font-georgia text-xl text-brown mb-3">Nutrition and Lifestyle Changes for Hair Growth</h3>
              <p className="text-taupe font-inter text-sm mb-3">Adequate dietary protein, iron, vitamin D, zinc, biotin and omega-3 fatty acids are essential for healthy hair growth. In Malaysian patients, iron deficiency is the most common nutritional cause.</p>
              <p className="text-wine font-inter text-sm font-semibold">At Nexus Clinic KL:</p>
              <p className="text-taupe font-inter text-sm">Nutritional assessment is included in the initial evaluation. Dietary advice and supplement recommendations are provided based on blood test results.</p>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              Post-treatment self-care instructions are provided in writing after every clinical hair treatment session and reviewed at each follow-up appointment to ensure your home care routine supports rather than undermines your hair growth treatment outcomes.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Matching Guide Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Which Treatment Is Best For You?</h2>
            <p className="text-taupe font-inter">Simple matching guide based on your hair loss stage</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mb-4">1</div>
              <h3 className="font-georgia text-lg text-brown mb-2 font-semibold">Early Thinning</h3>
              <p className="text-taupe font-inter text-sm">Start with scalp assessment, then consider minoxidil, PRP, and supportive laser or injectables if suitable.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mb-4">2</div>
              <h3 className="font-georgia text-lg text-brown mb-2 font-semibold">Fast Shedding</h3>
              <p className="text-taupe font-inter text-sm">Rule out triggers first: illness, stress, nutrition deficiencies, medications. Identify and address the underlying cause.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mb-4">3</div>
              <h3 className="font-georgia text-lg text-brown mb-2 font-semibold">Crown Thinning</h3>
              <p className="text-taupe font-inter text-sm">Combination plans are common: medication plus PRP plus supportive therapy for comprehensive coverage.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border border-taupe/10 shadow-md hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-light font-georgia text-xl mb-4">4</div>
              <h3 className="font-georgia text-lg text-brown mb-2 font-semibold">Bald & Smooth</h3>
              <p className="text-taupe font-inter text-sm">Discuss transplant options and long-term maintenance. Non-surgical treatments may still help protect remaining hair.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Hair Loss Treatment Cost in Malaysia 2026</h2>
            <p className="text-taupe font-inter">Transparent pricing at Nexus Clinic KL</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Service / Treatment</th>
                  <th className="p-4 text-left font-georgia">Details</th>
                  <th className="p-4 text-left font-georgia">Price Range (RM) 2026</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{tier.service}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{tier.details}</td>
                    <td className="p-4 font-inter font-semibold text-wine">{tier.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-wine/5">
                  <td colSpan={3} className="p-4 text-taupe font-inter text-sm italic">
                    Annual cost for a comprehensive non-surgical programme including PRP, finasteride, minoxidil and follow-up consultations is approximately RM 7,000 to RM 15,000. Men using only finasteride and topical minoxidil without PRP have an annual programme of approximately RM 1,500 to RM 3,500. All consultations are complimentary for treatment planning at Nexus Clinic KL.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
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
              Book Your Hair Loss Assessment at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              If you are tired of guessing, start with a real assessment. We will match your hair loss type to the right plan, then track progress properly.
            </p>
            <p className="text-cream/90 font-inter">
              Our certified aesthetic doctors bring over 15 years of combined clinical experience and have completed over 5,000 procedures. Nexus Clinic KL is located at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, serving patients from across KL, Petaling Jaya, Bangsar, KLCC, Ampang, Mont Kiara and throughout Malaysia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Your Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <Whatsapp 
                message="Hi, I'd like to book a consultation for hair loss treatment at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited slots available | Wisma UOA II, Jalan Pinang, KLCC — Serving Malaysia since 2001
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center text-cream/70 text-sm">
              <a href="#" className="hover:text-cream transition-colors flex items-center gap-2"><Phone className="w-4 h-4" /> Call: 016-7025699</a>
              <span>•</span>
              <a href="#" className="hover:text-cream transition-colors flex items-center gap-2"><Mail className="w-4 h-4" /> Email: contact@nexus-clinic.com</a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}