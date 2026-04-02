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
  Thermometer,
  Wind,
  Home,
  Car,
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

interface EczemaTreatmentProps {
  locale: string;
}

export default function EczemaLandingPage({ locale }: EczemaTreatmentProps) {
  const severityFramework = [
    { severity: "Mild", signs: "Small dry patches; occasional itch; minimal sleep disruption; no infection; skin not thickened", scorad: "SCORAD below 25; limited areas affected", treatment: "Twice-daily prescription emollient; mild or moderate potency topical corticosteroid applied to flare patches; trigger identification", escalate: "If not clearing within 2 to 3 weeks or spreading" },
    { severity: "Moderate", signs: "Widespread redness; persistent night-time itch; frequent flares; skin thickening; some sleep disruption", scorad: "SCORAD 25 to 50; multiple affected areas", treatment: "Moderate to potent topical corticosteroid for flares; topical calcineurin inhibitor for face and flexures; proactive maintenance twice weekly; antihistamine", escalate: "If uncontrolled after 4 to 6 weeks of combined topical therapy" },
    { severity: "Severe", signs: "Constant itch; widespread inflamed raw skin; weeping or crusted lesions; severely disrupted sleep; risk of secondary infection", scorad: "SCORAD above 50; widespread involvement", treatment: "Potent topical corticosteroid for acute flare; systemic antihistamine; short course oral steroid considered; referral for phototherapy or biologics", escalate: "Urgent review if secondary infection suspected; refer dermatologist if inadequate response" },
    { severity: "Infected Eczema", signs: "Yellow crust or weeping; expanding lesion despite steroid; fever or unwell; hot and painful patches", scorad: "Clinical infection indicators present", treatment: "Oral or topical antibiotic; topical fusidic acid for localised infection; antifungal if fungal co-infection suspected", escalate: "Seek review within 24 to 48 hours if spreading rapidly or patient unwell" },
  ];

  const malaysiaTriggers = [
    { trigger: "House Dust Mites", whyWorse: "Malaysia's year-round humidity above 70% creates ideal breeding conditions; sensitisation rate 60 to 80% in Malaysia vs under 20% in temperate climates", evidence: "PubMed review confirms tropical countries like Malaysia are becoming a hotspot for HDM allergy; HDM allergens are the leading cause of atopic dermatitis flares", management: "Dust mite-proof mattress and pillow covers; wash bedding weekly at 60C; remove carpets and fabric sofas; use HEPA air purifier" },
    { trigger: "Sweat and Humidity", whyWorse: "Prolonged sweat contact with eczematous skin causes histamine release and itch; KL's average relative humidity of 80 to 90% means continuous skin moisture loading", evidence: "Sweat contains lactic acid and ammonia that irritate compromised barrier; studies confirm sweat worsens atopic dermatitis in tropical climates", management: "Shower immediately after sweating; use light cotton clothing; avoid prolonged outdoor activity during midday heat; apply emollient after showering" },
    { trigger: "Air-Conditioning Cycling", whyWorse: "Moving between outdoor heat (35C) and air-conditioned offices (18 to 22C) multiple times daily creates repeated temperature shock", evidence: "Cold dry air reduces ambient humidity, increasing transepidermal water loss; temperature cycling worsens itch in atopic patients", management: "Apply emollient before entering air-conditioned spaces; use small humidifier at desk; carry barrier cream for top-up" },
    { trigger: "Urban Air Pollution", whyWorse: "KL's urban air quality and periodic haze episodes increase fine particulate matter exposure", evidence: "PM2.5 activates Th2 immune pathways and worsens atopic dermatitis severity; haze episodes correlate with dermatology visit spikes", management: "Wear light long sleeves outdoors during haze; shower and apply emollient after outdoor exposure; check daily AQI" },
    { trigger: "Harsh Cleansing Agents", whyWorse: "Malaysian bathing frequency is twice daily due to heat; harsh soaps strip skin's natural lipid layer", evidence: "Surfactant-based soaps raise skin pH and degrade ceramide-producing enzymes; dermatitis improves with soap-free cleansers", management: "Switch to pH-balanced soap-free syndet cleansers; use fragrance-free bath products; limit shower time to 5 to 10 minutes" },
  ];

  const flareActionPlan = [
    { stage: "Early Flare (Day 1 to 2)", signs: "Skin becoming drier and more sensitive; mild redness appearing; itch worsening in evening", action: "Apply emollient immediately and increase to 3 to 4 times daily; apply prescribed topical corticosteroid as directed; avoid known triggers", whenToCall: "If no improvement within 48 to 72 hours" },
    { stage: "Active Flare (Day 3 to 7)", signs: "Visible redness and scaling; persistent itch disrupting sleep; patches spreading to new areas", action: "Continue emollient every 3 to 4 hours; apply topical corticosteroid twice daily; take antihistamine at night; consider wet wrapping", whenToCall: "Within 24 hours if patches spreading rapidly or sleep severely disrupted" },
    { stage: "Suspected Secondary Infection", signs: "Yellow or honey-coloured crusting; weeping that does not dry; expanding hot pink or red skin; fever", action: "Do not apply steroid cream to infected areas; apply only emollient; seek medical review urgently", whenToCall: "Same day or next morning" },
    { stage: "Wet Wrapping Technique", signs: "Suitable for limbs when itch is severe and sleep is impossible", action: "Apply thick layer of emollient; cover with damp cotton bandage; cover damp bandage with dry bandage; leave for 2 to 6 hours", whenToCall: "If wet wrapping causes increased redness or pain" },
    { stage: "Emergency: Widespread Infected Eczema", signs: "Multiple crusted infected patches; high fever; patient very unwell; rapidly spreading hot red skin", action: "This is a medical emergency. Do not self-treat. Go to nearest A&E.", whenToCall: "Proceed directly to A&E or contact clinic immediately" },
  ];

  const pricingTiers = [
    { service: "Initial Eczema Consultation", includes: "Full skin assessment, severity scoring, diagnosis confirmation, personalised treatment plan, written trigger guide", price: "RM 100 to RM 180" },
    { service: "Follow-Up Review", includes: "Progress assessment, treatment plan adjustment, prescription renewal, flare management review", price: "RM 80 to RM 150" },
    { service: "Prescription Emollients", includes: "Medical-grade fragrance-free emollients (cream, ointment and lotion formulations)", price: "RM 30 to RM 90 per item" },
    { service: "Topical Corticosteroid Course", includes: "Graded potency topical corticosteroid with written application instructions", price: "RM 25 to RM 80 per tube" },
    { service: "Topical Calcineurin Inhibitor", includes: "Tacrolimus or pimecrolimus for steroid-sparing maintenance", price: "RM 80 to RM 200 per tube" },
    { service: "Oral Antibiotic Course", includes: "Flucloxacillin or alternative for secondary bacterial infection", price: "RM 40 to RM 120 per course" },
  ];

  const faqData = [
    { q: "Is there a cure for eczema?", a: "No. Eczema has no known cure. The goal of treatment is to manage symptoms effectively, reduce the frequency and severity of flares, prevent secondary infections and maintain quality of life. Many children improve significantly or go into long remission by their teenage years, but a substantial proportion carry the condition into adulthood. Adults who develop eczema for the first time have a different pattern, often with persistent hand or facial eczema driven by contact exposures and occupational factors. At Nexus Clinic KL, we are honest with patients from the first consultation: treatment controls eczema, it does not eliminate it." },
    { q: "Are topical steroids safe for long-term eczema management?", a: "When used correctly, topical corticosteroids are safe and effective for managing eczema. The risk of side effects is related to the potency grade, the body area, the duration of continuous use, and the age of the patient. Mild potency steroids such as 1% hydrocortisone are safe for use on the face and in children for short courses. Moderate and potent steroids used for limited periods on the body under medical supervision carry very low risk of the side effects that have created widespread fear. The risk of skin thinning does not apply to correctly supervised short-course application. At Nexus Clinic KL, every topical steroid prescription includes a written application guide." },
    { q: "Why does my eczema keep coming back despite treatment?", a: "Recurring eczema despite treatment usually results from one of four causes. First, topical treatment being stopped too early when the skin appears to be improving, leaving subclinical inflammation that rebuilds. Second, an unidentified trigger that is continuing to activate the immune response, most commonly house dust mites or a contact allergen. Third, inadequate emollient use between flares, meaning the skin barrier never fully repairs. Fourth, secondary bacterial colonisation with Staphylococcus aureus that maintains chronic low-level inflammation. At Nexus Clinic KL, we systematically review all four causes in patients presenting with treatment-resistant recurring eczema." },
    { q: "What triggers eczema in Malaysia specifically?", a: "Malaysia's tropical environment creates a unique combination of triggers not present in temperate climates. House dust mites thrive in Malaysia's permanently humid indoor environment, with sensitisation rates of 60 to 80 percent. Sweat and heat loading from the climate continuously challenge the eczematous skin barrier. Daily temperature cycling between outdoor heat and heavily air-conditioned offices disrupts barrier function. Periodic haze episodes increase air pollution. Harsh soap products in the context of twice-daily bathing strip the skin lipid layer repeatedly. Effective eczema management in Malaysia requires addressing these specific environmental factors alongside pharmacological treatment." },
    { q: "Can children with eczema be treated at Nexus Clinic KL?", a: "Yes. Eczema is extremely common in Malaysian children, affecting over 20 percent according to the Dermatological Society of Malaysia. At Nexus Clinic KL, our doctors are experienced in assessing eczema in infants, children and adolescents and prescribing age-appropriate treatments including mild-potency topical corticosteroids, pimecrolimus for face and neck in children over two years of age, fragrance-free emollients formulated for paediatric skin, and antihistamines appropriate for the child's age and weight. Parents are provided with written guidance on applying treatments correctly to their child." },
    { q: "What is the difference between eczema and contact dermatitis?", a: "Atopic dermatitis is a genetic chronic inflammatory condition where the skin barrier is intrinsically compromised and the immune system is prone to overreaction. It tends to run in families alongside asthma and allergic rhinitis. Contact dermatitis is a reaction to a specific external substance, either through an immune-mediated allergic mechanism or through direct chemical irritation. The two conditions can coexist in the same patient. The clinical distinction matters because contact dermatitis requires identification and removal of the specific trigger, while atopic dermatitis requires long-term barrier management and anti-inflammatory treatment." },
    { q: "When should I use wet wrapping for eczema?", a: "Wet wrapping is a technique suitable for moderate to severe eczema on the limbs when itch is severe enough to disrupt sleep and topical treatment alone is not providing adequate relief. It involves applying a thick layer of emollient to the affected limb, covering with a damp cotton bandage and placing a dry bandage on top. The wet layer enhances emollient absorption and provides cooling relief that reduces the itch-scratch cycle. It should only be used with emollient under the wrap, not with topical corticosteroid alone, as occlusion significantly increases steroid absorption. It should not be used on infected skin." },
    { q: "What is eczema herpeticum and how serious is it?", a: "Eczema herpeticum is a rare but potentially serious complication of atopic dermatitis caused by herpes simplex virus infecting areas of eczematous skin. It presents as small, painful, punched-out ulcers or vesicles spreading across eczema-affected areas, often accompanied by fever and general unwellness. It is distinguishable from infected bacterial eczema by the characteristic punched-out appearance of the lesions and the absence of yellow crusting. Eczema herpeticum requires urgent systemic antiviral treatment with acyclovir and should not be managed with topical steroids, which would worsen the viral spread. Malaysian eczema patients who notice this pattern should proceed to Accident and Emergency immediately." },
    { q: "Can stress trigger eczema flares in Malaysia?", a: "Yes. Psychological stress is a well-established eczema trigger through its effects on the immune system and the skin barrier. Stress activates the hypothalamic-pituitary-adrenal axis, which alters immune signalling and reduces the skin's production of ceramides and antimicrobial peptides. In Malaysia's fast-paced urban work culture, chronic workplace stress is a significant contributor to the pattern of eczema that improves during holidays and worsens during exam periods, project deadlines or high-pressure work months. At Nexus Clinic KL, stress is included in the trigger assessment at every consultation." },
    { q: "Is the eczema consultation at Nexus Clinic KL free?", a: "The initial eczema consultation at Nexus Clinic KL is priced at RM 100 to RM 180 and includes a full clinical skin assessment, SCORAD severity scoring, eczema type identification, trigger profiling using a Malaysia-specific environmental checklist, a written personalised treatment plan covering all prescribed medications with detailed application instructions, and a written flare action plan. If your presentation requires additional investigation such as patch testing for suspected contact allergen, this is discussed and priced separately at the consultation." },
  ];

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-eczema-treatment1.webp",
      after: "/images/B&A-skin/B&A-eczema-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-eczema-treatment2.webp",
      after: "/images/B&A-skin/B&A-eczema-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-eczema-treatment3.webp",
      after: "/images/B&A-skin/B&A-eczema-treatment3.webp",
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
                <span className="text-sm font-inter text-wine font-medium">Structured Care • Doctor-Led</span>
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
              >
                Trusted Eczema Treatment in Malaysia for{" "}
                <span className="text-wine italic">Long-Term Skin Comfort and Fewer Flares</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-taupe font-inter leading-relaxed"
              >
                Red, cracked, endlessly itchy skin that flares every few weeks and never fully settles. Eczema is one of the most common skin conditions treated at Nexus Clinic KL, and it is also one of the most undertreated.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-brown font-inter"
              >
                At Nexus Clinic KL, eczema management begins with a structured clinical assessment that identifies your eczema type, scores your severity using the validated SCORAD system, identifies your likely trigger profile including Malaysia-specific factors, and builds a written treatment plan with clear escalation criteria.
              </motion.p>

              <motion.div className="bg-wine/5 p-4 rounded-xl border-l-4 border-wine">
                <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Important Clinical Information
                </p>
                <p className="text-taupe font-inter text-sm mt-1">
                  Over 20% of Malaysian children are affected by eczema. The most common management error is applying topical corticosteroid for one or two days then stopping, leaving subclinical inflammation that rebuilds and restarts the cycle.
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
                <Whatsapp message="Hi, I'm interested in eczema treatment at Nexus Clinic KL. I'd like to book a consultation." variant="light" />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <Image
                  src="/images/skin/eczema-treatment.webp"
                  alt="Nexus Clinic Kuala Lumpur - Eczema Treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cream p-4 rounded-xl shadow-lg hidden md:block">
                <p className="font-inter font-bold text-brown">SCORAD Assessment</p>
                <p className="font-inter text-sm text-taupe">Over 5,000 procedures completed</p>
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
                    <p className="font-inter font-semibold text-brown text-sm">MOH Guidelines</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Following Ministry of Health Malaysia CPG 2018</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">Doctor-Only Treatment</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">LCP-certified doctors perform every assessment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                  <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-wine" />
                  </div>
                  <div>
                    <p className="font-inter font-semibold text-brown text-sm">5,000+ Procedures</p>
                    <p className="font-inter text-taupe text-xs leading-relaxed">Extensive experience in skin health</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-taupe/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">SCORAD Severity Scoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Malaysia-Specific Trigger Mapping</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-wine rounded-full" />
                  <span className="font-inter text-xs text-taupe">Written Flare Action Plan</span>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-4">Eczema Treatment at a Glance</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto">Structured care following MOH Malaysia Clinical Practice Guidelines</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Shield, label: "Treatments Available", value: "Emollients, topical steroids, calcineurin inhibitors, antihistamines" },
              { icon: Clock, label: "Consultation Time", value: "30 to 60 minutes for initial assessment" },
              { icon: Heart, label: "Goal", value: "Control flares, repair barrier, reduce itch" },
              { icon: Activity, label: "Follow-Up", value: "4 to 6 weeks for treatment review" },
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
                <p className="font-inter text-sm text-taupe">Condition</p>
                <p className="font-georgia text-brown font-semibold">Eczema (atopic dermatitis and other types)</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Malaysian Prevalence</p>
                <p className="font-georgia text-brown font-semibold">Over 20% of Malaysian children affected</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">Goal of Treatment</p>
                <p className="font-georgia text-brown">No cure; control flares, reduce itch, prevent infection</p>
              </div>
              <div>
                <p className="font-inter text-sm text-taupe">MOH Approved</p>
                <p className="font-georgia text-brown">Yes. All treatments follow MOH CPG 2018</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-center mt-8">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Speak to a Doctor About Your Eczema | Free Assessment
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Eczema Severity-to-Treatment Step-Up Framework Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Eczema Severity-to-Treatment Framework</h2>
            <p className="text-taupe font-inter">Following Ministry of Health Malaysia Clinical Practice Guidelines 2018</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Severity Level</th>
                  <th className="p-4 text-left font-georgia">Clinical Signs</th>
                  <th className="p-4 text-left font-georgia">SCORAD Guide</th>
                  <th className="p-4 text-left font-georgia">Recommended Treatment</th>
                  <th className="p-4 text-left font-georgia">When to Escalate</th>
                </tr>
              </thead>
              <tbody>
                {severityFramework.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.severity}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.signs}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.scorad}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.treatment}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.escalate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              A critical clinical point: most Malaysian patients with mild to moderate eczema are undertreated, not overtreated. Continue topical corticosteroid until skin is completely clear plus two to three additional days, not stopping at the first sign of improvement.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Malaysia-Specific Triggers Table */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Malaysia-Specific Eczema Triggers</h2>
            <p className="text-taupe font-inter">Why eczema is harder to control in tropical Malaysia</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Trigger</th>
                  <th className="p-4 text-left font-georgia">Why It Is Worse in Malaysia</th>
                  <th className="p-4 text-left font-georgia">Evidence</th>
                  <th className="p-4 text-left font-georgia">Practical Management</th>
                </tr>
              </thead>
              <tbody>
                {malaysiaTriggers.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.trigger}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.whyWorse}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.evidence}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.management}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Eczema Flare Emergency Action Plan Table */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Eczema Flare Emergency Action Plan</h2>
            <p className="text-taupe font-inter">What to do in the first 48 hours of a flare</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Flare Stage</th>
                  <th className="p-4 text-left font-georgia">Signs to Look For</th>
                  <th className="p-4 text-left font-georgia">Action at Home</th>
                  <th className="p-4 text-left font-georgia">When to Call Clinic</th>
                </tr>
              </thead>
              <tbody>
                {flareActionPlan.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10 hover:bg-cream/30 transition-colors">
                    <td className="p-4 font-inter font-semibold text-brown">{item.stage}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.signs}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.action}</td>
                    <td className="p-4 text-taupe font-inter text-sm">{item.whenToCall}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl border-l-4 border-wine">
            <p className="text-wine font-inter font-semibold text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Critical Clinical Message
            </p>
            <p className="text-taupe font-inter text-sm mt-1">
              Applying topical corticosteroids to a secondary bacterial infection accelerates the spread of the infection. If you notice yellow crusting, expanding hot red patches or weeping that does not dry within 24 hours, seek medical review for antibiotic prescription.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Types of Eczema Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Types of Eczema Treated at Nexus Clinic KL</h2>
            <p className="text-taupe font-inter">Each type requires a different management approach</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-wine mb-2">Atopic Dermatitis</h3>
              <p className="text-taupe font-inter text-sm">Most common form, affecting over 20% of Malaysian children. Genetic inflammatory condition linked to filaggrin protein deficiency. Presents with flexural eczema in elbows and knees. Management follows MOH Malaysia 2018 CPG framework.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-wine mb-2">Contact Dermatitis</h3>
              <p className="text-taupe font-inter text-sm">Allergic or irritant reaction to specific substances including nickel, latex, preservatives, or fragrances. Assessed through detailed history and patch testing. Treatment includes barrier creams and trigger avoidance.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-wine mb-2">Seborrhoeic Dermatitis</h3>
              <p className="text-taupe font-inter text-sm">Scaly, greasy patches on oily areas including scalp, face, chest and back. Driven by abnormal immune response to Malassezia yeast. Treatment includes antifungal creams and medicated shampoos.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-light p-6 rounded-xl border border-taupe/10">
              <h3 className="font-georgia text-xl text-wine mb-2">Hand Eczema</h3>
              <p className="text-taupe font-inter text-sm">Extremely common in Malaysian patients, frequently occupationally driven affecting healthcare workers, food handlers, and cleaners. Treatment emphasises barrier restoration and protective measures including glove use.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Daily Eczema Skincare Routine */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Daily Eczema Skincare Routine</h2>
            <p className="text-taupe font-inter">Foundation of long-term eczema management</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border-l-4 border-wine">
              <h3 className="font-georgia text-lg text-brown mb-3">Morning</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Quick rinse or gentle cleanse</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Apply emollient within 3 minutes of shower</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Sunscreen if exposed (sensitive-skin friendly)</span>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border-l-4 border-wine">
              <h3 className="font-georgia text-lg text-brown mb-3">Midday (if you sweat)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Rinse sweat if possible</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Reapply emollient if skin feels tight</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Avoid fragranced wipes</span>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl border-l-4 border-wine">
              <h3 className="font-georgia text-lg text-brown mb-3">Night</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Lukewarm shower, pat dry</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Apply emollient immediately</span>
                </li>
                <li className="flex items-start gap-2 text-taupe font-inter text-sm">
                  <CheckCircle className="w-4 h-4 text-wine shrink-0 mt-0.5" />
                  <span>Use medicated creams only where needed</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-6 p-4 bg-wine/5 rounded-xl text-center">
            <p className="text-brown font-inter text-sm">
              The three-minute window after showering is when transepidermal water loss is actively occurring and emollient application is most effective at sealing moisture.
            </p>
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
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">Eczema Treatment Cost in Malaysia 2026</h2>
            <p className="text-taupe font-inter">Transparent pricing at Nexus Clinic KL</p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-xl overflow-hidden shadow-md">
              <thead className="bg-wine text-light">
                <tr>
                  <th className="p-4 text-left font-georgia">Service / Treatment</th>
                  <th className="p-4 text-left font-georgia">What Is Included</th>
                  <th className="p-4 text-left font-georgia">Price Guide (RM) 2026</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((item, idx) => (
                  <tr key={idx} className="border-t border-taupe/10">
                    <td className="p-4 font-inter font-semibold text-brown">{item.service}</td>
                    <td className="p-4 font-inter text-taupe text-sm">{item.includes}</td>
                    <td className="p-4 font-inter font-semibold text-wine">{item.price}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-wine/5">
                  <td colSpan={3} className="p-4 text-taupe font-inter text-sm italic">
                    Total ongoing treatment costs depend on severity and frequency of flares. All treatment is structured to reduce frequency and severity over time through proper long-term management.
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <motion.div variants={fadeInUp} className="text-center mt-6">
            <button className="inline-flex items-center gap-2 text-wine font-inter font-semibold hover:gap-3 transition-all">
              Get Your Eczema Treatment Cost Estimate
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
              Structured Eczema Management at Nexus Clinic KL
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Eczema in Malaysia is harder to control than eczema in temperate climates, and it deserves a treatment plan that acknowledges this. House dust mites, sweat, heat, humidity, and daily temperature cycling keep Malaysian patients in a cycle of flares that generic treatment plans never fully address.
            </p>
            <p className="text-cream/90 font-inter">
              Every eczema patient receives a severity-matched treatment protocol, a written trigger management guide calibrated to Malaysian conditions, a flare action plan they can follow at home, and the correct information about their medications to use them effectively without fear.
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
                message="Hi, I'd like to book a consultation for eczema treatment at Nexus Clinic KL. Please let me know available slots."
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