"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Shield, 
  Sun, 
  Moon, 
  Droplets,
  CheckCircle2,
  AlertCircle,
  Clock,
  Heart,
  Zap,
  Thermometer,
  ChevronRight,
  MapPin,
  LightbulbIcon,
  PersonStanding,
  AmphoraIcon,
  Hotel,
  LineSquiggle
} from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import FAQ from "@/src/components/FAQ";
import SectionBeforeAfter from "@/src/components/BeforeAfterCustomize";

const LaserHairRemovalLanding = () => {

  const treatmentAreas = [
    { name: "Upper Lip", icon: <LightbulbIcon /> },
    { name: "Chin & Jawline", icon: <PersonStanding /> },
    { name: "Underarms", icon: <AmphoraIcon /> },
    { name: "Bikini", icon: <Hotel /> },
    { name: "Brazilian", icon: <Sparkles /> },
    { name: "Legs", icon: <LineSquiggle /> },
    { name: "Arms", icon: <Shield /> },
    { name: "Chest", icon: <Droplets /> },
    { name: "Back", icon: <Moon /> },
    { name: "Shoulders", icon: <Heart /> }
  ];

  const faqs = [
    {
      q: "How many sessions do I need for laser hair removal?",
      a: "Most people need multiple sessions. AAD notes 2-6 treatments for many patients, while some clinic protocols plan 6-8 sessions for optimal results."
    },
    {
      q: "Is laser hair removal permanent?",
      a: "It's long-lasting hair reduction. Many people stay hair-free for months or years. Regrowth is usually finer and lighter, and maintenance may be needed."
    },
    {
      q: "Does laser hair removal hurt?",
      a: "Most people describe it like warm pinpricks or a rubber band snap. Numbing gel may be used for sensitive areas."
    },
    {
      q: "Can laser hair removal work on dark skin in Malaysia?",
      a: "Yes, with the right laser technology and settings. At Nexus Clinic, we prioritize safety and select appropriate wavelengths for Malaysian skin tones."
    },
    {
      q: "What should I avoid before my laser session?",
      a: "Avoid waxing or plucking for at least 4 weeks before treatment. Avoid sun exposure and tanning, and follow your provider's instructions."
    },
    {
      q: "Can I shave between sessions?",
      a: "Yes. Shaving is usually recommended because it keeps the follicle intact while removing surface hair."
    },
    {
      q: "How soon will I see results?",
      a: "AAD notes many people see a 10%-25% reduction after the first treatment, with bigger changes after completing the series."
    },
    {
      q: "What are the side effects?",
      a: "Common short-term effects include redness and swelling. Pigment changes can happen, and blistering or scarring is rare, especially when performed by skilled medical professionals."
    },
    {
      q: "Why is my hair growing back after laser?",
      a: "Hair grows in cycles, and not all follicles are in the treatable growth phase each session. That's why you need multiple visits and sometimes maintenance."
    },
    {
      q: "How much does laser hair removal cost in Kuala Lumpur?",
      a: "Malaysia references commonly cite RM150 to RM1,500 per session depending on area size, with many clinics offering packages and promos."
    },
    {
      q: "Is IPL the same as laser hair removal?",
      a: "No. IPL uses broad-spectrum light, while laser uses a specific wavelength. Results and safety can differ depending on device and skin tone."
    },
    {
      q: "Should I do laser hair removal at a salon or a medical clinic?",
      a: "AAD and Mayo Clinic both caution that complications like burns and pigment changes are more likely in inexperienced hands, so medical supervision and trained providers matter."
    }
  ];

    const transformations = [
    {
      id: 1,
      before: "/images/B&A-skin/B&A-laser-hair-removal1.webp",
      after: "/images/B&A-skin/B&A-laser-hair-removal1.webp",
    },
    {
      id: 2,
      before: "/images/B&A-skin/B&A-laser-hair-removal2.webp",
      after: "/images/B&A-skin/B&A-laser-hair-removal2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-laser-hair-removal3.webp",
      after: "/images/B&A-skin/B&A-laser-hair-removal3.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-cream font-['Inter',sans-serif] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-wine rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose rounded-full filter blur-3xl"></div>
        </div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 bg-wine/10 text-wine rounded-full text-sm font-medium">
                Nexus Clinic Kuala Lumpur
              </span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-brown mb-6 leading-tight font-['Georgia',serif]"
            >
              Smooth skin is nice.
              <span className="block text-wine">Not thinking about hair every week is even nicer.</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-taupe mb-10 max-w-2xl mx-auto"
            >
              Laser hair removal helps reduce unwanted hair for months or even years, with softer regrowth when it returns. At Nexus Clinic Kuala Lumpur, we focus on safe settings, realistic results, and a plan that suits your skin tone and hair type.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-wine text-white rounded-full font-medium hover:bg-rose transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Book Your Consultation
              </button>
              <button className="px-8 py-4 bg-white text-brown rounded-full font-medium hover:bg-cream transition-all duration-300 border-2 border-taupe/20">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Decorative Elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-10 text-wine/20"
        >
          <Sparkles size={60} />
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-wine" />
              </div>
              <h3 className="text-lg font-semibold text-brown mb-2">MOH-Compliant</h3>
              <p className="text-taupe">Nexus Clinic prioritises safety and compliance with Malaysia MOH guidelines</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-wine" />
              </div>
              <h3 className="text-lg font-semibold text-brown mb-2">Realistic Expectations</h3>
              <p className="text-taupe">Long-lasting hair reduction, not always 100% permanent for life</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-wine" />
              </div>
              <h3 className="text-lg font-semibold text-brown mb-2">Sun-Safe Protocols</h3>
              <p className="text-taupe">After treatment, protecting skin from sun is a core safety step</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-wine" />
              </div>
              <h3 className="text-lg font-semibold text-brown mb-2">KL City Centre</h3>
              <p className="text-taupe">Wisma UOA II, Jalan Pinang with published contact details</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Is Laser Hair Removal */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brown mb-6 font-['Georgia',serif]">
                What Is Laser Hair Removal?
              </h2>
              <p className="text-lg text-taupe mb-6">
                Laser hair removal uses concentrated light energy to target hair follicles and reduce future hair growth. It works best when the laser energy is absorbed by pigment in the hair. That is why dark hair usually responds best, and why hair colour and skin tone influence results.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1 text-center p-4 bg-wine/5 rounded-xl">
                    <span className="block text-2xl font-bold text-wine">Waxing</span>
                    <span className="text-taupe">removes hair now</span>
                  </div>
                  <ChevronRight className="w-6 h-6 text-wine" />
                  <div className="flex-1 text-center p-4 bg-wine text-white rounded-xl">
                    <span className="block text-2xl font-bold">Laser</span>
                    <span>reduces hair over time</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/skin/laser-hair-removal.webp" 
                  alt="Laser hair removal treatment at Nexus Clinic"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brown/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-white text-sm font-medium bg-wine px-3 py-1 rounded-full">
                    Advanced Laser Technology
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Is Laser Hair Removal Permanent */}
      <section className="py-20 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brown mb-8 text-center font-['Georgia',serif]"
          >
            Is Laser Hair Removal Permanent?
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-taupe text-center max-w-3xl mx-auto mb-12"
          >
            It is best described as long-term hair reduction.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div variants={scaleIn} className="bg-cream p-8 rounded-2xl">
              <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <p className="text-brown font-medium">you spend less time shaving</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-cream p-8 rounded-2xl">
              <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <p className="text-brown font-medium">you get fewer ingrown hairs</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-cream p-8 rounded-2xl">
              <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <p className="text-brown font-medium">you feel smoother with less maintenance</p>
            </motion.div>
          </div>
          
          <motion.div 
            variants={fadeInUp}
            className="bg-wine/5 p-6 rounded-xl border-l-4 border-wine"
          >
            <p className="text-brown">
              <span className="font-semibold">Mayo Clinic notes:</span> Most patients are hair-free for months or even years after completing sessions, and if hair returns, it is often finer and lighter. Laser hair removal slows hair growth but does not guarantee permanent hair removal forever.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Popular in KL */}
      <section className="py-20 bg-cream">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brown mb-8 text-center font-['Georgia',serif]"
          >
            Why Laser Hair Removal Is So Popular in Kuala Lumpur
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-taupe text-center max-w-2xl mx-auto mb-12"
          >
            Malaysia's heat, humidity, and daily routines make hair removal feel constant.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-wine" />
              </div>
              <p className="text-brown">shaving causes dark shadow and stubble fast</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Thermometer className="w-6 h-6 text-wine" />
              </div>
              <p className="text-brown">waxing hurts and can trigger irritation</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-wine" />
              </div>
              <p className="text-brown">ingrown hairs keep coming back</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-wine/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-wine" />
              </div>
              <p className="text-brown">underarms and bikini areas feel more comfortable when hair is reduced</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who Is a Good Candidate */}
      <section className="py-20 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brown mb-8 text-center font-['Georgia',serif]"
          >
            Who Is a Good Candidate?
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div variants={fadeInLeft}>
              <div className="bg-cream p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-wine mb-6">You're usually a great candidate if:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <span className="text-brown">your hair is dark (black or dark brown)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <span className="text-brown">you want reduction on underarms, legs, bikini, face, back, or chest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <span className="text-brown">you get ingrown hairs or razor bumps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-wine shrink-0 mt-1" />
                    <span className="text-brown">you want a cleaner, low-maintenance routine</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight}>
              <div className="bg-cream p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-rose mb-6">Important Considerations:</h3>
                
                <div className="mb-6">
                  <p className="text-brown font-medium mb-2">If your hair is light (blonde, red, white, grey):</p>
                  <p className="text-taupe">Laser is often less effective because these hairs absorb less laser energy. A consultation matters here, so you don't waste money on the wrong method.</p>
                </div>
                
                <div>
                  <p className="text-brown font-medium mb-2">Who Should Avoid or Pause:</p>
                  <ul className="space-y-2 text-taupe">
                    <li>• recent strong sun exposure or tanning</li>
                    <li>• active skin infection in the area</li>
                    <li>• certain medications that increase light sensitivity</li>
                    <li>• pregnancy (many clinics prefer to postpone)</li>
                    <li>• not recommended around eyelids and eyebrows</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Areas We Treat */}
      <section className="py-20 bg-cream">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brown mb-8 text-center font-['Georgia',serif]"
          >
            Areas We Commonly Treat
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {treatmentAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                custom={index}
                className="bg-white p-4 rounded-xl text-center shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
              >
                <span className="text-3xl mb-2 block">{area.icon}</span>
                <span className="text-sm font-medium text-brown">{area.name}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 text-center text-taupe">
            <p>Face: Upper lip, chin, jawline, sideburns, full face</p>
            <p>Men's areas: Chest, stomach, back, shoulders, neck line</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Laser vs IPL */}
      <section className="py-20 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brown mb-8 text-center font-['Georgia',serif]"
          >
            Laser vs IPL in Malaysia
            <span className="block text-lg text-taupe mt-2">Quick, Honest Comparison</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div variants={fadeInLeft} className="bg-cream p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-wine mb-4">Laser Hair Removal</h3>
              <p className="text-brown">Uses a single wavelength laser designed to target follicles more precisely.</p>
              <div className="mt-4 p-4 bg-white rounded-xl">
                <p className="text-sm text-taupe">If you want the "real deal" hair reduction journey, ask the clinic what device they use and why it suits your skin tone.</p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-rose mb-4">IPL</h3>
              <p className="text-brown">Uses broad-spectrum light. It can reduce hair for some people, but it is not the same as true laser systems. Cost is often lower, but results can vary widely.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How Many Sessions */}
      <section className="py-20 bg-cream">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brown mb-8 text-center font-['Georgia',serif]"
          >
            How Many Sessions Do You Need?
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            <motion.p variants={fadeInUp} className="text-lg text-taupe mb-8 text-center">
              Most people need a series because hair grows in cycles, and laser is most effective when hair is in the active growth stage.
            </motion.p>
            
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl mb-6">
              <p className="text-brown"><span className="font-semibold">AAD notes:</span> most people need 2 to 6 laser treatments.</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl mb-6">
              <p className="text-brown"><span className="font-semibold">Mayo Clinic states:</span> treatment typically requires two to six treatments, with spacing depending on body area.</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl mb-8">
              <p className="text-brown"><span className="font-semibold">Nexus Clinic's guide:</span> most individuals need 6 to 8 sessions, with maintenance if needed.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-wine/10 rounded-xl">
                <p className="font-semibold text-wine">Face</p>
                <p className="text-sm text-brown">every 4 to 8 weeks</p>
              </div>
              <div className="text-center p-4 bg-wine/10 rounded-xl">
                <p className="font-semibold text-wine">Back/Slower areas</p>
                <p className="text-sm text-brown">every 12 to 16 weeks</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What Happens During Treatment */}
      <section className="py-20 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brown mb-8 text-center font-['Georgia',serif]"
          >
            What Happens During Laser Hair Removal?
          </motion.h2>
          
          <div className="max-w-2xl mx-auto">
            <motion.ol variants={staggerContainer} className="space-y-4">
              {[1,2,3,4,5].map((num) => (
                <motion.li key={num} variants={fadeInLeft} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-wine text-white rounded-full flex items-center justify-center shrink-0 font-bold">{num}</span>
                  <span className="text-brown">
                    {num === 1 && "Cleaning the area"}
                    {num === 2 && "Optional numbing gel for sensitive areas (some people need it, some don't)"}
                    {num === 3 && "Protective eyewear for everyone in the room"}
                    {num === 4 && "Laser pulses that feel like warm pinpricks or a rubber band snap"}
                    {num === 5 && "Short session time for small areas, longer for full legs or back"}
                  </span>
                </motion.li>
              ))}
            </motion.ol>
            
            <motion.p variants={fadeInUp} className="mt-8 text-taupe italic">
              Afterward, mild redness and swelling can happen. It often looks like a light sunburn and settles within hours to a couple of days.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* How to Prepare & Aftercare */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-brown mb-6">How to Prepare</h3>
              
              <div className="mb-6">
                <h4 className="font-semibold text-wine mb-3">Do</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                    <span className="text-brown">Avoid sun exposure before and after, and wear SPF 30+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                    <span className="text-brown">Shave the area the day before or the day of treatment (clinic will guide you)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-rose mb-3">Avoid</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <span className="text-brown">Waxing, plucking, or electrolysis for at least 4 weeks before</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <span className="text-brown">Using fake tan products right before sessions</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-brown mb-6">Aftercare</h3>
              
              <p className="text-taupe mb-4">
                AAD's advice is clear: protect treated skin from sun, avoid tanning equipment, and follow your doctor's aftercare instructions.
              </p>
              
              <p className="text-brown">
                Cool compresses can help if the area feels warm or slightly swollen. Most people return to normal activities immediately, but treat your skin gently for a day or two.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionBeforeAfter transformations={transformations} />

      {/* Side Effects and Risks */}
      <section className="py-20 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brown mb-8 text-center font-['Georgia',serif]"
          >
            Side Effects and Risks
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="font-semibold text-wine mb-2">Common (short-term)</h3>
              <ul className="space-y-1 text-brown">
                <li>• redness</li>
                <li>• swelling</li>
                <li>• mild discomfort</li>
              </ul>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="font-semibold text-rose mb-2">Less common</h3>
              <ul className="space-y-1 text-brown">
                <li>• pigment changes (darkening or lightening)</li>
                <li>• blistering, crusting, scarring (rare)</li>
                <li>• paradoxical hair growth (rare but real)</li>
              </ul>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-cream p-6 rounded-xl">
              <h3 className="font-semibold text-brown mb-2">Important Note</h3>
              <p className="text-sm text-taupe">AAD and Mayo Clinic both warn that laser hair removal can be risky in inexperienced hands, which is why provider skill matters.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Cost Section */}
      <section className="py-20 bg-cream">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brown mb-8 text-center font-['Georgia',serif]"
          >
            How Much Does Laser Hair Removal Cost in Malaysia?
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-center text-taupe mb-8">
            Laser hair removal cost in Kuala Lumpur varies by area size, number of sessions, technology used, and clinic location.
          </motion.p>
          
          <div className="max-w-3xl mx-auto">
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl mb-4">
              <p className="text-brown text-center"><span className="font-bold text-wine">Typical range:</span> RM150 to RM1,500 per session depending on treatment area.</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl mb-4">
              <p className="text-brown text-center">Small areas (upper lip, chin, underarms): RM150-RM350</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl mb-4">
              <p className="text-brown text-center">Medium areas (bikini, half legs): RM350-RM600</p>
            </motion.div>
            
            <motion.div variants={scaleIn} className="bg-white p-6 rounded-xl mb-4">
              <p className="text-brown text-center">Large areas (full legs, back): RM600-RM1,200</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-8 p-6 bg-wine/5 rounded-xl border border-wine/20">
              <p className="text-brown text-center italic">
                <span className="font-bold">Best tip:</span> price is important, but device type + safety + correct settings matter more for long-term satisfaction.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Competitor Review */}
      <section className="py-20 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brown mb-8 text-center font-['Georgia',serif]"
          >
            Competitor Review
            <span className="block text-lg text-taupe mt-2">What Top Clinics in Malaysia Are Doing</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl">
              <h3 className="font-semibold text-wine mb-2">Heavy promo pricing</h3>
              <p className="text-brown">Some providers push low trial prices (RM66 style deals) to get first-time bookings.</p>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <h3 className="font-semibold text-wine mb-2">Price transparency</h3>
              <p className="text-brown">Some clinics publish clear price ranges by small, medium, and large body parts.</p>
            </motion.div>
            
            <motion.div variants={fadeInLeft} className="bg-cream p-6 rounded-xl">
              <h3 className="font-semibold text-wine mb-2">Big directory presence</h3>
              <p className="text-brown">Platforms like WhatClinic and ERUFU list dozens of KL options with reviews.</p>
            </motion.div>
            
            <motion.div variants={fadeInRight} className="bg-cream p-6 rounded-xl">
              <h3 className="font-semibold text-wine mb-2">Device-led marketing</h3>
              <p className="text-brown">Clinics highlight specific machines (Alexandrite, diode, Nd:YAG) as a differentiator.</p>
            </motion.div>
          </div>
          
          <motion.div variants={fadeInUp} className="mt-8 p-6 bg-wine text-white rounded-xl text-center">
            <p className="text-lg font-medium">
              How Nexus Clinic stands out: safety, MOH guideline compliance, and realistic session planning (often 6-8 sessions). That messaging builds trust, especially for Malaysian skin tones where pigment safety matters.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQ data={faqs} />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-brown mb-6 font-['Georgia',serif]"
          >
            Start Your Journey Today
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-taupe mb-8 max-w-2xl mx-auto"
          >
            If you're searching for laser hair removal in Kuala Lumpur or laser hair removal in Malaysia, start with a consultation that matches the laser to your skin tone and hair type.
          </motion.p>
          
          <motion.div variants={scaleIn} className="inline-block">
            <button className="px-8 py-4 bg-wine text-white rounded-full font-medium hover:bg-rose transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Book Your Consultation
            </button>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-8 text-brown">
            <p>Nexus Clinic Kuala Lumpur</p>
            <p className="text-taupe">LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur</p>
            <p className="text-taupe">Phone: 016-7025699 / 03-21635699</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default LaserHairRemovalLanding;