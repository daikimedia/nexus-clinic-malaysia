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
  Brain,
  TestTube,
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

interface FinasterideLandingProps {
  locale: string;
}

export default function FinasterideLanding({ locale }: FinasterideLandingProps) {
  const mechanismSteps = [
    { step: "DHT Production from Testosterone", biology: "In men with androgenetic alopecia, testosterone is converted to dihydrotestosterone (DHT) in the scalp by the 5-alpha reductase enzyme, primarily Type II. DHT is a more potent androgen than testosterone.", relevance: "Understanding that DHT drives hair follicle miniaturisation rather than testosterone itself is clinically important. Reducing DHT levels in the scalp is the most targeted intervention for stopping hair loss.", implication: "At Nexus Clinic KL, all men presenting with hair loss concerns receive a full hair and scalp assessment before finasteride is prescribed." },
    { step: "Follicle Miniaturisation from DHT", biology: "DHT binds to androgen receptors in the hair follicle and causes progressive shortening of the anagen (growth) phase. Over time the follicle produces only vellus hairs before becoming inactive.", relevance: "Finasteride is most effective when started at early signs of hair loss because viable follicles that have only partially miniaturised can recover once DHT levels are reduced.", implication: "Men presenting with early signs of hair loss are counselled on the progressive nature of androgenetic alopecia and the importance of starting effective treatment before significant follicle miniaturisation." },
    { step: "Finasteride Blocks 5-Alpha Reductase", biology: "Finasteride blocks the 5-alpha reductase enzyme at the active site, preventing conversion of testosterone to DHT. Finasteride 1mg reduces DHT levels in the scalp by approximately 60 to 70%.", relevance: "Clinical trials show that approximately 83 to 90% of men taking finasteride maintain or improve their hair count at 2 years. Finasteride helps prevent further hair loss in the majority of men.", implication: "Finasteride 1mg is the standard starting prescription for men with androgenetic alopecia who meet clinical criteria. Response is assessed at 6 and 12 months using standardised hair density photography." },
    { step: "Hair Regrowth Mechanism", biology: "Finasteride does not directly stimulate hair growth. It prevents DHT-driven miniaturisation. When DHT levels are reduced, partially miniaturised follicles can begin to recover, producing progressively thicker, longer hairs.", relevance: "Setting realistic expectations about hair regrowth is critical. Finasteride primarily slows or stops further hair loss rather than producing dramatic hair regrowth.", implication: "The hair loss treatment programme is explained with specific timelines: stopping hair loss progression (6 to 12 months) versus hair regrowth (12 to 24 months) are presented as distinct expected outcomes." },
  ];

  const treatmentComparison = [
    { factor: "Mechanism", oralFinasteride: "Blocks 5-alpha reductase Type II; reduces scalp and serum DHT by 60 to 70%", topicalFinasteride: "Same mechanism as oral but delivered directly to scalp; may reduce systemic DHT less", dutasteride: "Blocks both Type I and Type II; reduces serum DHT by 90 to 95%", minoxidil: "Potassium channel opener; increases blood flow to hair follicles; does not block DHT" },
    { factor: "Evidence for Hair Loss", oralFinasteride: "Strongest evidence; multiple Phase III RCTs; 83 to 90% maintain or improve hair count at 2 years", topicalFinasteride: "Good emerging evidence; systematic reviews show equivalent or near-equivalent efficacy", dutasteride: "Good to strong evidence; head-to-head studies show greater hair density improvement than finasteride", minoxidil: "Strong evidence; topical 5% and oral effective for hair regrowth across multiple RCTs" },
    { factor: "DHT Effect", oralFinasteride: "Reduces systemic and scalp DHT by 60 to 70%", topicalFinasteride: "Reduces scalp DHT with potentially less systemic reduction", dutasteride: "Reduces systemic DHT by 90 to 95% through dual enzyme blockade", minoxidil: "No effect on DHT levels; promotes growth through follicle blood flow" },
    { factor: "Side Effect Profile", oralFinasteride: "Sexual side effects in 1 to 2% of men; risk of suicidal ideation reported", topicalFinasteride: "Lower systemic DHT may translate to lower incidence of sexual side effects", dutasteride: "Similar profile to finasteride; slightly higher incidence in some studies", minoxidil: "Topical: scalp irritation; Oral: fluid retention, rapid heart rate; no sexual dysfunction" },
    { factor: "Best Suited For", oralFinasteride: "First-line oral treatment for men with androgenetic alopecia", topicalFinasteride: "Men concerned about sexual side effects from oral finasteride", dutasteride: "Men who have used finasteride for 12 months without adequate response", minoxidil: "Men wanting to promote hair growth in addition to stopping hair loss" },
  ];

  const sideEffectsProfile = [
    { category: "Sexual Side Effects", evidence: "Sexual side effects including decreased libido, erectile dysfunction and reduced ejaculatory volume in approximately 1 to 2% of men taking finasteride 1mg in clinical trials. The majority of men (over 95%) do not experience clinically significant sexual dysfunction.", management: "At Nexus Clinic KL, sexual side effects are discussed at every initial consultation before the prescription is issued. Men who experience sexual dysfunction are instructed to report this immediately and the medication is reviewed." },
    { category: "Post-Finasteride Syndrome and Suicidal Ideation", evidence: "Post-Finasteride Syndrome describes persistent sexual, neurological and neuropsychiatric symptoms after discontinuing finasteride. The FDA updated finasteride labelling in 2023 to include the risk of suicidal ideation as a potential psychiatric side effect.", management: "Men with a personal or family history of depression, anxiety or suicidal thoughts are specifically assessed before finasteride is prescribed. Any man who experiences mood changes, depression or suicidal thoughts while taking finasteride should seek medical help immediately and stop the medication." },
    { category: "Breast Changes", evidence: "Gynaecomastia (breast tissue enlargement) and breast tenderness are reported in approximately 0.4 to 0.5% of men taking finasteride in clinical trials.", management: "Men are instructed to report any breast swelling, tenderness or new breast lump immediately. A new breast lump in any man, including those on finasteride, is investigated as a medical priority." },
    { category: "Effects on PSA and Prostate Cancer Screening", evidence: "Finasteride reduces PSA levels by approximately 50%. Doctors interpreting PSA in men on finasteride must double the observed PSA value to estimate the true PSA level.", management: "All men over 50 who are prescribed finasteride are advised that their PSA will be suppressed. A baseline PSA is recommended before starting finasteride in men over 50 to establish the pre-treatment reference." },
  ];

  const programmeComponents = [
    { component: "Finasteride 1mg (or Topical Finasteride)", role: "Foundation of any effective hair loss treatment programme. Finasteride works by blocking DHT conversion and reducing DHT levels in the scalp by 60 to 70%.", integration: "Prescribed after clinical assessment. Compliance review at 3 months. Hair density photographic assessment at 6 and 12 months. Full informed consent discussion." },
    { component: "Topical Minoxidil (5%) or Oral Minoxidil", role: "Minoxidil and finasteride together are the most effective non-surgical hair restoration programme. Minoxidil promotes hair growth by increasing follicle blood flow.", integration: "Topical minoxidil recommended as part of combination programme for most men starting finasteride. Oral minoxidil available as prescription option. Combination produces better results than either alone." },
    { component: "PRP (Platelet-Rich Plasma) Hair Treatment", role: "PRP uses growth factors concentrated from patient's own blood to stimulate hair follicle activity. Does not block DHT and does not replace finasteride.", integration: "PRP adds a regenerative stimulus that complements DHT-blocking effect of finasteride and blood flow-stimulating effect of minoxidil. Typically 3 sessions 4 to 6 weeks apart, then maintenance every 6 to 12 months." },
    { component: "Scalp Assessment and Hair Density Photography", role: "Objective assessment of hair loss progression and treatment response using standardised photography and trichoscopy.", integration: "Full scalp assessment including standardised hair density photography performed at consultation and at 6-month and 12-month review appointments. Provides objective comparison to confirm whether finasteride is working." },
  ];

  const pricingTiers = [
    { service: "Hair Loss Assessment Consultation", details: "Clinical hair and scalp examination; trichoscopy assessment; hair loss pattern grading; medical history review; treatment recommendation", price: "RM 150 to RM 300" },
    { service: "Finasteride 1mg Prescription (per month)", details: "Oral finasteride 1mg prescribed by doctor; brand or generic; prescription valid for 1 to 3 months", price: "RM 60 to RM 180 per month" },
    { service: "Topical Finasteride (per month)", details: "Compounded topical finasteride 0.1% to 0.25% solution; for men who prefer topical delivery", price: "RM 150 to RM 350 per month" },
    { service: "Dutasteride (per month, off-label)", details: "Dutasteride 0.5mg oral for hair loss; off-label use when finasteride 1mg is insufficient", price: "RM 80 to RM 200 per month" },
    { service: "Topical Minoxidil (per month)", details: "5% topical minoxidil for scalp application; once or twice daily", price: "RM 30 to RM 80 per month" },
    { service: "PRP Hair Treatment (per session)", details: "Platelet-rich plasma injected into scalp; growth factors to promote hair regrowth; 3-session initial course", price: "RM 1,200 to RM 2,500 per session" },
    { service: "Follow-Up Hair Loss Review Consultation", details: "6-month and 12-month structured reviews; hair density photography comparison; prescription renewal", price: "RM 100 to RM 200 per visit" },
  ];

  const faqData = [
    { q: "What is finasteride and how does it treat male pattern hair loss?", a: "Finasteride is a prescription medication primarily used to treat male pattern hair loss (androgenetic alopecia). Finasteride works by blocking the 5-alpha reductase enzyme that converts testosterone to dihydrotestosterone (DHT) in the scalp. Reducing DHT levels in the scalp by 60 to 70% prevents further hair follicle miniaturisation and in many men promotes hair regrowth. Finasteride 1mg is the approved dose for hair loss treatment. Finasteride helps prevent further hair loss in approximately 83 to 90% of men who take it consistently." },
    { q: "How do I buy finasteride in Malaysia?", a: "To buy finasteride in Malaysia, a prescription from a registered medical doctor is required. Finasteride is a prescription medication regulated by the National Pharmaceutical Regulatory Agency (NPRA) under the Ministry of Health Malaysia and is not available over the counter at a pharmacy without a prescription. A doctor must assess your suitability for finasteride before prescribing it, discuss the side effects and risks including the rare risk of suicidal ideation, and establish a monitoring plan. At Nexus Clinic KL, finasteride is prescribed after a full clinical assessment at the initial hair loss consultation." },
    { q: "What is the difference between finasteride 1mg and 5mg?", a: "Finasteride 1mg (sold under the brand name Propecia and as generic finasteride) is the dose approved for male pattern hair loss treatment. Finasteride 1mg produces approximately 60 to 70% reduction in scalp DHT levels. Finasteride 5mg (sold under the brand name Proscar) is primarily used to treat benign prostatic hyperplasia (BPH). The 5mg dose is sometimes used off-label for hair loss when 1mg has been insufficient, but the additional DHT suppression comes with potentially greater side effect risk. At Nexus Clinic KL, finasteride 1mg is the standard starting dose." },
    { q: "What are the side effects of finasteride?", a: "Finasteride side effects include sexual side effects (decreased libido, erectile dysfunction, reduced ejaculatory volume) in approximately 1 to 2% of men in clinical trials. More serious but rare effects include Post-Finasteride Syndrome, involving persistent sexual dysfunction, cognitive changes and neuropsychiatric effects including the risk of suicidal ideation that may persist after discontinuation. Breast changes including gynaecomastia are reported in approximately 0.4 to 0.5% of men. PSA (prostate-specific antigen) is reduced by approximately 50% by finasteride. All finasteride side effects are discussed in full at the initial consultation." },
    { q: "How long does finasteride take to work?", a: "Finasteride requires consistent daily use and results develop gradually. Most men notice that hair loss slows or stops within 3 to 6 months of starting finasteride. Visible hair regrowth, where it occurs, typically begins between 6 and 12 months of continuous use. Maximum hair regrowth benefit is typically seen at 12 to 24 months. The primary benefit of finasteride for most men is stopping hair loss and keeping your hair rather than regrowing what has already been lost. Hair density photography at 6 and 12 months objectively documents whether finasteride is slowing hair loss progression." },
    { q: "Can I take finasteride and minoxidil together?", a: "Yes. Minoxidil and finasteride together are the most effective non-surgical hair restoration programme for most men with androgenetic alopecia. The two medications work through completely different biological mechanisms: finasteride blocks DHT to prevent hair follicle miniaturisation while minoxidil promotes hair regrowth by improving blood flow to hair follicles and stimulating the anagen phase directly. These mechanisms are additive and the combination produces better hair density results than either medication alone. Topical minoxidil 5% applied to the scalp alongside oral finasteride 1mg is the recommended first-line combination programme." },
    { q: "Is dutasteride better than finasteride for hair loss?", a: "Dutasteride produces greater DHT suppression than finasteride (90 to 95% vs 60 to 70%) by blocking both Type I and Type II 5-alpha reductase enzymes. Head-to-head clinical studies show dutasteride produces greater hair density improvement than finasteride. Dutasteride is available as an off-label hair loss treatment in Malaysia as the NPRA has not approved dutasteride specifically for hair loss. At Nexus Clinic KL, dutasteride is considered for men who have used finasteride for 12 months without adequate response. Dutasteride is not a first-line recommendation for all patients." },
    { q: "Can women take finasteride?", a: "Finasteride is not approved for use in women for hair loss treatment in Malaysia. A doctor may prescribe it off-label in specific circumstances for postmenopausal women with androgenetic alopecia under strict medical supervision. Women who are or may be pregnant must never handle crushed or broken finasteride tablets as the drug can be absorbed through the skin and cause birth defects in male foetuses. At Nexus Clinic KL, women presenting with hair loss are evaluated for hormonal causes including thyroid dysfunction, iron deficiency, PCOS and other treatable conditions before any off-label prescription is considered." },
    { q: "What happens if I stop taking finasteride?", a: "Stopping finasteride removes the DHT-blocking effect. After stopping finasteride, DHT levels in the scalp return to their pre-treatment levels within approximately 2 weeks. Hair loss resumes at its pre-treatment rate within 6 to 12 months of stopping finasteride. Any hair regrowth that occurred while taking finasteride is typically lost within 9 to 12 months of stopping the medication. Men who stop finasteride because they think it is not working often see rapid acceleration of hair loss within 6 months. Stopping hair loss is an ongoing process that requires continuous treatment." },
    { q: "Is the hair loss consultation at Nexus Clinic KL free?", a: "The initial hair loss assessment at Nexus Clinic KL is priced at RM 150 to RM 300 and includes a clinical hair and scalp examination, trichoscopy, hair loss pattern grading using the Norwood-Hamilton scale, medical and family history review, hormonal assessment where indicated, a full discussion of the range of treatment options including finasteride, topical minoxidil, dutasteride and PRP, a complete side effects and risks discussion for finasteride including the risk of suicidal ideation, and a personalised hair loss treatment programme recommendation with pricing before any prescription is issued." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-hair/B&A-fue-hair-transplant1.webp",
      after: "/images/B&A-hair/B&A-fue-hair-transplant1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-fue-hair-transplant2.webp",
      after: "/images/B&A-hair/B&A-fue-hair-transplant2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-hair/B&A-fue-hair-transplant3.webp",
      after: "/images/B&A-hair/B&A-fue-hair-transplant3.webp",
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
                <AlertTriangle className="w-4 h-4 text-wine" />
                <span className="text-sm font-inter text-wine font-medium">Prescription Medication • Doctor-Only</span>
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
              >
                Finasteride for Hair Loss in Malaysia for{" "}
                <span className="text-wine italic">Male Pattern Baldness Treatment</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-taupe font-inter leading-relaxed"
              >
                Male pattern hair loss affects a significant proportion of Malaysian men and is one of the most treatable forms of hair loss when addressed early. A receding hairline and thinning crown are the visible expressions of a hormone-driven process.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-brown font-inter"
              >
                Finasteride is the most evidence-supported oral prescription medication for hair loss available in Malaysia. Finasteride works by blocking the enzyme that converts testosterone to DHT, reducing DHT levels in the scalp by 60 to 70% and stopping the progression of follicle miniaturisation.
              </motion.p>

              <motion.div className="bg-wine/5 p-4 rounded-xl border-l-4 border-wine">
                <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Important Clinical Information
                </p>
                <p className="text-taupe font-inter text-sm mt-1">
                  Finasteride is a prescription medication regulated by the National Pharmaceutical Regulatory Agency (NPRA) under the Ministry of Health Malaysia. It cannot be purchased at a pharmacy without a prescription. To buy finasteride safely in Malaysia, a medical consultation with a registered doctor is required.
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
                  Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <Whatsapp message="Hi, I'm interested in finasteride for hair loss at Nexus Clinic KL. I'd like to book a consultation." variant="light" />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <Image
                  src="/images/hair/happy-patient-hair.png"
                  alt="Nexus Clinic Kuala Lumpur - Finasteride Hair Loss Treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream p-4 rounded-xl shadow-lg hidden md:block">
                <p className="font-inter font-bold text-brown">DHT Blocker</p>
                <p className="font-inter text-sm text-taupe">60-70% reduction in scalp DHT</p>
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
                    <p className="font-inter font-semibold text-brown text-sm">NPRA Regulated</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Prescription medication under Ministry of Health Malaysia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Doctor-Prescribed</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Licensed doctor assessment and monitoring</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in hair loss treatment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">83-90% Maintain or Improve Hair Count</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">60-70% Scalp DHT Reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Results at 6 to 12 Months</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Finasteride Hair Loss Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Prescription medication for male pattern baldness</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Syringe, label: "Dosage", value: "Finasteride 1mg once daily" },
              { icon: Clock, label: "Time to Results", value: "3 to 6 months (slowed loss), 6 to 12 months (regrowth)" },
              { icon: Heart, label: "Prescription Required", value: "Yes. NPRA regulated medication." },
              { icon: TrendingUp, label: "Success Rate", value: "83 to 90% maintain or improve hair count" },
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
                <p className="font-inter text-sm text-taupe">What Finasteride Is</p>
                <p className="font-georgia text-brown font-semibold">Prescription medication for male pattern hair loss and BPH</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">How It Works</p>
                <p className="font-georgia text-brown font-semibold">Blocks 5-alpha reductase enzyme, reduces DHT by 60-70%</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Who It Is Used For</p>
                <p className="font-georgia text-brown">Men with male pattern hair loss; early signs respond best</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Regulatory Status</p>
                <p className="font-georgia text-brown">NPRA registered prescription medication</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Finasteride | Free Assessment
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* How Finasteride Works Mechanism Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">How Finasteride Works</h2>
            <p className="text-taupe font-inter">DHT, hair follicle miniaturisation and stopping hair loss</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Mechanism Step</th>
                  <th className="p-4 text-left font-georgia">What Happens Biologically</th>
                  <th className="p-4 text-left font-georgia">Why This Is Relevant</th>
                  <th className="p-4 text-left font-georgia">Clinical Implication</th>
                </tr>
              </thead>
              <tbody>
                {mechanismSteps.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.step}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.biology}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.relevance}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.implication}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Finasteride vs Dutasteride vs Topical Finasteride vs Minoxidil Comparison Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Finasteride vs Dutasteride vs Topical Finasteride vs Minoxidil</h2>
            <p className="text-taupe font-inter">Choosing the right hair loss treatment in Malaysia</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Factor</th>
                  <th className="p-4 text-left font-georgia">Oral Finasteride 1mg</th>
                  <th className="p-4 text-left font-georgia">Topical Finasteride</th>
                  <th className="p-4 text-left font-georgia">Dutasteride</th>
                  <th className="p-4 text-left font-georgia">Minoxidil</th>
                </tr>
              </thead>
              <tbody>
                {treatmentComparison.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.factor}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.oralFinasteride}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.topicalFinasteride}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.dutasteride}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.minoxidil}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Finasteride Side Effects and Risks Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Finasteride Side Effects and Risks</h2>
            <p className="text-taupe font-inter">Honest clinical information for Malaysian men</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Side Effect Category</th>
                  <th className="p-4 text-left font-georgia">What the Evidence Shows</th>
                  <th className="p-4 text-left font-georgia">How Nexus Clinic KL Manages This</th>
                </tr>
              </thead>
              <tbody>
                {sideEffectsProfile.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.category}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.evidence}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.management}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl border-l-4 border-wine">
            <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Critical Safety Information
            </p>
            <p className="text-taupe font-inter text-sm mt-1">
              If at any point during finasteride treatment you experience persistent sexual dysfunction, significant mood changes, depression or any thoughts of self-harm, seek medical help immediately and stop the medication. The convenience of buying finasteride from an online pharmacy without a proper medical consultation means side effects are less likely to be detected and managed promptly.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Finasteride Treatment Results Timeline Slider Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Finasteride Results Timeline</h2>
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
                  <span>Consistency of daily use (missed doses reduce effectiveness)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Stage of hair loss when treatment is started (earlier = better)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Individual genetic response to DHT suppression</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Combination with minoxidil (additive benefit)</span>
                </li>
                <li className="flex items-start gap-3 text-taupe font-inter text-sm">
                  <CheckCircle className="w-5 h-5 text-wine shrink-0 mt-0.5" />
                  <span>Duration of treatment (maximum benefit at 12 to 24 months)</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-wine/5 rounded-xl">
                <p className="text-brown font-inter text-sm text-center">
                  Finasteride requires consistent daily use. Results develop gradually. The primary benefit for most men is stopping hair loss and keeping your hair rather than dramatic regrowth.
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
                    <span className="font-inter text-white/90">Slowed Hair Loss</span>
                    <span className="font-georgia text-xl font-bold text-white">3 to 6 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "40%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Most men notice reduced shedding</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Visible Regrowth</span>
                    <span className="font-georgia text-xl font-bold text-white">6 to 12 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Where regrowth occurs, it begins in this window</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">Maximum Benefit</span>
                    <span className="font-georgia text-xl font-bold text-white">12 to 24 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Maximum hair regrowth benefit seen at this stage</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-inter text-white/90">If Stopped</span>
                    <span className="font-georgia text-xl font-bold text-white">6 to 12 months</span>
                  </div>
                  <div className="w-full bg-white/20 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "20%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="bg-white h-2.5 rounded-full"
                    ></motion.div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">Hair loss resumes at pre-treatment rate after stopping</p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Finasteride must be taken continuously to maintain any benefit. Hair loss resumes at its pre-treatment rate within 6 to 12 months of stopping.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-taupe font-inter text-sm">
              ✨ The most important message for Malaysian men is that finasteride is most effective when started at the early signs of hair loss, before significant follicle miniaturisation has occurred. Start treatment early for best results.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Comprehensive Hair Loss Treatment Programme Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Comprehensive Hair Loss Treatment Programme</h2>
            <p className="text-taupe font-inter">Finasteride, Minoxidil, PRP and scalp assessment</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Treatment Component</th>
                  <th className="p-4 text-left font-georgia">Role in the Hair Loss Programme</th>
                  <th className="p-4 text-left font-georgia">How Nexus Clinic KL Integrates This</th>
                </tr>
              </thead>
              <tbody>
                {programmeComponents.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.component}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.role}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.integration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Finasteride and Hair Loss Treatment Cost in Malaysia 2026</h2>
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
                  <tr key={idx} className="border-t border-taupe/10">
                    <td className="p-4 font-inter font-semibold text-brown">{tier.service}</td>
                    <td className="p-4 font-inter text-taupe text-sm">{tier.details}</td>
                    <td className="p-4 font-inter font-semibold text-wine">{tier.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-wine/5">
                  <td colSpan={3} className="p-4 text-taupe font-inter text-sm italic">
                    Total annual management cost for a comprehensive hair loss programme including finasteride 1mg, topical minoxidil, and three PRP sessions is approximately RM 6,000 to RM 12,000. Men who use only finasteride and minoxidil without PRP have a significantly lower annual cost of approximately RM 1,000 to RM 3,000.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get Your Hair Loss Programme Pricing
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
              Expert Hair Loss Treatment and Finasteride Prescribing at Nexus Clinic KL Malaysia
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Finasteride is the most effective prescription medication for stopping hair loss in men with androgenetic alopecia. The difference between taking finasteride safely and effectively and taking it unsafely is the quality of the clinical assessment, the completeness of the side effects and risks discussion, and the monitoring framework.
            </p>
            <p className="text-cream/90 font-inter">
              Our licensed doctors bring over 15 years of combined clinical experience and have completed over 5,000 procedures. Keeping your hair is achievable with the right treatment programme started at the right time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Free Assessment
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <Whatsapp 
                message="Hi, I'd like to book a consultation for finasteride hair loss treatment at Nexus Clinic KL. Please let me know available slots."
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