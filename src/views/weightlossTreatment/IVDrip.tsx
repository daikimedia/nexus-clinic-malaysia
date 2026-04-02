"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Coffee,
  FileText,
  Info,
  Shield,
  Users,
  AlertTriangle,
  Calendar,
  DollarSign,
  AlertOctagon,
  Droplets,
  Utensils,
  Bed,
  Dumbbell,
  MapPin,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "../../components/FAQ";
import SectionBeforeAfter from "../../components/BeforeAfterCustomize";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const IVDripLanding = ({ locale = fallbackLng }: { locale?: string }) => {
  const { t } = useTranslation(locale, "weightLoss/ivDrip");

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-ivdrip1.webp",
      after: "/images/B&A-w/B&A-ivdrip1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-w/B&A-ivdrip2.webp",
      after: "/images/B&A-w/B&A-ivdrip2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-w/B&A-ivdrip3.webp",
      after: "/images/B&A-w/B&A-ivdrip3.webp",
    },
  ];

  return (
    <div className="bg-light font-inter">
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative min-h-screen bg-linear-to-b from-cream to-light overflow-hidden"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-wine/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 pt-20 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h1 className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight">
                IV Drip Therapies in Malaysia for Weight Loss, Energy, Immunity
                <span className="text-wine block mt-2">(Kuala Lumpur)</span>
              </h1>

              <p className="text-xl md:text-2xl text-taupe leading-relaxed">
                IV drip therapy delivers nutrients directly into the bloodstream
                for faster absorption, higher bioavailability, and more
                noticeable support than standard oral supplements.
              </p>

              <p className="text-lg text-brown/80 leading-relaxed">
                At Nexus Clinic KL, IV drip programmes are designed for weight
                management support, energy restoration, immunity, hydration,
                liver detox, and overall wellness using medical-grade
                formulations under licensed medical supervision.
              </p>

              <p className="text-rose font-semibold text-lg">
                This is personalised intravenous wellness with proper clinical
                assessment, targeted formulations, and structured follow-up.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="bg-glass backdrop-blur-sm p-8 rounded-2xl border border-cream shadow-2xl">
                <h2 className="font-georgia text-2xl text-brown mb-6">
                  IV drip therapy at a glance
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-wine/10 p-3 rounded-full">
                      <Shield className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown">
                        KKM-approved medical-grade solutions
                      </h3>
                      <p className="text-taupe">
                        Administered in a licensed clinical setting
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-wine/10 p-3 rounded-full">
                      <Activity className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown">
                        100% direct bloodstream delivery
                      </h3>
                      <p className="text-taupe">
                        Faster and more efficient than oral supplement
                        absorption
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-wine/10 p-3 rounded-full">
                      <Users className="w-6 h-6 text-wine" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-brown">
                        Goal-based drip selection
                      </h3>
                      <p className="text-taupe">
                        Slimming, energy, immunity, liver detox, hydration, and
                        skin wellness options
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-cream">
                    <p className="text-taupe flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-rose" />
                      Wisma UOA II, Jalan Pinang, Kuala Lumpur
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Intro Expansion Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeInUp}
            className="max-w-5xl mx-auto bg-cream p-8 md:p-10 rounded-2xl shadow-lg"
          >
            <h2 className="font-georgia text-3xl md:text-4xl text-brown mb-6">
              Why IV drip therapy is different from oral supplements
            </h2>
            <div className="space-y-5">
              <p className="text-lg text-taupe leading-relaxed">
                Oral supplements are affected by digestion, stomach acid, food
                intake, gut health, and metabolic losses before nutrients ever
                reach the tissues that need them. IV therapy bypasses these
                limitations entirely by delivering nutrients directly into the
                bloodstream.
              </p>
              <p className="text-lg text-taupe leading-relaxed">
                That is why patients often notice faster support for energy,
                hydration, recovery, and wellness goals with IV drip therapy,
                especially when the formulation is correctly matched to the
                individual clinical goal.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* What is IV Drip Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h2 className="font-georgia text-4xl text-brown">
                What is IV drip therapy, and why does it work so effectively?
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-taupe leading-relaxed">
                  IV drip therapy is the administration of vitamins, minerals,
                  amino acids, antioxidants, and hydration directly into the
                  bloodstream through a small cannula. Because it bypasses the
                  digestive system, it avoids the absorption losses that reduce
                  the effectiveness of tablets, powders, and capsules.
                </p>

                <div className="bg-cream p-6 rounded-xl border-l-4 border-wine">
                  <p className="text-brown font-medium text-lg">
                    In simple terms, IV drip therapy delivers nutrients faster,
                    at higher concentration, and with more predictable results
                    than oral supplements.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-8">
              <img
                src="/images/main/iv-drip.webp"
                alt="IV drip therapy at Nexus Clinic Kuala Lumpur"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />

              <div className="bg-cream p-8 rounded-2xl">
                <h3 className="font-georgia text-2xl text-brown mb-4">
                  What patients usually want from IV drip therapy
                </h3>
                <p className="text-taupe mb-4">
                  Some patients want a slimming drip for metabolic support.
                  Others want faster recovery, stronger immunity, better energy,
                  liver support, hydration, or skin wellness.
                </p>
                <p className="text-taupe mb-4">
                  The key is not choosing a generic drip. The key is matching
                  the formulation to the actual goal.
                </p>
                <p className="text-taupe font-medium">
                  At Nexus Clinic KL, every session starts with a brief
                  assessment so the selected drip fits the patient’s health
                  status and treatment objective.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Bioavailability Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            IV drip vs oral supplements: the real difference
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            Oral vitamin and nutrient absorption varies widely depending on gut
            function, food, dosage, and metabolism. IV therapy bypasses the gut
            and delivers nutrients directly into circulation for full and rapid
            systemic delivery.
          </p>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-brown font-medium text-lg">
              What this can mean in practical terms:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-taupe text-lg">
                <CheckCircle2 className="w-6 h-6 text-wine" />
                Faster energy support
              </li>
              <li className="flex items-center gap-3 text-taupe text-lg">
                <CheckCircle2 className="w-6 h-6 text-wine" />
                Higher effective nutrient delivery
              </li>
              <li className="flex items-center gap-3 text-taupe text-lg">
                <CheckCircle2 className="w-6 h-6 text-wine" />
                Stronger hydration and recovery support
              </li>
              <li className="flex items-center gap-3 text-taupe text-lg">
                <CheckCircle2 className="w-6 h-6 text-wine" />
                More noticeable short-term wellness support
              </li>
            </ul>
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto bg-wine/5 p-8 rounded-2xl"
          >
            <p className="text-rose font-semibold text-xl">
              The main advantage of IV therapy is not trend value. It is
              bioavailability.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Candidate / Goals Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h2 className="font-georgia text-4xl text-brown">
                Who can benefit from IV drip therapy?
              </h2>

              <p className="text-lg text-taupe">
                IV drip therapy can support patients looking for targeted help
                with:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3 bg-cream p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    Weight management and metabolic support
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-cream p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    Energy depletion and fatigue
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-cream p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    Immunity and resilience
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-cream p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-wine shrink-0 mt-1" />
                  <span className="text-brown">
                    Liver detox, hydration, skin wellness, and recovery
                  </span>
                </li>
              </ul>

              <p className="text-taupe">
                The best results come when the formulation is selected according
                to the actual treatment goal rather than using the same drip for
                everyone.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-8">
              <div className="bg-rose/5 p-8 rounded-2xl border border-rose/20">
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <AlertOctagon className="w-6 h-6 text-rose" />
                  Who needs extra caution before starting IV drip therapy
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="font-semibold text-brown mb-3">
                      You should always tell the clinic if you have:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Kidney disease
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Congestive heart failure
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Clotting disorders
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Type 2 diabetes or ongoing medical treatment
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-brown mb-3">
                      Some formulations may need adjustment if you have:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Ongoing fatigue linked to medical illness
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Liver concerns or metabolic disease
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        Blood sugar sensitivity
                      </li>
                      <li className="flex gap-2 text-brown/80">
                        <span className="text-rose font-bold">•</span>
                        A need for a more customised infusion plan
                      </li>
                    </ul>
                  </div>

                  <div className="bg-wine/10 p-4 rounded-lg">
                    <p className="text-brown font-medium">
                      A proper IV drip clinic does not offer one-size-fits-all
                      infusions. It assesses safety, goals, and suitability
                      first.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Slimming Drip Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            Slimming drip for weight loss support: what it is designed to do
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            A slimming drip is designed to support fat metabolism, energy
            production, and metabolic efficiency during active weight
            management. It is not a replacement for diet or medication plans,
            but it can be a useful support layer in a structured programme.
          </p>

          <p className="text-center text-brown font-medium text-lg mb-8">
            The formulation often focuses on:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl shadow-md"
            >
              <Calendar className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                L-Carnitine
              </h3>
              <p className="text-taupe">
                Helps transport fatty acids for cellular energy production
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl shadow-md"
            >
              <Calendar className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                B-Complex
              </h3>
              <p className="text-taupe">
                Supports metabolic pathways and energy conversion
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl shadow-md"
            >
              <Calendar className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                Alpha Lipoic Acid
              </h3>
              <p className="text-taupe">
                Supports insulin sensitivity and oxidative stress control
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl shadow-md"
            >
              <Calendar className="w-8 h-8 text-wine mb-3" />
              <h3 className="font-georgia text-xl text-brown mb-2">
                MIC Compounds
              </h3>
              <p className="text-taupe">
                Methionine, inositol, and choline support liver fat processing
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto bg-wine/5 p-8 rounded-xl"
          >
            <p className="text-brown text-xl">
              The goal of a slimming drip is metabolic support, not false
              promises of instant fat loss.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Programme Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-16">
            What an IV drip session at Nexus Clinic KL can look like
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            Every patient is different, but the process follows a clear medical
            pathway from consultation through aftercare.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                1) Health assessment and drip selection
              </h3>
              <p className="text-taupe">
                The consultation reviews goals, recent health status, vitals,
                and whether the selected drip is appropriate for the session.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                2) Cannula placement and infusion preparation
              </h3>
              <p className="text-taupe mb-4">
                A fine-gauge cannula is inserted into a forearm vein by trained
                medical staff. Most patients find it similar to a routine blood
                draw.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Clinical safety check before infusion begins
                </li>
                <li className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Medical-grade ingredients in the selected formulation
                </li>
                <li className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Comfortable supervised clinical setting
                </li>
                <li className="flex items-center gap-2 text-taupe">
                  <CheckCircle2 className="w-4 h-4 text-wine" />
                  Session duration usually around 30 to 90 minutes depending on
                  drip type
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                3) Relax during the infusion
              </h3>
              <p className="text-taupe">
                Most patients sit comfortably, read, work, or rest while the
                drip runs. Different formulations have different infusion times,
                with some advanced drips taking longer than standard hydration
                or wellness options.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-xl">
              <h3 className="font-georgia text-2xl text-wine mb-4">
                4) Post-session advice and ongoing planning
              </h3>
              <p className="text-taupe">
                After the drip is completed, the team checks that you feel well,
                gives aftercare guidance, and discusses whether weekly,
                fortnightly, monthly, or as-needed sessions make sense for your
                goals.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Side Effects / Safety Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            Safety and suitability: what patients should know
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            IV drip therapy is generally well tolerated in a proper clinical
            setting, but safety depends on correct formulation, clinical review,
            sterile technique, and appropriate patient selection.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="bg-light p-8 rounded-2xl shadow-lg">
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <Info className="w-6 h-6 text-wine" />
                  Common reasons patients choose regular sessions
                </h3>

                <p className="text-taupe mb-4">
                  Patients often use IV drips for energy, hydration, recovery,
                  immunity support, liver support, skin wellness, and metabolic
                  support during active weight management phases.
                </p>
                <p className="text-taupe">
                  Session frequency depends on the goal. Some patients benefit
                  from weekly or fortnightly plans, while others use single or
                  occasional sessions.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-light p-8 rounded-2xl shadow-lg">
                <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-rose" />
                  Why medical supervision still matters
                </h3>

                <p className="text-taupe mb-4">
                  Even wellness-focused IV therapy should be clinically guided,
                  especially for patients with diabetes, kidney disease, heart
                  conditions, clotting risk, or ongoing medical treatment.
                </p>
                <p className="font-semibold text-wine">
                  A safe drip is not just about the ingredients. It is also
                  about the right patient, the right formulation, and the right
                  supervision.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 max-w-4xl mx-auto bg-rose/5 p-8 rounded-2xl border border-rose/20"
          >
            <h3 className="font-georgia text-2xl text-brown mb-6">
              Important note for diabetic patients
            </h3>

            <p className="text-taupe mb-4">
              IV drip therapy can still be suitable for patients with type 2
              diabetes, but the drip formulation should be selected carefully to
              support glucose stability rather than disrupt it.
            </p>

            <p className="text-taupe mb-4">
              This is why the clinic should always be informed about diabetes,
              medications, and current metabolic concerns before the session.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Cost Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            IV drip pricing in Kuala Lumpur, Malaysia
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-8">
            Pricing depends on the selected formulation, ingredient complexity,
            session duration, and whether the drip is part of a broader weight
            management or wellness plan.
          </p>

          <p className="text-center text-brown font-medium mb-8">
            Typical pricing factors include:
          </p>

          <div className="max-w-3xl mx-auto bg-cream p-8 rounded-2xl mb-8">
            <ul className="space-y-4">
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                Type of drip formulation selected
              </li>
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                Session length and ingredient intensity
              </li>
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                Whether the drip is slimming, energy, immunity, detox, NAD+, or
                custom
              </li>
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                Whether mobile IV service or in-clinic treatment is used
              </li>
              <li className="flex gap-3 text-taupe">
                <DollarSign className="w-5 h-5 text-wine shrink-0" />
                Whether it is a single session or part of a structured plan
              </li>
            </ul>
          </div>

          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto bg-wine/5 p-8 rounded-2xl"
          >
            <p className="text-brown text-lg font-medium mb-2">
              Indicative pricing from the source content:
            </p>
            <p className="text-taupe">
              Slimming drip RM 380 to RM 650, energy booster RM 350 to RM 550,
              immunity booster RM 300 to RM 500, liver detox RM 400 to RM 700,
              skin glow / glutathione drip RM 350 to RM 600, and NAD+ advanced
              therapy RM 800 to RM 1,500.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-16">
            Different IV drip formulations for different goals
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Slimming drip
              </h3>
              <p className="text-taupe">
                Designed to support fat metabolism, energy production, and
                metabolic efficiency during active weight management.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-georgia text-2xl text-brown mb-4">
                Energy booster, immunity, detox, hydration, and NAD+
              </h3>
              <ul className="space-y-3 text-taupe">
                <li>• Energy drips focus on fatigue, NAD+, magnesium, and B-complex support.</li>
                <li>• Immunity drips focus on vitamin C, zinc, selenium, and glutathione.</li>
                <li>• Liver detox drips focus on glutathione, NAD, and metabolic support.</li>
                <li>• Hydration drips focus on fluids, electrolytes, and recovery support.</li>
              </ul>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-taupe max-w-3xl mx-auto mt-8"
          >
            The best drip is not the most expensive one. It is the one that
            matches the treatment goal properly.
          </motion.p>
        </div>
      </motion.section>

      {/* Clarification Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-16 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-cream p-8 rounded-2xl">
            <h3 className="font-georgia text-2xl text-brown mb-4">
              Can IV drip therapy replace a diet or medication programme?
            </h3>
            <p className="text-taupe mb-4">
              No. IV drip therapy can support energy, hydration, metabolic
              function, nutrient delivery, and recovery, but it does not replace
              calorie control, structured lifestyle change, or prescription
              weight loss treatments when those are medically indicated.
            </p>
            <p className="text-taupe mb-4">
              It works best as part of a broader doctor-monitored plan rather
              than as a standalone solution for major weight loss.
            </p>
            <p className="text-taupe mb-4">
              For patients who need stronger weight reduction support, IV drip
              therapy may be used alongside more comprehensive medical weight
              management strategies.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Better Results Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            How to get better results from IV drip therapy
          </h2>

          <p className="text-center text-taupe max-w-2xl mx-auto mb-12">
            IV therapy works best when it is part of a realistic plan that
            supports hydration, recovery, nutrition, metabolic function, and
            long-term consistency.
          </p>

          <p className="text-brown font-medium text-lg mb-6">
            Practical habits that still matter:
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Utensils className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Balanced meals even when using wellness support
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Droplets className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Good hydration before and after sessions
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Coffee className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Recovery support during stress and fatigue phases
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Dumbbell className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Regular movement to support metabolic health
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-light p-6 rounded-xl text-center shadow-md"
            >
              <Bed className="w-8 h-8 text-wine mx-auto mb-3" />
              <p className="text-brown text-sm">
                Better sleep for better energy and recovery
              </p>
            </motion.div>
          </div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-rose font-semibold text-xl mt-8"
          >
            The best IV drip plan supports your body. It does not replace the
            basics.
          </motion.p>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-light"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-4">
            Frequently asked questions
          </h2>
          <p className="text-center text-taupe mb-12">
            Common questions patients ask before booking IV drip therapy.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                Is IV drip therapy safe in a medical clinic?
              </h3>
              <p className="text-taupe text-sm">
                Yes, when it is administered by trained medical professionals in
                a licensed setting using approved medical-grade solutions and
                proper clinical screening.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                How often should I get a slimming drip?
              </h3>
              <p className="text-taupe text-sm">
                Weekly sessions are often used during the active phase of weight
                management, with frequency reduced later depending on response
                and treatment goals.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                Can IV drip therapy replace diet or medication?
              </h3>
              <p className="text-taupe text-sm">
                No. It supports metabolic function, nutrient delivery, and
                wellness, but it does not replace structured lifestyle change or
                prescription treatment when clinically indicated.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                How soon will I feel the effects of an IV drip?
              </h3>
              <p className="text-taupe text-sm">
                Many patients report energy or hydration improvement within one
                to two hours or by the following day, depending on the drip type
                and the reason for treatment.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                What is the difference between a slimming drip and a regular
                vitamin drip?
              </h3>
              <p className="text-taupe text-sm">
                A slimming drip is built around ingredients targeted for fat
                metabolism and energy efficiency, while a general vitamin drip
                focuses more broadly on replenishment and wellness support.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                Are the IV drip ingredients KKM approved?
              </h3>
              <p className="text-taupe text-sm">
                At Nexus Clinic KL, the source content states that formulations
                are prepared from KKM-approved, pharmaceutical-grade
                constituents under medical supervision.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                Can I have IV drip therapy if I have type 2 diabetes?
              </h3>
              <p className="text-taupe text-sm">
                Yes, with proper assessment. The formulation should be chosen
                carefully to support metabolic goals while maintaining blood
                sugar stability.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                Is mobile IV drip available?
              </h3>
              <p className="text-taupe text-sm">
                The source content notes that mobile IV service may be available
                for selected patients in KL and Selangor, subject to enquiry and
                scheduling.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                Can IV drip help with fatigue or illness recovery?
              </h3>
              <p className="text-taupe text-sm">
                Yes, this is one of the most common reasons patients seek IV
                therapy, especially for hydration, vitamin support, and faster
                recovery during depleted periods.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-cream p-6 rounded-xl">
              <h3 className="font-georgia text-lg text-brown mb-3">
                How does glutathione IV drip support liver health and skin?
              </h3>
              <p className="text-taupe text-sm">
                Glutathione supports antioxidant defence, liver detox pathways,
                and skin-related wellness goals when delivered intravenously in
                a suitable clinical programme.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Differentiation Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-cream"
      >
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-georgia text-4xl text-brown text-center mb-8">
            Why a clinically guided IV drip page converts better
          </h2>

          <p className="text-center text-taupe max-w-3xl mx-auto mb-12">
            The strongest IV drip page is not just about vitamins. It is about
            clinical clarity, goal-based formulation, and trust.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              className="bg-light p-6 rounded-xl flex items-start gap-3"
            >
              <Shield className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Safety-first clinical screening before treatment
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-6 rounded-xl flex items-start gap-3"
            >
              <Activity className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Proper explanation of bioavailability and nutrient delivery
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-6 rounded-xl flex items-start gap-3"
            >
              <FileText className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Clear goal-based formulation selection
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-6 rounded-xl flex items-start gap-3"
            >
              <Users className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Real clinical support instead of generic beauty-bar messaging
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-light p-6 rounded-xl flex items-start gap-3 md:col-span-2 max-w-2xl mx-auto"
            >
              <Calendar className="w-6 h-6 text-wine shrink-0 mt-1" />
              <span className="text-brown">
                Transparent pricing, session expectations, and treatment
                frequency guidance
              </span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-wine"
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2
            variants={fadeInUp}
            className="font-georgia text-4xl text-light mb-8"
          >
            Ready to book your IV drip consultation at Nexus Clinic KL?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-cream text-xl max-w-3xl mx-auto mb-12"
          >
            Start with a complimentary consultation and get clear guidance on
            the right drip formulation, session plan, expected benefits, and the
            most suitable clinical pathway for your goals.
          </motion.p>

          <motion.button
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-light text-wine px-12 py-4 rounded-full font-semibold text-lg hover:bg-cream transition-colors shadow-xl"
          >
            Book Free Consultation
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default IVDripLanding;