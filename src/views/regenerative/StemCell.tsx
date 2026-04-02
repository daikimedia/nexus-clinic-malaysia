"use client";

import { motion } from "framer-motion";
import {
  Shield,
  AlertCircle,
  MapPin,
  ChevronRight,
  Droplets,
  Microscope,
  AlertTriangle,
  Sparkles,
  Target,
  FileCheck,
  Clock,
  Syringe,
  Heart,
  Activity,
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
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const StemCellLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "regenerative/stemCell");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-regenerative/B&A-stem-cell-therapy1.webp",
      after: "/images/B&A-regenerative/B&A-stem-cell-therapy1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-regenerative/B&A-stem-cell-therapy2.webp",
      after: "/images/B&A-regenerative/B&A-stem-cell-therapy2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-regenerative/B&A-stem-cell-therapy3.webp",
      after: "/images/B&A-regenerative/B&A-stem-cell-therapy3.webp",
    },
  ];

  return (
    <div className="bg-light font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-cream via-light to-rose/10" />

        <div className="absolute top-20 right-0 w-96 h-96 bg-wine/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 relative z-10"
        >
          <div className="max-w-4xl">
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-glass backdrop-blur-sm rounded-full text-brown border border-taupe/20">
                <Shield className="w-4 h-4 text-wine" />
                Advanced Stem Cell Therapies in Malaysia for Cellular Regeneration and Lasting Vitality | Nexus Clinic KL
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-georgia text-brown mb-6 leading-tight"
            >
              Stem Cell Therapies in Malaysia: Repair and Regeneration with Advanced Regenerative Medicine
              <span className="block text-wine mt-2">
                at Nexus Clinic KL
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-taupe mb-8 leading-relaxed"
            >
              The promise of stem cells lies in something no other treatment can replicate: the ability to use the body's own biological intelligence to repair damaged tissues, modulate inflammation, and restore function at the cellular level. Stem cell therapy in Malaysia has moved from experimental fringe to a structured, doctor-led speciality, and Nexus Clinic KL is at the forefront of delivering these treatments with the clinical rigour and patient safety standards they require.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-glass backdrop-blur-sm border border-cream rounded-2xl p-6 md:p-8 max-w-2xl"
            >
              <p className="text-brown/80 text-lg leading-relaxed">
                Nexus Clinic KL serves patients across Kuala Lumpur, Petaling Jaya, Bangsar, KLCC, Ampang, Mont Kiara and throughout Malaysia. Our regenerative medicine team works with licensed, MOH-compliant stem cell sources and personalised treatment plans built around your health profile and goals.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stem Cell Treatment at a Glance Table */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-georgia text-brown text-center mb-8">
            Stem Cell Treatment at a Glance
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-wine/20">
                <tr>
                  <th className="p-4 text-left text-brown font-georgia">Treatment</th>
                  <th className="p-4 text-left text-brown font-georgia">Stem Cell Therapy (MSC-Based)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe/20">
                <tr><td className="p-4 font-medium text-brown">Session Time</td><td className="p-4 text-taupe text-sm">60 to 120 minutes depending on protocol</td></tr>
                <tr><td className="p-4 font-medium text-brown">Downtime</td><td className="p-4 text-taupe text-sm">Minimal. Mild fatigue or injection-site tenderness for 24 to 48 hours</td></tr>
                <tr><td className="p-4 font-medium text-brown">Results Timeline</td><td className="p-4 text-taupe text-sm">Initial improvements in 4 to 8 weeks; full effects over 3 to 6 months</td></tr>
                <tr><td className="p-4 font-medium text-brown">Longevity</td><td className="p-4 text-taupe text-sm">12 to 24 months per session; maintenance sessions recommended</td></tr>
                <tr><td className="p-4 font-medium text-brown">Administration</td><td className="p-4 text-taupe text-sm">Intravenous (IV) infusion or localised injection depending on condition</td></tr>
                <tr><td className="p-4 font-medium text-brown">Anaesthesia</td><td className="p-4 text-taupe text-sm">Topical or local anaesthetic for injection sites; none for IV infusion</td></tr>
                <tr><td className="p-4 font-medium text-brown">Suitable For</td><td className="p-4 text-taupe text-sm">Anti-aging, joint degeneration, chronic inflammation, immune support, cellular rejuvenation</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Understanding Stem Cells Section */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl font-georgia text-brown mb-6">
                Understanding Stem Cells: What Makes Them Different from Other Cell Types
              </h2>
              <div className="prose prose-lg text-taupe">
                <p className="text-lg leading-relaxed">
                  Stem cells are unique among all cell types in the human body because of two defining properties: self-renewal and differentiation. Self-renewal means they can divide and replicate themselves indefinitely. Differentiation means they can transform into specialised cells, such as bone, cartilage, muscle, nerve, or skin cells, depending on where they are needed. This combination is what gives stem cells their extraordinary regenerative potential.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Among the various classes of stem cells, mesenchymal stem cells (MSC) have become the foundation of modern regenerative therapy. MSCs can be derived from several tissue sources including umbilical cord, bone marrow, and adipose tissue.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  The distinction from embryonic stem cells and pluripotent stem cells is important. At Nexus Clinic KL, all stem cell therapies use adult MSCs, predominantly from umbilical cord and Wharton's Jelly sources. These are ethically sourced, clinically processed, and carry no association with embryonic cell lines.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-wine/20 to-rose/20 rounded-3xl blur-2xl" />
              <img
                src="/images/regenerative/stem-cell-therapy.webp"
                alt="Stem cell therapy microscopic view"
                className="relative z-10 rounded-3xl shadow-2xl w-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stem Cells Used in Treatment Table */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-georgia text-brown text-center mb-8">
            Stem Cells Used in Treatment: Comparing Sources for Your Specific Goals
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-wine/20">
                <tr>
                  <th className="p-4 text-left text-brown font-georgia">Source</th>
                  <th className="p-4 text-left text-brown font-georgia">Cell Type</th>
                  <th className="p-4 text-left text-brown font-georgia">Potency</th>
                  <th className="p-4 text-left text-brown font-georgia">Collection Method</th>
                  <th className="p-4 text-left text-brown font-georgia">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe/20">
                <tr><td className="p-4 font-medium text-brown">Umbilical Cord (UC-MSC)</td><td className="p-4 text-taupe text-sm">MSC</td><td className="p-4 text-taupe text-sm">Very High</td><td className="p-4 text-taupe text-sm">Donated postnatal cord</td><td className="p-4 text-taupe text-sm">Anti-aging, immune support, general rejuvenation</td></tr>
                <tr><td className="p-4 font-medium text-brown">Wharton's Jelly (WJ-MSC)</td><td className="p-4 text-taupe text-sm">MSC</td><td className="p-4 text-taupe text-sm">Highest</td><td className="p-4 text-taupe text-sm">Cord tissue extraction</td><td className="p-4 text-taupe text-sm">Neurological, autoimmune, systemic conditions</td></tr>
                <tr><td className="p-4 font-medium text-brown">Bone Marrow (BM-MSC)</td><td className="p-4 text-taupe text-sm">MSC + HSC</td><td className="p-4 text-taupe text-sm">High</td><td className="p-4 text-taupe text-sm">Bone marrow aspiration</td><td className="p-4 text-taupe text-sm">Blood disorders, orthopaedic repair</td></tr>
                <tr><td className="p-4 font-medium text-brown">Adipose Tissue (AD-MSC)</td><td className="p-4 text-taupe text-sm">MSC</td><td className="p-4 text-taupe text-sm">Moderate-High</td><td className="p-4 text-taupe text-sm">Minor fat extraction</td><td className="p-4 text-taupe text-sm">Joint, skin, localised conditions</td></tr>
                <tr><td className="p-4 font-medium text-brown">Peripheral Blood Stem Cells</td><td className="p-4 text-taupe text-sm">HSC</td><td className="p-4 text-taupe text-sm">Moderate</td><td className="p-4 text-taupe text-sm">Blood draw after mobilisation</td><td className="p-4 text-taupe text-sm">Blood cancers, immune reconstitution</td></tr>
                <tr><td className="p-4 font-medium text-brown">Pluripotent Stem Cells (iPSC)</td><td className="p-4 text-taupe text-sm">iPSC</td><td className="p-4 text-taupe text-sm">Highest (lab)</td><td className="p-4 text-taupe text-sm">Reprogrammed adult cells</td><td className="p-4 text-taupe text-sm">Research and future clinical trials</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Stem Cell Therapies and Conditions Table */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-georgia text-brown text-center mb-8">
            Stem Cell Therapies and the Variety of Conditions They Address
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-cream rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-wine/20">
                <tr>
                  <th className="p-4 text-left text-brown font-georgia">Condition Category</th>
                  <th className="p-4 text-left text-brown font-georgia">Specific Applications</th>
                  <th className="p-4 text-left text-brown font-georgia">Evidence Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe/20">
                <tr><td className="p-4 font-medium text-brown">Orthopaedic</td><td className="p-4 text-taupe text-sm">Osteoarthritis, cartilage repair, joint degeneration, sports injuries</td><td className="p-4 text-taupe text-sm">Moderate to Strong</td></tr>
                <tr><td className="p-4 font-medium text-brown">Anti-Aging</td><td className="p-4 text-taupe text-sm">Cellular rejuvenation, skin quality, vitality, immune modulation</td><td className="p-4 text-taupe text-sm">Growing Clinical Evidence</td></tr>
                <tr><td className="p-4 font-medium text-brown">Neurological</td><td className="p-4 text-taupe text-sm">Parkinson's support, stroke recovery, neuropathy</td><td className="p-4 text-taupe text-sm">Early to Moderate</td></tr>
                <tr><td className="p-4 font-medium text-brown">Autoimmune</td><td className="p-4 text-taupe text-sm">Lupus, rheumatoid arthritis, inflammatory bowel conditions</td><td className="p-4 text-taupe text-sm">Moderate</td></tr>
                <tr><td className="p-4 font-medium text-brown">Metabolic</td><td className="p-4 text-taupe text-sm">Diabetes management support, liver conditions, metabolic syndrome</td><td className="p-4 text-taupe text-sm">Emerging</td></tr>
                <tr><td className="p-4 font-medium text-brown">Women's Health</td><td className="p-4 text-taupe text-sm">Hormonal balance support, ovarian rejuvenation, post-menopausal wellness</td><td className="p-4 text-taupe text-sm">Early Stage</td></tr>
                <tr><td className="p-4 font-medium text-brown">Aesthetic</td><td className="p-4 text-taupe text-sm">Skin rejuvenation, hair restoration support, collagen stimulation</td><td className="p-4 text-taupe text-sm">Moderate</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Malaysia Destination Section */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <motion.div
            variants={scaleIn}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-wine/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-wine" />
              <h2 className="text-3xl font-georgia text-brown">
                Malaysia Has Become a Leading Destination for Stem Cell Medical Tourism in Asia
              </h2>
            </div>

            <p className="text-taupe mb-6">
              Malaysia has become one of the most strategically positioned countries in Southeast Asia for advanced regenerative medicine. The combination of internationally trained doctors, MOH-regulated clinical standards, competitive pricing relative to Western markets, and strong English-language medical infrastructure has made Kuala Lumpur a preferred destination for both local and international patients choosing stem cell therapy.
            </p>

            <p className="text-taupe mb-6">
              The national stem cell research ecosystem is well developed. Leading academic institutions, government-backed frameworks under the Ministry of Health, and a growing community of regenerative medicine specialists have created a regulated medical environment where patients can access advanced stem cell treatments in Malaysia with confidence.
            </p>

            <div className="overflow-x-auto mt-6">
              <table className="w-full bg-cream rounded-2xl overflow-hidden">
                <thead className="bg-wine/20">
                  <tr><th className="p-3 text-left text-brown">Factor</th><th className="p-3 text-left text-brown">Malaysia</th><th className="p-3 text-left text-brown">Comparable Western Markets</th></tr>
                </thead>
                <tbody className="divide-y divide-taupe/20">
                  <tr><td className="p-3 text-brown">Average Cost (MSC session)</td><td className="p-3 text-taupe text-sm">RM 8,000 to RM 80,000</td><td className="p-3 text-taupe text-sm">USD 20,000 to USD 100,000+</td></tr>
                  <tr><td className="p-3 text-brown">Regulatory Body</td><td className="p-3 text-taupe text-sm">Ministry of Health Malaysia (KKM)</td><td className="p-3 text-taupe text-sm">FDA / EMA / TGA</td></tr>
                  <tr><td className="p-3 text-brown">Doctor Qualification</td><td className="p-3 text-taupe text-sm">MMC-registered, LCP-certified</td><td className="p-3 text-taupe text-sm">Board-certified specialists</td></tr>
                  <tr><td className="p-3 text-brown">Wait Times</td><td className="p-3 text-taupe text-sm">Minimal, often same-week consultation</td><td className="p-3 text-taupe text-sm">Weeks to months</td></tr>
                  <tr><td className="p-3 text-brown">Language Access</td><td className="p-3 text-taupe text-sm">English, Mandarin, Malay, Tamil</td><td className="p-3 text-taupe text-sm">Primary language only</td></tr>
                  <tr><td className="p-3 text-brown">Combined Wellness</td><td className="p-3 text-taupe text-sm">Integrated anti-aging and regenerative care</td><td className="p-3 text-taupe text-sm">Separate specialist referrals</td></tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Anti Aging Stem Cell Therapy Section */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <motion.div
            variants={scaleIn}
            className="bg-wine/5 rounded-3xl p-8 md:p-12 border border-wine/20"
          >
            <h2 className="text-3xl font-georgia text-brown mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-wine" />
              Anti Aging Stem Cell Therapy: Addressing the Cellular Effects of Aging
            </h2>

            <p className="text-taupe mb-4">
              The aging process is not simply the passage of time. At the cellular level, aging is a measurable decline in the body's ability to regenerate damaged tissues and organs, clear senescent cells, reduce inflammation, and maintain the vitality of key systems. Signs of aging visible on the surface, such as skin quality decline, reduced energy, slower recovery, and cognitive changes, are downstream effects of processes happening in tissues and cellular populations throughout the body.
            </p>

            <p className="text-taupe mb-4">
              Anti aging stem cell therapy works by replenishing the body's natural healing capacity with fresh, highly potent MSCs. These cells migrate toward damaged or inflamed tissue, release growth factors that stimulate collagen and tissue repair, and modulate the immune environment to reduce chronic low-grade inflammation, known in research as inflammaging. Patients describe the result as a return of cellular energy: improved skin quality, better sleep, clearer thinking, and a subjective sense of rejuvenation that goes beyond what topical or hormonal treatments can achieve.
            </p>

            <p className="text-taupe">
              At Nexus Clinic KL, anti aging stem cell programmes are paired with a complete health assessment and may be combined with complementary regenerative therapy options such as hormone replacement therapy in Malaysia and anti-aging therapy to address the full spectrum of age-related cellular decline.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stem Cell Therapy Uses at Nexus Clinic KL */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-georgia text-brown text-center mb-8"
          >
            Stem Cell Therapy Uses at Nexus Clinic KL: Products and Protocols
          </motion.h2>

          <div className="space-y-6">
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-georgia text-xl text-wine mb-3">UC-MSC Intravenous Infusion (Umbilical Cord Mesenchymal Stem Cells)</h3>
              <p className="text-taupe">The most commonly used protocol for systemic applications including anti-aging, immune support, and general cellular rejuvenation. UC-MSCs are young, highly potent, and have a low risk of immune rejection due to their immune-privileged nature. They are collected from voluntarily donated umbilical cords after healthy births. The IV delivery method ensures systemic distribution, allowing cells to repair damaged tissues across multiple organ systems simultaneously.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-georgia text-xl text-wine mb-3">WJ-MSC Protocol (Wharton's Jelly Mesenchymal Stem Cells)</h3>
              <p className="text-taupe">The mesenchymal stem cell derived from Wharton's Jelly within the umbilical cord represents one of the most potent MSC sources available. WJ-MSCs show superior proliferative capacity and immunomodulatory function compared to bone marrow-derived MSCs. They are particularly suited for neurological support, advanced autoimmune conditions, and patients seeking the most concentrated regenerative treatment available. At Nexus Clinic KL, WJ-MSC protocols are administered under physician supervision with full pre-treatment workup.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-georgia text-xl text-wine mb-3">Localised MSC Injection</h3>
              <p className="text-taupe">For conditions requiring targeted repair, such as osteoarthritis knee treatment, cartilage regeneration, or localised tissue damage, stem cells are delivered directly to the treatment site. This approach maximises the concentration of cells at the area of repair and reduces the total dosage required. Patients with orthopaedic concerns, hair restoration goals, or skin rejuvenation objectives may benefit from localised injection protocols.</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-georgia text-xl text-wine mb-3">Exosome-Enhanced Stem Cell Therapy</h3>
              <p className="text-taupe">Exosomes are extracellular vesicles secreted by stem cells that carry the regenerative signalling molecules responsible for much of the therapeutic effect. Some advanced protocols use concentrated exosome preparations alongside or in place of whole cell infusions. This approach is minimally invasive, highly targeted, and represents the advancement frontier of stem cell science. At Nexus Clinic KL, exosome protocols are available as standalone treatments or as adjuncts to full MSC infusions.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Procedure Step by Step */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-georgia text-brown text-center mb-8"
          >
            The Stem Cell Therapy Procedure at Nexus Clinic KL: Step by Step
          </motion.h2>

          <div className="space-y-4">
            <motion.div variants={fadeInUp} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md">
              <div className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-white text-sm shrink-0">1</div>
              <div><p className="font-medium text-brown">Initial consultation and thorough medical assessment.</p><p className="text-taupe text-sm">Your doctor reviews your health history, current medications, goals, and any relevant investigations. Blood panels and imaging may be ordered where indicated. Suitability is confirmed before any treatment plan is discussed.</p></div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md">
              <div className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-white text-sm shrink-0">2</div>
              <div><p className="font-medium text-brown">Protocol selection and treatment plan design.</p><p className="text-taupe text-sm">Based on your assessment, your doctor selects the appropriate MSC source, dosage, and administration route. A personalised treatment plan is provided in writing, including session frequency, monitoring milestones, and expected outcomes.</p></div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md">
              <div className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-white text-sm shrink-0">3</div>
              <div><p className="font-medium text-brown">Pre-treatment preparation.</p><p className="text-taupe text-sm">For IV infusion protocols, standard pre-infusion vitals are checked. For localised injections, the treatment area is cleaned and a topical or local anaesthetic is applied. All stem cell preparations are confirmed for viability and sterility on the day of treatment.</p></div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md">
              <div className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-white text-sm shrink-0">4</div>
              <div><p className="font-medium text-brown">Stem cell administration.</p><p className="text-taupe text-sm">IV infusions take approximately 60 to 120 minutes in a supervised clinical setting. Localised injections are completed in 20 to 45 minutes depending on the treatment area. Patients remain comfortable throughout and are monitored during the session.</p></div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md">
              <div className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-white text-sm shrink-0">5</div>
              <div><p className="font-medium text-brown">Post-treatment monitoring and follow-up.</p><p className="text-taupe text-sm">Vital signs are checked post-treatment and patients are briefed on aftercare. A structured follow-up schedule is provided. Results are tracked across weeks and months, with the doctor available for any concerns during the recovery period.</p></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Stem Cell Treatment Price Table */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-georgia text-brown text-center mb-8">
            Stem Cell Treatment Price in Malaysia 2026: Transparent Pricing at Nexus Clinic KL
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-wine/20">
                <tr>
                  <th className="p-4 text-left text-brown font-georgia">Programme</th>
                  <th className="p-4 text-left text-brown font-georgia">Cell Source</th>
                  <th className="p-4 text-left text-brown font-georgia">Dosage</th>
                  <th className="p-4 text-left text-brown font-georgia">Price Range (RM) 2026</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe/20">
                <tr><td className="p-4 font-medium text-brown">Anti-Aging Starter</td><td className="p-4 text-taupe text-sm">UC-MSC (Umbilical Cord)</td><td className="p-4 text-taupe text-sm">50 million cells</td><td className="p-4 text-taupe text-sm">RM 8,000 to RM 15,000</td></tr>
                <tr><td className="p-4 font-medium text-brown">Anti-Aging Advanced</td><td className="p-4 text-taupe text-sm">WJ-MSC (Wharton's Jelly)</td><td className="p-4 text-taupe text-sm">100 million cells</td><td className="p-4 text-taupe text-sm">RM 15,000 to RM 28,000</td></tr>
                <tr><td className="p-4 font-medium text-brown">Joint / Orthopaedic</td><td className="p-4 text-taupe text-sm">AD-MSC or UC-MSC</td><td className="p-4 text-taupe text-sm">50 to 100 million cells</td><td className="p-4 text-taupe text-sm">RM 12,000 to RM 25,000</td></tr>
                <tr><td className="p-4 font-medium text-brown">Systemic Rejuvenation</td><td className="p-4 text-taupe text-sm">WJ-MSC IV Infusion</td><td className="p-4 text-taupe text-sm">100 to 200 million cells</td><td className="p-4 text-taupe text-sm">RM 25,000 to RM 50,000</td></tr>
                <tr><td className="p-4 font-medium text-brown">Immune Support</td><td className="p-4 text-taupe text-sm">UC-MSC IV Infusion</td><td className="p-4 text-taupe text-sm">50 to 100 million cells</td><td className="p-4 text-taupe text-sm">RM 10,000 to RM 20,000</td></tr>
                <tr><td className="p-4 font-medium text-brown">Maintenance Session</td><td className="p-4 text-taupe text-sm">UC-MSC or WJ-MSC</td><td className="p-4 text-taupe text-sm">50 million cells</td><td className="p-4 text-taupe text-sm">RM 8,000 to RM 15,000</td></tr>
                <tr><td className="p-4 font-medium text-brown">Consultation</td><td className="p-4 text-taupe text-sm">Nexus Clinic KL, Wisma UOA II</td><td className="p-4 text-taupe text-sm">N/A</td><td className="p-4 text-taupe text-sm">Complimentary</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <motion.div
            variants={scaleIn}
            className="bg-white rounded-3xl p-8 md:p-12 border border-rose/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-rose" />
              <h2 className="text-3xl font-georgia text-brown">
                Safety and Efficacy: What Patients Need to Know About Stem Cell Therapy
              </h2>
            </div>

            <p className="text-taupe mb-4">
              Patient safety is the foundation of every stem cell protocol at Nexus Clinic KL. All treatments use approved stem cell preparations from accredited, MOH-compliant cell processing laboratories. Doctors who administer stem cell therapy at the clinic are registered with the Malaysian Medical Council and trained in regenerative medicine protocols. No patient receives treatment based on an incomplete clinical picture.
            </p>

            <p className="text-taupe mb-4">
              Stem cell therapies are not without risk. Side effects are generally mild and transient, including temporary fatigue, mild fever, or injection-site discomfort in the 24 to 48 hours after treatment. In rare cases, immune responses can occur, particularly with allogeneic (donor-derived) preparations. The risk is substantially reduced by the natural immune-privileged properties of MSCs, which carry low surface marker expression and are less likely to trigger rejection than other cell types. Immune compatibility screening is performed as part of the pre-treatment medical assessment.
            </p>

            <p className="text-taupe">
              Patients should approach any clinic offering regenerative treatment with healthy scrutiny. Legitimate providers will always disclose the cell source, processing laboratory, dosage, and clinical rationale for their recommended protocol. Nexus Clinic KL welcomes detailed questions and provides written treatment documentation before any session proceeds. Successful case studies from our clinic reflect an evidence-based approach where patient outcomes are tracked and reviewed rather than assumed.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section - 10 Questions */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-georgia text-brown text-center mb-12"
          >
            Frequently Asked Questions About Stem Cell Therapy in Malaysia
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                q: "Is stem cell therapy in Malaysia legal and regulated?",
                a: "Yes. Stem cell therapy in Malaysia is legal when administered by licensed medical practitioners following the guidelines established by the Ministry of Health Malaysia and the Malaysian Medical Council. The regulatory framework covers cell sourcing, processing standards, clinical administration, and patient consent. Patients should confirm that their chosen clinic operates under these regulated medical standards and that treating doctors are MMC-registered."
              },
              {
                q: "Which stem cell therapies are approved for use in Malaysia?",
                a: "Currently, the most established and approved stem cell applications in Malaysia include haematopoietic stem cell transplantation for blood disorders and leukaemia, and MSC-based therapies for orthopaedic and regenerative applications conducted under institutional oversight. Anti-aging and wellness-based stem cell programmes are offered in private regenerative medicine clinics under physician supervision. Patients are encouraged to discuss evidence levels for their specific condition during their stem cell therapy consultation."
              },
              {
                q: "How many stem cell therapy sessions will I need?",
                a: "The number of sessions depends on the condition being treated, the severity of cellular decline or tissue damage, and the response to initial treatment. Many patients see meaningful improvement after a single session followed by maintenance at 12 to 18 months. Those with chronic inflammatory or degenerative conditions may benefit from a structured multi-session treatment plan. Your doctor at Nexus Clinic KL will personalise your protocol during the initial medical consultation."
              },
              {
                q: "Are the stem cells used at Nexus Clinic KL ethically sourced?",
                a: "Yes. All stem cell preparations used at Nexus Clinic KL are derived from voluntarily donated umbilical cord tissue obtained after healthy, full-term births. No harm comes to the mother or the newborn during collection. Cord tissue is routinely discarded after birth, and its use for therapeutic purposes represents an ethically sound application. No embryonic stem cells or other ethically contested cell types are used in any clinical protocol at the clinic."
              },
              {
                q: "How does stem cell therapy compare to hormone replacement therapy for anti-aging?",
                a: "Both are valid components of a comprehensive regenerative care programme, but they address different mechanisms. Hormone replacement therapy corrects hormonal imbalances that drive symptoms like fatigue, mood changes, and metabolic slowdown. Stem cell therapy acts at a more fundamental level by addressing the body's natural healing capacity and cellular health directly. Many patients at Nexus Clinic KL combine both approaches as part of an integrated programme."
              },
              {
                q: "Choosing stem cell therapy: What should I look for in a clinic?",
                a: "When choosing stem cell therapy in Malaysia, prioritise clinics that are transparent about cell sourcing, processing standards, and the scientific basis for their protocols. Ask whether the treating doctor is MMC-registered and whether the stem cell preparation comes from a licensed, accredited laboratory. Avoid providers making absolute cure claims or offering treatment without a thorough medical consultation. Nexus Clinic KL provides full documentation on every aspect of the treatment plan before any commitment is required."
              },
              {
                q: "Can stem cell therapy rejuvenate skin and improve appearance?",
                a: "Stem cell therapy contributes to skin rejuvenation by improving collagen synthesis, reducing systemic inflammation, and supporting cellular turnover. The effects are not cosmetic in the traditional sense. They reflect genuine cellular improvement rather than surface-level treatment. Patients undergoing systemic MSC infusions often report improved skin texture, more even tone, and a general sense of freshness that develops progressively over three to six months post-treatment."
              },
              {
                q: "What is the difference between a mesenchymal stem cell (MSC) and other stem cells?",
                a: "A mesenchymal stem cell is a specific type of adult stem cell found in connective tissues including bone marrow, adipose tissue, and umbilical cord. Unlike haematopoietic stem cells, which primarily produce blood cells, MSCs differentiate into structural cell types including bone, cartilage, and fat. They also function as potent immune regulators and signalling agents that promote tissue repair and reduce inflammation. The MSC is currently the most widely used cell type in regenerative therapy globally due to its safety profile, versatility, and strong clinical evidence base."
              },
              {
                q: "How do I know if I am a suitable candidate for stem cell therapy?",
                a: "Suitability for stem cell therapy depends on your overall health status, the condition being treated, current medications, and the specific protocol under consideration. A comprehensive medical assessment at Nexus Clinic KL evaluates all of these factors. Patients with active infections, certain cancers, or specific immune conditions may not be appropriate candidates at a given point in time. Honest suitability assessment is a non-negotiable part of the consultation process at our clinic. If stem cell therapy is not the right option for your situation, you will be told clearly before any decision is made."
              },
              {
                q: "Does stem cell therapy interact with existing medications or treatments?",
                a: "Some medications, particularly immunosuppressants, anti-inflammatory drugs, and certain biologics, may affect the activity of administered stem cells. Blood thinners may also require management around treatment sessions. During your medical consultation, all current medications and supplements are reviewed. The treatment plan is adjusted accordingly to maximise safety and efficacy. Patients are also advised on any temporary modifications to their medication routine required in the days surrounding treatment."
              },
            ].map((faq, index) => (
              <motion.details
                key={index}
                variants={fadeInUp}
                className="group bg-white rounded-lg"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-georgia text-brown font-medium">
                    {index + 1}) {faq.q}
                  </span>
                  <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-taupe">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-wine relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] opacity-10 mix-blend-overlay" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 relative z-10"
        >
          <motion.div
            variants={scaleIn}
            className="max-w-3xl mx-auto text-center bg-wine backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-georgia text-white mb-6">
              Book a Consultation to Discuss Your Goals | Stem Cell Therapy at Nexus Clinic KL
            </h2>

            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              If you're searching for stem cell therapy in Malaysia or regenerative medicine in Kuala Lumpur, start with a private consult focused on your diagnosis, your risks, and what is realistically achievable.
            </p>

            <div className="space-y-4">
              <p className="text-white font-georgia text-xl">
                Nexus Clinic Kuala Lumpur
              </p>
              <p className="text-white/80">
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>
              <p className="text-white text-lg">
                Phone: 016-7025699 / 03-21635699
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-white text-wine px-8 py-3 rounded-full font-semibold hover:bg-cream transition-all duration-300"
              >
                Book Your Consultation Today
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default StemCellLanding;