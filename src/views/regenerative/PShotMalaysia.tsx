"use client";
import { motion } from "framer-motion";
import {
  Droplet,
  HeartPulse,
  Shield,
  Clock,
  Zap,
  AlertCircle,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Users,
  Award,
  FileText,
  Star,
  Sparkles,
  Syringe,
  Microscope,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "@/src/components/FAQ";

const PShotLanding = () => {
  const faqs = [
    {
      q: "What is a P-Shot?",
      a: "A P-Shot (Priapus Shot) is an injection of platelet-rich plasma (PRP) made from your own blood and injected into the penis.",
    },
    {
      q: "Does the P-Shot actually work for ED?",
      a: "Evidence is mixed. Some reviews and meta-analyses show improvement, but there are also placebo-controlled studies showing no significant difference, and major urology guidance describes PRP as experimental.",
    },
    {
      q: "Is the P-Shot FDA approved?",
      a: "Cleveland Clinic describes it as experimental and notes limited evidence for common claims.",
    },
    {
      q: "Is P-Shot painful?",
      a: "Most providers use numbing cream or local anesthetic. You may still feel pressure or mild discomfort.",
    },
    {
      q: "How long does the P-Shot last?",
      a: "There is no fixed duration for everyone. Studies commonly measure outcomes over 1–6 months, and response varies by person and ED cause.",
    },
    {
      q: "How many sessions do I need?",
      a: "Protocols vary. Some clinics suggest one session, others recommend a series. Research highlights inconsistent protocols as a major limitation.",
    },
    {
      q: "Can the P-Shot increase penis size?",
      a: "Claims about size increase are not supported by strong scientific evidence, according to Cleveland Clinic.",
    },
    {
      q: "Can P-Shot help Peyronie's disease?",
      a: "Some clinics market it for Peyronie's disease, but high-quality evidence is limited. Nexus Clinic mentions Peyronie's as a possible use case with variable results.",
    },
    {
      q: "What are the side effects?",
      a: "Most commonly: mild swelling, bruising, and tenderness. Studies often report mild, transient side effects, but follow-up and protocols vary.",
    },
    {
      q: "How much does P-Shot cost in Malaysia?",
      a: "Many clinics list around RM 2,000 per session, but market ranges can be wider depending on provider and inclusions.",
    },
    {
      q: "Is P-Shot better than Viagra or Cialis?",
      a: "They do different jobs. Tablets improve blood flow short-term. P-Shot aims at tissue support over time. A doctor can help you choose based on your ED cause and health profile.",
    },
    {
      q: "Do I need a check-up before doing P-Shot?",
      a: "Yes. ED can be linked to cardiovascular risk and other health issues, so medical screening is important before choosing any ED treatment path.",
    },
  ];

  return (
    <main className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-cream via-light to-white py-20 px-4">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1200/800')] opacity-5 mix-blend-overlay"></div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full">
                <HeartPulse className="w-5 h-5 text-wine" />
                <span className="text-sm font-inter text-brown">
                  Priapus Shot PRP Therapy
                </span>
              </div>
              <h2 className="font-georgia text-5xl lg:text-6xl text-brown leading-tight">
                A stronger erection starts with better blood flow,
                <span className="text-wine italic"> not more pressure.</span>
              </h2>
              <p className="text-lg text-taupe font-inter max-w-lg">
                If erections feel weaker, don't last, or confidence is dropping,
                you're not alone. The P-Shot is a PRP based option some men in
                Kuala Lumpur choose when they want a natural approach and a
                discreet clinic experience.
              </p>

              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-taupe/20 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-wine shrink-0 mt-1" />
                  <p className="text-brown font-inter">
                    LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                    Kuala Lumpur
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-wine" />
                  <p className="text-brown font-inter">
                    016-7025699 / 03-21635699
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-taupe">
                  <Shield className="w-4 h-4" />
                  <span>
                    Doctor-led evaluation first (because ED can be linked to
                    circulation and heart risk factors)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-taupe">
                  <AlertCircle className="w-4 h-4" />
                  <span>
                    Clear expectations: Nexus Clinic notes results can vary and
                    are not guaranteed
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-wine/20 to-rose/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-taupe/20">
                <img
                  src="/images/regenerative/embryonic.webp"
                  alt="Medical consultation at Nexus Clinic"
                  className="rounded-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-wine text-white px-6 py-3 rounded-full shadow-lg">
                  <p className="font-inter font-semibold">RM 2,000</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What is the P-Shot Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-cream rounded-full"></div>
              <img
                src="/images/regenerative/embryonic.webp"
                alt="P-Shot procedure explanation"
                className="rounded-2xl shadow-xl relative z-10 border-4 border-white"
              />
              <div className="absolute -bottom-4 -right-4 bg-rose text-white px-4 py-2 rounded-lg">
                <p className="text-sm">
                  Platelet-Rich Plasma (PRP) from your own blood
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                What Is the P-Shot?
              </h2>
              <p className="text-lg text-taupe font-inter leading-relaxed">
                The P-Shot (Priapus Shot) is an injection of platelet-rich
                plasma (PRP) taken from your own blood and injected into the
                penis. The idea is to deliver growth factors that may support
                tissue repair and blood flow.
              </p>
              <p className="text-brown font-inter bg-cream p-6 rounded-xl italic">
                Clinics typically describe it as a non-surgical outpatient
                procedure. Nexus Clinic KL explains the P-Shot as PRP derived
                from your own blood, injected into the penis to potentially
                stimulate blood flow and improve sensitivity, with results
                varying by person.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Evidence Section */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-wine/10 px-4 py-2 rounded-full mb-4">
              <FileText className="w-5 h-5 text-wine" />
              <span className="text-sm font-inter text-brown">
                Evidence-Based Review
              </span>
            </div>
            <h2 className="font-georgia text-4xl text-brown mb-4">
              A Very Important Note About Evidence
            </h2>
            <p className="text-taupe font-inter text-lg">Honest, Not Hype</p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-taupe/20"
          >
            <p className="text-brown font-inter mb-6">
              You will see big promises online. Some are marketing. Some are
              early research.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-light rounded-xl">
                <Award className="w-6 h-6 text-wine shrink-0" />
                <p className="text-brown font-inter">
                  Cleveland Clinic describes the P-Shot as experimental and
                  states evidence is limited, including no strong proof for
                  certain common claims like size increase.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-light rounded-xl">
                <Microscope className="w-6 h-6 text-wine shrink-0" />
                <p className="text-brown font-inter">
                  A 2024 systematic review in andrology found small to moderate
                  benefits but highlighted limitations: small sample sizes,
                  mixed PRP protocols, short follow-up. EAU/AUA guidance treats
                  PRP as experimental for ED and Peyronie's disease.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-light rounded-xl">
                <TrendingUp className="w-6 h-6 text-wine shrink-0" />
                <p className="text-brown font-inter">
                  A large 2024 meta-analysis (PLOS ONE) reported PRP "appears
                  effective," but stressed need for higher-quality trials and
                  longer follow-up. A 2024 randomized placebo-controlled study
                  found no significant difference versus placebo at 1, 3, and 6
                  months.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-light rounded-xl">
                <Users className="w-6 h-6 text-wine shrink-0" />
                <p className="text-brown font-inter">
                  The Sexual Medicine Society of North America (SMSNA) explains
                  the P-Shot is being tested as an experimental therapy for ED.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-wine/10 rounded-2xl border-l-4 border-wine">
              <p className="text-brown font-semibold font-inter">
                So what should your website say? P-Shot may help some men, but
                results vary and it is not a guaranteed "cure." That is the
                safest and most truthful positioning.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Who Is It For Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                Who Is the P-Shot For?
              </h2>
              <p className="text-taupe font-inter">
                At Nexus Clinic Kuala Lumpur, P-Shot is commonly discussed for
                men who:
              </p>

              <div className="space-y-4">
                {[
                  "Have mild to moderate erectile dysfunction",
                  "Want to improve erection quality and sensitivity",
                  "Prefer a 'natural' approach using their own PRP",
                  "Want a non-surgical option with minimal downtime (as commonly marketed by clinics)",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-wine shrink-0" />
                    <p className="text-brown font-inter">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-brown font-inter bg-cream p-4 rounded-xl">
                Nexus Clinic also mentions the P-Shot may be considered for
                Peyronie's disease (penile curvature due to scar tissue), while
                noting outcomes vary.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="bg-cream p-8 rounded-3xl"
            >
              <h3 className="font-georgia text-2xl text-brown mb-6 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-wine" />
                Who Should Not Do a P-Shot
              </h3>
              <p className="text-taupe font-inter mb-4">
                A good clinic will screen you first.
              </p>
              <p className="text-brown font-inter mb-6">
                You may not be a good candidate if you have:
              </p>

              <ul className="space-y-3">
                {[
                  "An active infection in the genital area",
                  "Bleeding disorders or you are on certain blood thinners (risk of bruising or bleeding)",
                  "Severe uncontrolled diabetes or vascular disease (you may need a broader ED plan)",
                  "Unrealistic expectations like 'guaranteed size increase'",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-brown font-inter"
                  >
                    <span className="text-wine font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-taupe font-inter italic">
                Also, if your main issue is sudden ED or you have chest pain
                risk factors, you should be medically checked. ED can be a
                marker of cardiovascular disease risk.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Realistic Goals Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-georgia text-4xl text-brown mb-4">
              What the P-Shot Can Help With
            </h2>
            <p className="text-taupe font-inter text-lg">Realistic Goals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap />, text: "Better firmness" },
              {
                icon: <TrendingUp />,
                text: "Better consistency (less 'hit or miss')",
              },
              { icon: <Sparkles />, text: "Better sensitivity" },
              { icon: <HeartPulse />, text: "Better confidence in intimacy" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="bg-white p-6 rounded-2xl shadow-lg border border-taupe/20 text-center group hover:bg-wine hover:text-white transition-all duration-300"
              >
                <div className="text-wine mb-4 flex justify-center group-hover:text-white">
                  {item.icon}
                </div>
                <p className="text-brown font-inter font-medium group-hover:text-white">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 text-center text-brown font-inter bg-white p-4 rounded-xl max-w-2xl mx-auto"
          >
            Nexus Clinic lists potential benefits like enhanced sensitivity,
            improved erectile function, enhanced blood flow, and improved sexual
            experience, while also noting results vary.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-wine/5 p-8 rounded-3xl border border-wine/20"
          >
            <h3 className="font-georgia text-2xl text-brown mb-6 text-center">
              What the P-Shot Probably Cannot Promise
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <p className="text-brown font-inter font-semibold mb-2">
                  "It increases penis size"
                </p>
                <p className="text-taupe text-sm">
                  Cleveland Clinic states this claim is not supported by
                  scientific evidence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <p className="text-brown font-inter font-semibold mb-2">
                  "It cures ED for everyone"
                </p>
                <p className="text-taupe text-sm">
                  Not true. Evidence is mixed and professional societies
                  describe PRP in sexual medicine as experimental.
                </p>
              </div>
            </div>
            <p className="text-center text-brown font-inter mt-6 font-medium">
              So the best promise is this: We assess your ED type, improve the
              factors we can, and choose the safest treatment path.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-georgia text-4xl text-brown mb-4">
              How the P-Shot Works
            </h2>
            <p className="text-taupe font-inter">In Easy Words</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.div variants={fadeInLeft} className="space-y-4">
              <p className="text-brown font-inter text-lg">
                Your blood contains platelets. Platelets release growth factors
                involved in healing. PRP is created by drawing blood and
                spinning it to concentrate platelets.
              </p>
              <p className="text-brown font-inter">The theory is:</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-wine" />
                  <span className="text-brown">
                    growth factors may support tissue repair
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-wine" />
                  <span className="text-brown">
                    blood flow may improve over time
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-wine" />
                  <span className="text-brown">
                    sensitivity may improve in some men
                  </span>
                </li>
              </ul>
              <p className="text-taupe italic">
                Again, this is the theory and early evidence, not a guarantee.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="bg-linear-to-br from-wine to-rose p-1 rounded-3xl">
                <div className="bg-white p-6 rounded-3xl">
                  <img
                    src="/images/regenerative/embryonic.webp"
                    alt="PRP process illustration"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="bg-cream p-8 rounded-3xl">
            <h3 className="font-georgia text-2xl text-brown mb-6">
              What to Expect at Nexus Clinic Kuala Lumpur
            </h3>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl text-center">
                <div className="w-10 h-10 bg-wine rounded-full text-white flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <h4 className="font-inter font-semibold text-brown mb-2">
                  Private consultation and screening
                </h4>
                <p className="text-sm text-taupe">
                  Nexus Clinic notes you'll be evaluated to see if you are a
                  candidate, and may do a blood test (including testosterone
                  checks in some cases).
                </p>
                <span className="mt-8 text-xs text-brown bg-wine/10 inline-block px-4 py-1 rounded-full">
                  This is important because ED can be linked to: blood flow
                  issues hormones stress medications diabetes and cholesterol
                </span>
              </div>
              <div className="bg-white p-4 rounded-xl text-center">
                <div className="w-10 h-10 bg-wine rounded-full text-white flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <h4 className="font-inter font-semibold text-brown mb-2">
                  Blood draw and PRP preparation
                </h4>
                <p className="text-sm text-taupe">
                  Blood is drawn from your arm and processed in a centrifuge to
                  isolate PRP.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl text-center">
                <div className="w-10 h-10 bg-wine rounded-full text-white flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <h4 className="font-inter font-semibold text-brown mb-2">
                  Numbing and injection
                </h4>
                <p className="text-sm text-taupe">
                  Many providers use numbing cream or local anesthetic to reduce
                  discomfort.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl text-center">
                <div className="w-10 h-10 bg-wine rounded-full text-white flex items-center justify-center mx-auto mb-3 font-bold">
                  4
                </div>
                <h4 className="font-inter font-semibold text-brown mb-2">
                  Short observation and you go home
                </h4>
                <p className="text-sm text-taupe">
                  It is usually an outpatient visit. Nexus Clinic describes it
                  as non-surgical.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-xl">
              <p className="text-brown text-sm">
                <span className="font-semibold">ED can be linked to:</span>{" "}
                blood flow issues, hormones, stress, medications, diabetes and
                cholesterol
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Downtime and Aftercare */}
      <section className="py-20 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                Downtime and Aftercare
              </h2>
              <p className="text-taupe font-inter">
                Most clinics market P-Shot as low downtime. Nexus Clinic's page
                says there is no downtime and normal activities can be resumed,
                with possible minor bruising or swelling.
              </p>

              <div className="bg-white p-6 rounded-2xl">
                <p className="text-brown font-inter font-semibold mb-3">
                  A practical, safe approach is:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-wine shrink-0" />
                    <span className="text-brown">
                      Take it easy for the rest of the day
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-wine shrink-0" />
                    <span className="text-brown">
                      Avoid intense exercise for a short period if you bruise
                      easily
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-wine shrink-0" />
                    <span className="text-brown">
                      Contact the clinic if you get severe pain, fever, or
                      unusual swelling
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <div className="bg-white p-6 rounded-2xl">
                <h3 className="font-georgia text-2xl text-brown mb-3">
                  When Will You See Results?
                </h3>
                <p className="text-brown">
                  This varies. Some men report changes within weeks, others need
                  longer, and some do not notice meaningful improvement. The
                  research timeline varies too, with studies measuring outcomes
                  at 1-6 months.
                </p>
                <div className="mt-4 p-4 bg-cream rounded-xl">
                  <p className="text-brown italic">
                    Because results vary, a responsible clinic will set
                    expectations like:
                  </p>
                  <p className="text-brown mt-2">
                    "We assess progress after a few weeks." "If you see no
                    change, we adjust the plan."
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl">
                <h3 className="font-georgia text-2xl text-brown mb-3">
                  How Many Sessions Do You Need?
                </h3>
                <p className="text-brown">
                  There is no universal protocol. Clinics often market 1 session
                  or a short series, but studies vary widely, and that variation
                  is a major issue in the research literature.
                </p>
                <p className="text-taupe mt-2">
                  Nexus Clinic's page describes scheduling an initial consult
                  and then the injection appointment if you're eligible.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="max-w-7xl mx-auto"
        >
          <h2 className="font-georgia text-4xl text-brown text-center mb-12">
            P-Shot vs Other ED Treatments in Malaysia
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <h3 className="font-inter font-bold text-wine mb-3">
                vs ED tablets
              </h3>
              <p className="text-brown text-sm">
                Tablets improve blood flow temporarily. P-Shot aims at
                regenerative support over time. Many men use tablets as
                first-line care, then explore other options.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <h3 className="font-inter font-bold text-wine mb-3">
                vs Shockwave Therapy
              </h3>
              <p className="text-brown text-sm">
                Shockwave is a popular non-invasive ED option in KL. Some
                clinics combine PRP and shockwave. Evidence quality varies.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <h3 className="font-inter font-bold text-wine mb-3">
                vs Penile injections
              </h3>
              <p className="text-brown text-sm">
                Medication injections (like alprostadil) can work very reliably
                for some men, but are a different category than PRP.
              </p>
            </motion.div>

            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-2xl">
              <h3 className="font-inter font-bold text-wine mb-3">
                vs "stem cells" or exosomes
              </h3>
              <p className="text-brown text-sm">
                Often marketed. Professional bodies warn many regenerative
                products are unapproved or experimental in this area.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Side Effects and Cost */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                Side Effects and Risks
              </h2>
              <p className="text-taupe">
                Most clinics describe mild and temporary effects, but it's still
                a needle procedure.
              </p>

              <div className="bg-white p-6 rounded-2xl">
                <p className="font-inter font-semibold text-brown mb-3">
                  Common short-term effects:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-brown">
                    <span className="w-1.5 h-1.5 bg-wine rounded-full"></span>
                    Mild swelling
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <span className="w-1.5 h-1.5 bg-wine rounded-full"></span>
                    Bruising
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <span className="w-1.5 h-1.5 bg-wine rounded-full"></span>
                    Tenderness
                  </li>
                  <li className="flex items-center gap-2 text-brown">
                    <span className="w-1.5 h-1.5 bg-wine rounded-full"></span>
                    Temporary discomfort
                  </li>
                </ul>
              </div>

              <p className="text-sm text-taupe">
                Cleveland Clinic notes the risks are generally low but also
                stresses limited evidence and high cost. The 2024 systematic
                review reported mostly mild and transient side effects in
                studies and no major adverse events reported.
              </p>
            </motion.div>

            <motion.div variants={fadeInRight} className="space-y-6">
              <h2 className="font-georgia text-4xl text-brown">
                P-Shot Cost in Malaysia
              </h2>
              <p className="text-taupe">
                Prices vary by clinic, protocol, and what's included.
              </p>

              <div className="bg-white p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-brown font-inter">Nexus Clinic</span>
                  <span className="text-wine font-bold">RM 2,000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span className="text-brown font-inter">
                    Premier Clinic (P-Shot & O-Shot)
                  </span>
                  <span className="text-wine font-bold">RM 2,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brown font-inter">
                    Malaysia pricing overview
                  </span>
                  <span className="text-wine font-bold">
                    RM 1,500 - RM 6,000
                  </span>
                </div>
              </div>

              <p className="text-sm text-taupe">
                Best practice: ask if the quote includes consultation, numbing,
                follow-up, and any optional add-ons.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Competitor Snapshot */}
      <section className="py-20 px-4 bg-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="max-w-7xl mx-auto"
        >
          <h2 className="font-georgia text-4xl text-brown text-center mb-4">
            Quick Competitor Snapshot
          </h2>
          <p className="text-taupe text-center mb-12">
            What Top Clinics in KL Are Doing
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div variants={scaleIn} className="bg-cream p-4 rounded-xl">
              <p className="font-inter font-bold text-wine">Alpha Clinic</p>
              <p className="text-sm text-brown">
                Markets "longer, stronger erections" and claims many clients
                improve after 1 session.
              </p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-cream p-4 rounded-xl">
              <p className="font-inter font-bold text-wine">
                HE Medical Clinic
              </p>
              <p className="text-sm text-brown">
                Markets P-Shots as improving blood flow and erection strength
                with a "revolutionised" approach.
              </p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-cream p-4 rounded-xl">
              <p className="font-inter font-bold text-wine">PULSE Clinic</p>
              <p className="text-sm text-brown">
                Lists ED services and references P-Shot as a treatment option
                within its men’s health offerings.
              </p>
            </motion.div>
            <motion.div variants={scaleIn} className="bg-cream p-4 rounded-xl">
              <p className="font-inter font-bold text-wine">Premier Clinic</p>
              <p className="text-sm text-brown">
                Positions P-Shot and O-Shot together with clear price point.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-wine/5 p-8 rounded-3xl"
          >
            <h3 className="font-georgia text-2xl text-brown mb-4">
              How Nexus Clinic KL can stand out
            </h3>
            <p className="text-brown mb-4">
              Nexus already has a strong positioning advantage if you lean into
              these points:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                <span>
                  Clear explanation that PRP is from your own blood and results
                  vary
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                <span>
                  A safety-first consult (and hormone screening when relevant)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                <span>
                  A structured ED plan that considers lifestyle, circulation,
                  hormones, and stress, not only one procedure
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQ data={faqs} />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-wine to-rose">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="font-georgia text-4xl mb-6">Ready to Start?</h2>
          <p className="text-xl mb-8 font-inter opacity-90">
            If you're searching for P-Shot in Malaysia or P-Shot in Kuala
            Lumpur, start with a private consult and a clear plan. Not
            guesswork.
          </p>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl inline-block">
            <p className="font-georgia text-2xl mb-4">
              Nexus Clinic Kuala Lumpur
            </p>
            <p className="font-inter mb-2">
              LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala
              Lumpur
            </p>
            <p className="font-inter text-2xl font-bold">
              016-7025699 / 03-21635699
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default PShotLanding;
