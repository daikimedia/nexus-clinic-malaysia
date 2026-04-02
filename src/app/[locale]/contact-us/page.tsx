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
  Zap,
  Droplet,
  Target,
  ChevronRight,
  Phone,
  Users,
  Flame,
  HelpCircle,
  EyeOff,
  Gem,
  Feather,
  Wind,
  Activity,
  Syringe,
  Pill,
  Brain,
  Droplets,
  Scan,
  Weight,
  Thermometer,
  Snowflake,
  AlertCircle,
  TrendingUp,
  BarChart3,
  Star,
  Quote,
  Play,
  Stethoscope,
  Smile,
  ThumbsUp,
  Globe,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MessageCircle,
  Home,
  Building2,
  BadgeCheck,
  Leaf,
  Trophy,
  Briefcase,
  GraduationCap,
  Send,
  Navigation,
  Car,
  Train,
  Bus,
  ParkingCircle,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  User,
  MessageSquare,
  SendHorizontal,
  CheckCircle as CheckCircleIcon,
} from "lucide-react";
import {
  staggerContainer,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  scaleIn,
} from "@/src/lib/animations";
import Whatsapp from "@/src/components/Whatsapp";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// interface ContactUsProps {
//   locale: string;
// }

export default function ContactUs() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        treatment: "",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: ["Wisma UOA II, Jalan Pinang", "50450 Kuala Lumpur", "Malaysia"],
      action: { text: "Get Directions", link: "https://maps.google.com" },
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["Main: 016-702 5699", "WhatsApp: 016-702 5699"],
      action: { text: "Call Now", link: "tel:0167025699" },
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@nexusclinic.com.my", "care@nexusclinic.com.my"],
      action: { text: "Send Email", link: "mailto:info@nexusclinic.com.my" },
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Opening Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed", "Public Holidays: By Appointment"],
      action: null,
    },
  ];

  const transportationOptions = [
    { icon: <Car className="w-5 h-5" />, title: "By Car", description: "Parking available at Wisma UOA II basement" },
    { icon: <Train className="w-5 h-5" />, title: "By LRT", description: "KLCC Station (5 min walk) or Ampang Park Station" },
    { icon: <Bus className="w-5 h-5" />, title: "By Bus", description: "Rapid KL buses to KLCC bus hub" },
    { icon: <Navigation className="w-5 h-5" />, title: "By Ride-Hailing", description: "Drop off at Wisma UOA II main entrance" },
  ];

  const faqData = [
    { q: "Do I need an appointment to visit Nexus Clinic?", a: "Yes, we recommend booking an appointment to ensure our doctors can give you proper attention. Walk-ins are welcome but may have waiting time." },
    { q: "Is parking available at the clinic?", a: "Yes, Wisma UOA II has basement parking. We validate parking tickets for patients." },
    { q: "What is the nearest LRT station?", a: "KLCC LRT station is a 5-minute walk from our clinic. Ampang Park station is also nearby." },
    { q: "Can I book a consultation via WhatsApp?", a: "Yes! You can reach us on WhatsApp at 016-702 5699 for appointments and enquiries." },
    { q: "Do you offer online consultations?", a: "Yes, we offer virtual consultations for certain treatments. Please contact us to arrange." },
    { q: "What languages do your doctors speak?", a: "Our doctors speak English, Bahasa Malaysia, Mandarin, Cantonese, and Tamil." },
  ];

  const treatmentOptions = [
    "Select a treatment",
    "Face Treatments (Botox, Fillers, Thread Lift)",
    "Skin Treatments (Acne, Pigmentation, Laser)",
    "Hair Restoration (Transplant, PRP, Mesotherapy)",
    "Weight Loss (Ozempic, Wegovy, Mounjaro)",
    "Body Contouring (Fat Freezing, CoolSculpting)",
    "General Consultation",
    "Other / Not Sure",
  ];

  return (
    <div className="w-full bg-light overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-cream/60 via-light to-rose/15" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-wine/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="container mx-auto max-w-5xl relative z-10 text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-rose/10 px-4 py-2 rounded-full mx-auto mb-6">
            <Sparkles className="w-4 h-4 text-wine" />
            <span className="text-sm font-inter text-wine font-medium">Get in Touch • Nexus Clinic KL</span>
          </motion.div>
          
          <motion.h1
            variants={fadeInUp}
            className="font-georgia text-4xl md:text-5xl lg:text-6xl text-brown leading-tight"
          >
            Contact Us
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-taupe font-inter mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about our treatments? Want to book a consultation? 
            We are here to help. Reach out to us any way that works for you.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-light -mt-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-cream p-6 rounded-2xl border border-taupe/10 shadow-md text-center"
              >
                <div className="w-14 h-14 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-4 text-wine">
                  {info.icon}
                </div>
                <h3 className="font-georgia text-xl text-brown mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-taupe font-inter text-sm">{detail}</p>
                ))}
                {info.action && (
                  <a
                    href={info.action.link}
                    target={info.action.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.action.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-wine font-inter text-sm mt-4 hover:gap-2 transition-all"
                  >
                    {info.action.text}
                    <ChevronRight className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-6xl"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Map & Location Info */}
            <motion.div variants={fadeInLeft}>
              <h2 className="font-georgia text-2xl md:text-3xl text-brown mb-6">Find Us Here</h2>
              
              {/* Map Container */}
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.720939743111!2d101.715592!3d3.158475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37c4b7f2c3e3%3A0x8f5c5c5c5c5c5c5c!2sWisma%20UOA%20II!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              {/* Transportation Options */}
              <div className="bg-cream rounded-2xl p-6 mb-6">
                <h3 className="font-georgia text-lg text-brown mb-4">How to Get Here</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {transportationOptions.map((option, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-wine/10 rounded-full flex items-center justify-center shrink-0 text-wine">
                        {option.icon}
                      </div>
                      <div>
                        <p className="font-inter font-semibold text-brown text-sm">{option.title}</p>
                        <p className="text-taupe font-inter text-xs">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Landmarks */}
              <div className="bg-cream rounded-2xl p-6">
                <h3 className="font-georgia text-lg text-brown mb-4">Nearby Landmarks</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-taupe font-inter text-sm">
                    <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                    KLCC Suria Mall - 5 minute walk
                  </li>
                  <li className="flex items-center gap-3 text-taupe font-inter text-sm">
                    <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                    Petronas Twin Towers - 8 minute walk
                  </li>
                  <li className="flex items-center gap-3 text-taupe font-inter text-sm">
                    <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                    Kuala Lumpur Convention Centre - 6 minute walk
                  </li>
                  <li className="flex items-center gap-3 text-taupe font-inter text-sm">
                    <div className="w-1.5 h-1.5 bg-wine rounded-full" />
                    Avenue K Shopping Mall - 3 minute walk
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div variants={fadeInRight}>
              <div className="bg-cream rounded-2xl p-6 md:p-8 shadow-lg border border-taupe/10">
                <h2 className="font-georgia text-2xl md:text-3xl text-brown mb-2">Send Us a Message</h2>
                <p className="text-taupe font-inter text-sm mb-6">
                  Fill in the form below and we will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                  >
                    <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h3 className="font-georgia text-xl text-brown mb-2">Message Sent!</h3>
                    <p className="text-taupe font-inter text-sm">
                      Thank you for reaching out. We will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-brown font-inter text-sm mb-2">
                          Your Name <span className="text-wine">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                          <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-taupe/20 bg-light focus:outline-none focus:border-wine transition-colors text-brown font-inter"
                            placeholder="John Tan"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-brown font-inter text-sm mb-2">
                          Email Address <span className="text-wine">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                          <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-taupe/20 bg-light focus:outline-none focus:border-wine transition-colors text-brown font-inter"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-brown font-inter text-sm mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                          <input
                            type="tel"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-taupe/20 bg-light focus:outline-none focus:border-wine transition-colors text-brown font-inter"
                            placeholder="012-345 6789"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-brown font-inter text-sm mb-2">
                          Preferred Treatment
                        </label>
                        <div className="relative">
                          <Target className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                          <select
                            name="treatment"
                            value={formState.treatment}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-taupe/20 bg-light focus:outline-none focus:border-wine transition-colors text-brown font-inter appearance-none"
                          >
                            {treatmentOptions.map((option, idx) => (
                              <option key={idx} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-brown font-inter text-sm mb-2">
                        Your Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-taupe" />
                        <textarea
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-taupe/20 bg-light focus:outline-none focus:border-wine transition-colors text-brown font-inter resize-none"
                          placeholder="Tell us about your concerns or questions..."
                        />
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className="w-full bg-wine text-light py-3 rounded-xl font-inter font-semibold hover:bg-wine/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-light/30 border-t-light rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <SendHorizontal className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-taupe font-inter text-xs text-center">
                      By submitting this form, you agree to our privacy policy. 
                      We will never share your information.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* WhatsApp & Quick Contact Section */}
      <section className="py-16 px-4 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <MessageCircle className="w-12 h-12 text-wine mx-auto mb-4" />
            <h2 className="font-georgia text-3xl text-brown mb-4">Prefer WhatsApp?</h2>
            <p className="text-taupe font-inter max-w-2xl mx-auto mb-6">
              We understand that sometimes a quick message is easier. 
              Reach out to us on WhatsApp for faster responses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Whatsapp 
                message="Hi, I'd like to enquire about treatments at Nexus Clinic KL. Please help me with more information."
              />
              <Link href="tel:0167025699">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-full border-2 border-wine text-wine font-inter font-semibold hover:bg-wine hover:text-light transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call 016-702 5699
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine font-inter">
              Common Questions
            </span>
            <h2 className="font-georgia text-3xl md:text-4xl text-brown">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-0.5 bg-wine mx-auto mt-4"></div>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-cream p-6 rounded-xl border border-taupe/10"
              >
                <h3 className="font-georgia text-lg text-brown mb-3">{faq.q}</h3>
                <p className="text-taupe font-inter text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Business Hours & Emergency Contact */}
      <section className="py-16 px-4 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInLeft} className="text-center md:text-left">
              <ClockIcon className="w-10 h-10 text-cream mb-4" />
              <h3 className="font-georgia text-2xl text-light mb-2">Business Hours</h3>
              <div className="space-y-2 mt-4">
                <div className="flex justify-between items-center text-cream/90 font-inter">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-cream/90 font-inter">
                  <span>Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center text-cream/70 font-inter">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between items-center text-cream/70 font-inter">
                  <span>Public Holidays</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="text-center md:text-left">
              <Heart className="w-10 h-10 text-cream mb-4" />
              <h3 className="font-georgia text-2xl text-light mb-2">Emergency Contact</h3>
              <p className="text-cream/80 font-inter mb-4">
                For urgent medical concerns outside business hours, please contact:
              </p>
              <div className="space-y-2">
                <p className="text-cream/90 font-inter">
                  <span className="font-semibold">Emergency Hotline:</span> 016-702 5699
                </p>
                <p className="text-cream/80 font-inter text-sm">
                  For life-threatening emergencies, please call 999 immediately.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 px-4 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="font-georgia text-2xl md:text-3xl text-brown mb-4">Follow Us</h2>
            <p className="text-taupe font-inter mb-8">
              Stay connected with us on social media for updates, promotions, and educational content.
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="#"
                className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-wine hover:bg-wine hover:text-light transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-wine hover:bg-wine hover:text-light transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-wine hover:bg-wine hover:text-light transition-all duration-300"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-wine hover:bg-wine hover:text-light transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-brown">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="font-georgia text-3xl md:text-5xl text-light">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-cream font-inter max-w-2xl mx-auto">
              Book your consultation today and take the first step toward achieving your aesthetic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact-us/book-consultation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-light text-wine px-8 py-4 rounded-full font-georgia text-lg hover:bg-cream transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Book Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Whatsapp 
                message="Hi, I'd like to book a consultation at Nexus Clinic KL. Please let me know available slots."
                variant="light"
              />
            </div>
            <p className="text-cream/80 font-inter text-sm">
              Limited Slots Available This Week | Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer Brand Content */}
      <section className="py-12 px-4 bg-wine/90">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl text-center"
        >
          <p className="text-cream/70 font-inter text-sm leading-relaxed">
            Nexus Clinic is an advanced aesthetic and medical clinic in Kuala Lumpur offering doctor-led treatments 
            for face, skin, hair, and weight loss. We focus on clear diagnosis, natural-looking outcomes, and treatment 
            plans built around long-term confidence and wellbeing.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Link href="/privacy-policy" className="text-cream/50 hover:text-cream text-xs transition-colors">
              Privacy Policy
            </Link>
            <span className="text-cream/30">|</span>
            <Link href="/terms-conditions" className="text-cream/50 hover:text-cream text-xs transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-cream/30">|</span>
            <Link href="/sitemap" className="text-cream/50 hover:text-cream text-xs transition-colors">
              Sitemap
            </Link>
          </div>
          <p className="text-cream/40 font-inter text-xs mt-6">
            © 2024 Nexus Clinic Kuala Lumpur. All rights reserved.
          </p>
        </motion.div>
      </section>

      {/* Floating WhatsApp Button (already in layout, but included for completeness) */}
    </div>
  );
}