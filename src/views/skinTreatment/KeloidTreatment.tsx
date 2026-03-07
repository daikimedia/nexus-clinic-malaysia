"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Award,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Scissors,
  Droplets,
  Sparkles,
  Thermometer,
  Heart,
  Activity,
  Eye,
  Sun,
} from "lucide-react";
import FAQ from "../../components/FAQ";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";

export default function KeloidLandingPage() {
     const faqs =[
              { q: "Can keloids go away naturally?", a: "They can sometimes soften, but Mayo Clinic notes keloids can last for years and can recur." },
              { q: "What is the best treatment for keloid scars?", a: "There is no single best option. AAD notes combination treatment often works best, commonly using injections, silicone, cryotherapy, and sometimes surgery with aftercare." },
              { q: "Do keloid injections work?", a: "Steroid injections are widely used and can reduce thickness and symptoms, but response varies and repeat sessions are usually needed." },
              { q: "How many steroid injections do I need for a keloid?", a: "Mayo Clinic notes you may need monthly injections for up to six months to see flattening." },
              { q: "Do keloid injections hurt?", a: "They can sting or feel tight pressure, especially in sensitive areas, but the session is quick." },
              { q: "Can laser remove keloids permanently?", a: "Laser can help with redness and texture, but keloids can recur. Lasers are often used as part of a combination plan." },
              { q: "Is cryotherapy safe for dark skin in Malaysia?", a: "It can work, but hypopigmentation is a known risk, and studies note this can be persistent in darker Fitzpatrick skin types." },
              { q: "What are the side effects of steroid injections for keloids?", a: "Possible side effects include skin thinning (atrophy), colour changes, and visible small vessels in the area." },
              { q: "Do keloids come back after surgery?", a: "They can. Keloids have high recurrence risk, which is why surgery is usually combined with other therapies and strict aftercare." },
              { q: "Are keloids dangerous or cancerous?", a: "Mayo Clinic states keloids are not cancerous." },
              { q: "What is the fastest way to flatten a keloid?", a: "Steroid injections are commonly used early to flatten and reduce symptoms, sometimes paired with cryotherapy to improve results." },
              { q: "Can keloids form after ear piercing?", a: "Yes. Ear lobes are a common keloid site, and treatment often includes injections every 4 to 6 weeks and sometimes pressure earrings." },
              { q: "Is silicone gel really effective for keloids?", a: "AAD notes silicone gel sheets may help flatten keloids and can also be used to prevent keloid formation after injury." }
            ]
    const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-keloid-treatment1.webp",
      after: "/images/B&A-skin/B&A-keloid-treatment1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-keloid-treatment2.webp",
      after: "/images/B&A-skin/B&A-keloid-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-keloid-treatment3.webp",
      after: "/images/B&A-skin/B&A-keloid-treatment3.webp",
    },
  ];
  return (
    <main className="min-h-screen bg-cream font-['Inter'] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-wine/10 via-transparent to-rose/10" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 md:px-6 relative z-10"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-medium">
                Nexus Clinic Kuala Lumpur
              </span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-brown mb-6 font-['Georgia'] leading-tight"
            >
              That raised, itchy scar is not 
              <span className="text-wine block">"just a scar."</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-xl text-taupe mb-8 max-w-2xl"
            >
              It might be a keloid, and it can be treated.
            </motion.p>
            
            <motion.p 
              variants={fadeInUp}
              className="text-sm text-brown/80 mb-12 max-w-2xl"
            >
              Keloids can grow beyond the original wound, feel tight or painful, and keep coming back if treated the wrong way. At Nexus Clinic Kuala Lumpur, we focus on the safest plan for your skin type, your scar location, and your goals.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-wine text-white rounded-full hover:bg-rose transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
                Start Your Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-wine text-wine rounded-full hover:bg-wine/10 transition-all duration-300">
                View Treatment Options
              </button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-cream to-transparent" />
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 md:px-6"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={scaleIn} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-8 h-8 text-wine mb-4" />
              <h3 className="text-lg font-bold text-brown mb-2">Central KL Location</h3>
              <p className="text-taupe text-sm">LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur. Easy access for your convenience.</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-8 h-8 text-wine mb-4" />
              <h3 className="text-lg font-bold text-brown mb-2">Private Consults</h3>
              <p className="text-taupe text-sm">Step-by-step scar plans designed for you, not a one-size-fits-all menu approach.</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Activity className="w-8 h-8 text-wine mb-4" />
              <h3 className="text-lg font-bold text-brown mb-2">Combination Treatments</h3>
              <p className="text-taupe text-sm">Layered approaches because keloids often respond best to multiple methods.</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <AlertCircle className="w-8 h-8 text-wine mb-4" />
              <h3 className="text-lg font-bold text-brown mb-2">Clear Expectations</h3>
              <p className="text-taupe text-sm">Honest discussion about recurrence, since keloids can last for years.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Is a Keloid Section with Image */}
      <section className="py-20 bg-cream">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 md:px-6"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-bold text-brown mb-6 font-['Georgia']">What Is a Keloid?</h2>
              <p className="text-lg text-brown/80 mb-6">
                A keloid is a raised scar that grows beyond the edges of the original wound. It can appear months, or even years, after skin injury. It can look shiny, feel firm or rubbery, and may itch or hurt.
              </p>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-wine mb-4">Keloid vs Hypertrophic Scar</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose/20 flex items-center justify-center mt-1">
                      <div className="w-3 h-3 rounded-full bg-rose" />
                    </div>
                    <div>
                      <p className="font-bold text-brown">Hypertrophic scar:</p>
                      <p className="text-taupe">Raised but stays within the original wound border and may improve over time.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-wine/20 flex items-center justify-center mt-1">
                      <div className="w-3 h-3 rounded-full bg-wine" />
                    </div>
                    <div>
                      <p className="font-bold text-brown">Keloid:</p>
                      <p className="text-taupe">Spreads outside the wound border and tends to persist or keep growing.</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-taupe">Also, keloids are not cancerous.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/skin/keloid-treatment.webp" 
                  alt="Keloid scar illustration showing raised scar tissue"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 via-transparent to-transparent" />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-rose/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-wine/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Do Keloids Happen */}
      <section className="py-20 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 md:px-6"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-brown mb-6 font-['Georgia'] text-center">
            Why Do Keloids Happen?
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-brown/80 text-center max-w-2xl mx-auto mb-12">
            Keloids happen when your body produces too much collagen during healing. Some people's skin is simply more prone to this over-repair response.
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Acne scars",
              "Cuts and burns",
              "Surgery scars (C-section, appendix, etc.)",
              "Piercings (especially ear keloids)",
              "Vaccination scars",
              "BCG scar thickening"
            ].map((trigger, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="p-4 bg-cream rounded-xl flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-wine" />
                <span className="text-brown">{trigger}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Where Keloids Commonly Appear */}
      <section className="py-20 bg-light">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 md:px-6"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <h2 className="text-4xl md:text-5xl font-bold text-brown mb-6 font-['Georgia']">Where Keloids Commonly Appear</h2>
              <p className="text-lg text-brown/80 mb-6">
                Mayo Clinic notes keloids often show up on earlobes, shoulders, cheeks, and the middle chest. In Malaysia, we also see many keloids on the jawline (from acne), upper back, and arms.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Earlobes",
                  "Shoulders",
                  "Cheeks",
                  "Middle Chest",
                  "Jawline",
                  "Upper Back",
                  "Arms"
                ].map((area, index) => (
                  <motion.div 
                    key={index}
                    variants={scaleIn}
                    className="p-3 bg-white rounded-lg shadow-sm flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-wine" />
                    <span className="text-brown text-sm">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-wine mb-6">Signs Your Scar Is Turning Into a Keloid</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Activity className="w-6 h-6 text-wine mt-1" />
                    <p className="text-brown">It keeps growing past the original injury line</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-wine mt-1" />
                    <p className="text-brown">It feels itchy, sore, tight, or "pulling"</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Eye className="w-6 h-6 text-wine mt-1" />
                    <p className="text-brown">It becomes raised and shiny</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-6 h-6 text-wine mt-1" />
                    <p className="text-brown">It changes colour (pink, red, purple, brown), depending on your skin tone</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* When Should You Treat */}
      <section className="py-20 bg-wine text-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 md:px-6"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-12 font-['Georgia'] text-center">
            When Should You Treat a Keloid?
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-center mb-12 max-w-3xl mx-auto opacity-90">
            Treat it when: it is growing, it is painful or itchy, it affects confidence, it limits movement.
          </motion.p>
          
          <motion.p variants={fadeInUp} className="text-lg text-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            Early treatment usually gives a smoother, easier result than waiting until it becomes thick and hard.
          </motion.p>
        </motion.div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-light">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 md:px-6"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-brown mb-4 font-['Georgia'] text-center">
            Keloid Treatment Options in Malaysia
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-taupe text-center mb-12">(What Actually Works)</motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Treatment cards */}
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Droplets className="w-6 h-6 text-wine" />
              </div>
              <h3 className="text-xl font-bold text-brown mb-3">1) Keloid Injections</h3>
              <p className="text-taupe text-sm mb-4">Steroid injections (triamcinolone) reduce inflammation and slow collagen overgrowth.</p>
              <p className="text-xs text-taupe">Every 4-6 weeks • Several sessions needed • Uncomfortable but tolerable</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-wine" />
              </div>
              <h3 className="text-xl font-bold text-brown mb-3">2) Silicone Gel/Sheets</h3>
              <p className="text-taupe text-sm mb-4">Home support that helps flatten keloids and reduce recurrence risk.</p>
              <p className="text-xs text-taupe">Consistent use for weeks to months • Simple but often quit too early</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-wine" />
              </div>
              <h3 className="text-xl font-bold text-brown mb-3">3) Cryotherapy</h3>
              <p className="text-taupe text-sm mb-4">Freezing scar tissue with liquid nitrogen.</p>
              <p className="text-xs text-taupe">Best combined with injections • Hypopigmentation risk in darker skin</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-wine" />
              </div>
              <h3 className="text-xl font-bold text-brown mb-3">4) Laser Treatment</h3>
              <p className="text-taupe text-sm mb-4">For redness, texture, and thick scars.</p>
              <p className="text-xs text-taupe">Often combined with injections • Fractional CO2 for difficult keloids</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Scissors className="w-6 h-6 text-wine" />
              </div>
              <h3 className="text-xl font-bold text-brown mb-3">5) Surgery (Excision)</h3>
              <p className="text-taupe text-sm mb-4">With strict aftercare to prevent regrowth.</p>
              <p className="text-xs text-taupe">Surgery alone often triggers regrowth • Combined with other therapies</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-wine" />
              </div>
              <h3 className="text-xl font-bold text-brown mb-3">6) Pressure Therapy</h3>
              <p className="text-taupe text-sm mb-4">Especially for ear keloids with pressure earrings.</p>
              <p className="text-xs text-taupe">12-20 hours daily for months • Can be uncomfortable</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Results Can You Expect */}
      <section className="py-20 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 md:px-6"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-brown mb-6 font-['Georgia'] text-center">
            What Results Can You Expect?
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-brown/80 text-center mb-8">
            Let's be honest and practical.
          </motion.p>
          
          <div className="max-w-3xl mx-auto">
            <motion.div variants={scaleIn} className="bg-cream p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-wine mb-6">The goal is usually:</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Flatter scar",
                  "Softer texture",
                  "Less itch and pain",
                  "Less redness",
                  "Lower chance of regrowth"
                ].map((goal, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-wine" />
                    <span className="text-brown">{goal}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-taupe text-sm">
                Not every keloid becomes "invisible." But many keloids become far less noticeable and far less annoying.
                Also, keloids can recur even after successful treatment, so long-term maintenance matters.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Best Plan Approach */}
      <section className="py-20 bg-wine text-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 md:px-6"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-12 font-['Georgia'] text-center">
            A Simple "Best Plan" Approach
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-center mb-12 opacity-90">
            At Nexus Clinic Kuala Lumpur, the most realistic approach is to treat keloids like a project:
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={scaleIn} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-3">Diagnose properly</h3>
              <p className="opacity-80">We confirm whether it is a keloid or hypertrophic scar, then measure thickness, redness, symptoms, and location.</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-3">Choose the right combination</h3>
              <p className="opacity-80">AAD notes combination approaches often work best - steroid injections, cryotherapy, silicone sheets, pressure therapy, and surgery with follow-up.</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-3">Protect your results</h3>
              <p className="opacity-80">Silicone, pressure, scar care, and follow-ups are how you keep it from coming back.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Cost Section */}
      <section className="py-20 bg-light">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 md:px-6"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-brown mb-6 font-['Georgia'] text-center">
            Keloid Treatment Cost in Malaysia
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-brown/80 text-center mb-12">
            Costs depend on size, location, and how many sessions you need.
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { treatment: "Steroid Injections", range: "RM150 - RM500", per: "per session" },
              { treatment: "Laser Treatment", range: "RM500 - RM1,500", per: "per session" },
              { treatment: "Cryotherapy", range: "RM250 - RM500", per: "per session" },
              { treatment: "Surgical Excision", range: "RM1,000+", per: "plus aftercare" }
            ].map((item, index) => (
              <motion.div key={index} variants={scaleIn} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <h3 className="text-lg font-bold text-brown mb-2">{item.treatment}</h3>
                <p className="text-2xl font-bold text-wine mb-1">{item.range}</p>
                <p className="text-sm text-taupe">{item.per}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p variants={fadeInUp} className="text-center text-taupe mt-8">
            A good clinic will quote based on your scar size and expected number of sessions, not just a single "price from" number.
          </motion.p>
        </motion.div>
      </section>

      {/* FAQ Section */}
     <FAQ data={faqs} />

      {/* Prevention Tips */}
      <section className="py-20 bg-brown text-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 md:px-6"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-12 font-['Georgia'] text-center">
            Keloid Prevention Tips
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-xl text-center mb-12 opacity-90 max-w-3xl mx-auto">
            You cannot fully control keloids if your skin is prone, but you can reduce risk:
          </motion.p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Treat acne early to reduce deep inflammation scars",
              "Avoid unnecessary piercings if you already have keloid history",
              "Use silicone gel or sheets after injury when advised",
              "Do not pick scabs or squeeze pimples",
              "Protect healing wounds from friction and sun (sun can darken scars)"
            ].map((tip, index) => (
              <motion.div key={index} variants={scaleIn} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-rose shrink-0" />
                <p className="text-white/90">{tip}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 md:px-6 text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-brown mb-6 font-['Georgia']">
            Start Your Keloid Treatment Journey
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-brown/80 mb-8 max-w-2xl mx-auto">
            If you're searching for keloid treatment in Malaysia or keloid removal in Kuala Lumpur, start with a proper assessment and a plan that matches your scar and your skin type.
          </motion.p>
          
          <motion.div variants={scaleIn}>
            <button className="group px-12 py-4 bg-wine text-white rounded-full hover:bg-rose transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl inline-flex items-center gap-3">
              Book Your Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          <motion.p variants={fadeInUp} className="mt-8 text-taupe">
            Nexus Clinic Kuala Lumpur<br />
            LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}