"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Star,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Heart,
  Award,
  Shield,
  MessageCircle,
  ArrowRight,
  Play,
  Quote,
  Scan,
} from "lucide-react";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";
import GalleryPage from "./SliderGallery";
import { DoctorsSection } from "../components/DoctorSection";
import FAQ from "../components/FAQ";
import SectionBeforeAfter from "../components/BeforeAfterCustomize";
import SocialIcons from "../components/SocialIcons";
const GlassCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}
    className={`backdrop-blur-xl rounded-2xl lg:rounded-3xl border border-white/50 bg-white/70 ${className}`}
  >
    {children}
  </motion.div>
);

const HeroSection = ({ t }: { t: (key: string) => string }) => {
  const [count, setCount] = useState(23456);

  useEffect(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem("counterDate");
    const savedCount = localStorage.getItem("counterValue");

    if (savedDate === today && savedCount) {
      setCount(parseInt(savedCount));
    } else {
      const base = 23000 + Math.floor(Math.random() * 1000);
      localStorage.setItem("counterDate", today);
      localStorage.setItem("counterValue", base.toString());
      setCount(base);
    }

    const interval = setInterval(() => {
      setCount((prev) => {
        const newCount = prev + Math.floor(Math.random() * 5);
        localStorage.setItem("counterValue", newCount.toString());
        return newCount;
      });
    }, 3600000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-12 md:pt-24 lg:pt-0 overflow-hidden bg-cream">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-200 h-100 rounded-full blur-3xl bg-linear-radial from-rose/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-150 h-150 rounded-full blur-3xl bg-linear-radial from-taupe/15 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-0 md:py-12">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Decorative Quote */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="md:inline-block hidden text-6xl lg:text-8xl mb-4 opacity-20 font-georgia text-wine"
              >
                &ldquo;
              </motion.span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 font-georgia text-brown">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="block"
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="inline-block md:hidden text-6xl lg:text-8xl mb-4 opacity-20 font-georgia text-wine"
                  >
                    &ldquo;
                  </motion.span>
                  {t("hero.heading1")}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="block text-wine"
                >
                  {t("hero.heading2")}
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base lg:text-lg mb-10 max-w-md mx-auto lg:mx-0 text-taupe leading-relaxed"
              >
                {t("hero.description")}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <motion.a
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(140, 79, 88, 0.25)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  href="https://api.leadconnectorhq.com/widget/booking/tQwUF5MSxWFBM1ymiizk/"
                  className=" px-4 py-2 lg:px-8 lg:py-4 rounded-full text-white text-sm tracking-wider flex items-center gap-3 bg-brown hover:bg-wine transition-colors"
                >
                  {t("hero.cta1")}
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/consultation"
                  className="flex items-center gap-3 text-sm tracking-wider text-brown"
                >
                  <span className="w-12 h-12 rounded-full border-2 border-brown flex items-center justify-center hover:bg-brown hover:text-white transition-colors">
                    <Play size={16} className="fill-current" />
                  </span>
                  {t("hero.cta2")}
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-12 mt-4 lg:mt-16"
            >
              <div className="text-center lg:text-left">
                <span className="text-5xl lg:text-6xl font-light font-georgia text-brown">
                  {t("hero.stat1Value")}
                </span>
                <p className="text-sm mt-2 text-taupe">
                  {t("hero.stat1Label1")}
                  <br />
                  {t("hero.stat1Label2")}
                </p>
              </div>
              <div className="w-px h-16 bg-taupe/30" />
              <div className="text-center lg:text-left">
                <span className="text-5xl lg:text-6xl font-light font-georgia text-brown">
                  {t("hero.stat2Value")}
                </span>
                <p className="text-sm mt-2 text-taupe">
                  {t("hero.stat2Label1")}
                  <br />
                  {t("hero.stat2Label2")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right - Hero Image with Floating Elements */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              className="relative"
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto max-w-md lg:max-w-full"
              >
                <div className="relative rounded-[40px] lg:rounded-[60px] overflow-hidden">
                  <img
                    src="/images/treatment/nexus-team-hero.jpeg"
                    alt="Nexus Team "
                    className="w-full h-full object-contain"
                  />

                  {/* Overlay linear */}
                  <div className="absolute inset-0 bg-linear-to-t from-cream/40 to-transparent" />
                </div>

                {/* Floating Cards */}

                {/* <GlassCard
                  className="absolute bottom md:bottom-10 -left-4 lg:-left-12 p-3 lg:p-5"
                  delay={0.5}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-wine fill-wine"
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-brown">5.0</span>
                    <span className="text-sm text-taupe">
                      {t("testimonials.reviews")}
                    </span>
                  </div>
                  <div className="text-sm text-taupe mt-2">
                    {count.toLocaleString()}+ {t("hero.customersVisited")}
                  </div>
                </GlassCard> */}

                {/* Treatment Gallery Card */}
                <GlassCard
                  className="absolute -top-4 lg:top-80 -right-4 lg:-right-12 p-2 lg:p-5 max-w-70 hidden md:block"
                  delay={1.6}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-brown">
                      {t("hero.skinTreatment")}
                    </span>
                    <ChevronRight size={18} className="text-taupe" />
                  </div>
                  <div className="flex gap-2 mb-3">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="w-12 h-12 rounded-xl overflow-hidden"
                      >
                        <img
                          src={`/images/treatment/${
                            [
                              "face-filler.png",
                              "weight-loss.png",
                              "facial.png",
                              "hair-restoration.png",
                            ][i - 1]
                          }?w=100&auto=format&fit=crop`}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full py-2 rounded-full text-sm border border-taupe text-brown text-center hover:bg-brown hover:text-white hover:border-brown transition-colors"
                  >
                    {t("hero.viewRecommendations")}
                  </motion.button>
                </GlassCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:block"
      >
        <span className="text-xs tracking-widest text-taupe">
          {t("hero.scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-taupe flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-taupe"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

const ServicesSection = ({ t }: { t: (key: string) => string }) => {
  const services = [
    {
      title: t("services.items.facial.title"),
      subtitle: t("services.items.facial.subtitle"),
      description: t("services.items.facial.description"),
      image: "/images/treatment/facial.png",
      span: "lg:col-span-2 lg:row-span-2",
      link: "/face/",
    },
    {
      title: t("services.items.weightLoss.title"),
      subtitle: t("services.items.weightLoss.subtitle"),
      description: t("services.items.weightLoss.description"),
      image: "/images/treatment/weight-loss.png?w=400&auto=format&fit=crop",
      span: "",
      link: "/weight-loss/",
    },
    {
      title: t("services.items.skin.title"),
      subtitle: t("services.items.skin.subtitle"),
      description: t("services.items.skin.description"),
      image: "/images/treatment/face-scan.png?w=400&auto=format&fit=crop",
      span: "",
      link: "/skin/",
    },
    {
      title: t("services.items.hair.title"),
      subtitle: t("services.items.hair.subtitle"),
      description: t("services.items.hair.description"),
      image:"/images/treatment/hair-restoration.png?w=600&auto=format&fit=crop",
      span: "lg:col-span-2",
      link: "/hair/",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine">
              {t("services.subtitle")}
            </span>
            <h2 className="text-3xl lg:text-5xl font-georgia text-brown">
              {t("services.title")} <br className="hidden lg:block" />
              <span className="text-wine">{t("services.titleHighlight")}</span>
            </h2>
          </div>
          <p className="max-w-md mt-6 lg:mt-0 text-taupe">
            {t("services.description")}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer ${service.span}`}
              style={{
                minHeight: service.span.includes("row-span-2")
                  ? "500px"
                  : "250px",
              }}
            >
              {/* Background Image */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-brown/80 via-brown/40 to-transparent transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <span className="text-xs tracking-widest text-white/70 mb-2">
                  {service.subtitle}
                </span>
                <h3 className="text-xl lg:text-2xl text-white mb-2 font-georgia">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm mb-4 max-w-xs">
                  {service.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <Link
                    href={service.link}
                    className="flex items-center gap-2 text-white text-sm group-hover:gap-4 transition-all"
                  >
                    <span>{t("services.explore")}</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = ({ t }: { t: (key: string) => string }) => {
  const features = [
    {
      icon: Shield,
      title: t("whyChoose.features.moh.title"),
      desc: t("whyChoose.features.moh.desc"),
    },
    {
      icon: Award,
      title: t("whyChoose.features.doctor.title"),
      desc: t("whyChoose.features.doctor.desc"),
    },
    {
      icon: Heart,
      title: t("whyChoose.features.personalized.title"),
      desc: t("whyChoose.features.personalized.desc"),
    },
    {
      icon: Sparkles,
      title: t("whyChoose.features.premium.title"),
      desc: t("whyChoose.features.premium.desc"),
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl lg:rounded-[40px] overflow-hidden"
              >
                <img
                  src="/images/treatment/face-filler.png"
                  alt="Clinic Interior"
                  className="w-full aspect-4/5 object-cover"
                />
              </motion.div>

              {/* Floating Experience Card */}
              <GlassCard
                className="absolute -bottom-8 -right-8 lg:-right-12 p-6"
                delay={0.3}
              >
                <div className="text-center">
                  <span className="text-5xl font-light font-georgia text-wine">
                    {t("whyChoose.yearsValue")}
                  </span>
                  <p className="text-sm mt-2 text-taupe">
                    {t("whyChoose.yearsLabel1")}
                    <br />
                    {t("whyChoose.yearsLabel2")}
                  </p>
                </div>
              </GlassCard>

              {/* Decorative */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full border border-wine opacity-30"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine">
              {t("whyChoose.subtitle")}
            </span>
            <h2 className="text-3xl lg:text-5xl mb-6 font-georgia text-brown">
              {t("whyChoose.title")}{" "}
              <span className="text-wine">{t("whyChoose.titleHighlight")}</span>
            </h2>
            <p className="text-lg mb-12 text-taupe leading-relaxed">
              {t("whyChoose.description")}
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white hover:shadow-lg transition-shadow"
                >
                  <feature.icon size={28} className="text-wine mb-4" />
                  <h3 className="font-semibold mb-2 text-brown">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-taupe">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = ({ t }: { t: (key: string) => string }) => {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    {
      quote: t("testimonials.items.0.quote"),
      author: t("testimonials.items.0.author"),
      role: t("testimonials.items.0.role"),
    },
    {
      quote: t("testimonials.items.1.quote"),
      author: t("testimonials.items.1.author"),
      role: t("testimonials.items.1.role"),
    },
    {
      quote: t("testimonials.items.2.quote"),
      author: t("testimonials.items.2.author"),
      role: t("testimonials.items.2.role"),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-sm tracking-widest uppercase mb-4 block text-wine">
              {t("testimonials.subtitle")}
            </span>
            <h2 className="text-3xl lg:text-5xl mb-12 font-georgia text-brown">
              {t("testimonials.title")}{" "}
              <span className="text-wine">
                {t("testimonials.titleHighlight")}
              </span>{" "}
              {t("testimonials.titleEnd")}
            </h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Quote size={48} className="text-wine mb-6 opacity-30" />
                <p className="text-xl lg:text-2xl mb-8 leading-relaxed font-georgia text-brown">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-brown">
                    {testimonials[current].author}
                  </p>
                  <p className="text-sm text-taupe">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-3 mt-12">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-12 h-1 rounded-full transition-colors ${
                    current === index ? "bg-wine" : "bg-taupe/40"
                  }`}
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl lg:rounded-[40px] overflow-hidden">
              <img
                src="/images/treatment/happy-patient.png"
                alt="Happy Patient"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Rating Card */}
            <GlassCard
              className="absolute -bottom-6 left-6 lg:left-12 p-5"
              delay={0.5}
            >
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-wine fill-wine" />
                  ))}
                </div>
                <span className="font-semibold text-brown">5.0</span>
                <span className="text-sm text-taupe">
                  {t("testimonials.reviews")}
                </span>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = ({ t }: { t: (key: string) => string }) => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-brown">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm tracking-widest uppercase mb-4 block text-rose">
              {t("contact.subtitle")}
            </span>
            <h2 className="text-3xl lg:text-5xl text-white mb-8 font-georgia">
              {t("contact.title")}{" "}
              <span className="text-rose">{t("contact.titleHighlight")}</span>
            </h2>
            <p className="text-white/80 mb-8">
              {t("contact.description")}
            </p>
            <div className="space-y-6 mb-12">
              {[
                { icon: MapPin, text: t("contact.address") },
                { icon: Phone, text: t("contact.phone") },
                { icon: Clock, text: t("contact.hours") },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-wine">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <span className="text-white/80">{item.text}</span>
                </motion.div>
              ))}
            </div>
            <SocialIcons  iconSize={30}/>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl mb-8 font-georgia text-brown">
                {t("contact.formTitle")}
              </h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder={t("contact.placeholderName")}
                    className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine transition-colors text-brown placeholder:text-taupe"
                  />
                  <input
                    type="email"
                    placeholder={t("contact.placeholderEmail")}
                    className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine transition-colors text-brown placeholder:text-taupe"
                  />
                </div>
                <input
                  type="tel"
                  placeholder={t("contact.placeholderPhone")}
                  className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine transition-colors text-brown placeholder:text-taupe"
                />
                <select className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine transition-colors text-taupe">
                  <option>{t("contact.selectTreatment")}</option>
                  <option>{t("contact.optionFacial")}</option>
                  <option>{t("contact.optionWeightLoss")}</option>
                  <option>{t("contact.optionSkin")}</option>
                  <option>{t("contact.optionHair")}</option>
                </select>
                <textarea
                  rows={4}
                  placeholder={t("contact.placeholderMessage")}
                  className="w-full px-5 py-4 rounded-xl border border-cream bg-cream focus:outline-none focus:border-wine resize-none transition-colors text-brown placeholder:text-taupe"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl text-white font-medium tracking-wide bg-wine hover:bg-rose transition-colors"
                >
                  {t("contact.submitButton")}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const beforeAfterData = [
  {
    id: 1,
    category: "Pigmentation Treatment",
    description:
      "Advanced laser therapy targeting stubborn pigmentation, revealing a luminous and even complexion.",
    sessions: "4 Sessions",
    duration: "6 Weeks",
    before: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
    after: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
  },
  {
    id: 2,
    category: "Acne Scar Resurfacing",
    description:
      "Fractional CO₂ laser combined with PRP therapy to dramatically reduce post-acne scarring.",
    sessions: "6 Sessions",
    duration: "3 Months",
    before: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
    after: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
  },
  {
    id: 3,
    category: "Skin Brightening",
    description:
      "Customised brightening protocol using medical-grade peels and nano-infusion for radiant skin.",
    sessions: "3 Sessions",
    duration: "4 Weeks",
    before: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
    after: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
  },
  {
    id: 4,
    category: "Facial Contouring",
    description:
      "Non-surgical lifting and volumising using premium dermal fillers for a sculpted, youthful profile.",
    sessions: "2 Sessions",
    duration: "2 Weeks",
    before: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
    after: "/images/B&A-skin/B&A-pigmentation-treatment1.webp",
  },
];
const faqData = [
  {
    q: "What does Nexus Clinic specialize in?",
    a: "Nexus Clinic specializes in aesthetic treatments for the face, skin, and medical weight loss. Our goal is to provide personalized care with natural-looking results."
  },
  {
    q: "Is Nexus Clinic a doctor-led aesthetic clinic?",
    a: "Yes, Nexus Clinic is a doctor-led aesthetic clinic. Patient safety, treatment suitability, and natural results are at the heart of our approach."
  },
  {
    q: "What treatments are available at Nexus Clinic?",
    a: "At Nexus Clinic, we offer a range of aesthetic services that may include facial rejuvenation, skin treatments, and medical weight loss support. Your recommended treatment depends on your needs and goals."
  },
  {
    q: "Does Nexus Clinic focus on natural-looking results?",
    a: "Yes. At Nexus Clinic, we believe aesthetic treatments should enhance your features in a soft and balanced way. We focus on results that look refreshed, not overdone."
  },
  {
    q: "Can I visit Nexus Clinic for skin concerns?",
    a: "Yes, Nexus Clinic offers treatments for common skin concerns such as dullness, uneven texture, acne, pigmentation, and signs of aging. A consultation helps us guide you to the right option."
  },
  {
    q: "Does Nexus Clinic offer weight loss treatments?",
    a: "Yes, Nexus Clinic provides medically guided weight loss support for patients looking for a more structured and professional approach to their journey."
  },
  {
    q: "How do I know which treatment at Nexus Clinic is right for me?",
    a: "The best way is to book a consultation at Nexus Clinic. We will assess your concerns, listen to your goals, and recommend a treatment plan that fits you."
  },
  {
    q: "Is Nexus Clinic suitable for first-time aesthetic patients?",
    a: "Yes. Many patients visit Nexus Clinic for their first aesthetic consultation. We explain everything clearly and recommend only what is suitable for you."
  },
  {
    q: "Where is Nexus Clinic located?",
    a: "Nexus Clinic is located at LG 10, Wisma UOA II, Jalan Pinang, Kuala Lumpur."
  },
  {
    q: "How can I book an appointment with Nexus Clinic?",
    a: "You can contact Nexus Clinic by phone or use the booking form on the website to arrange your consultation."
  }
];

export default function HomePageNexus({
  locale = fallbackLng,
}: {
  locale?: string;
}) {
  const { t } = useTranslation(locale, "home");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const malaysiaTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kuala_Lumpur",
      });

      const now = new Date(malaysiaTime);
      const hour = now.getHours();

      if (hour >= 9 && hour < 18) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);

    return () => clearInterval(interval);
  }, []);

  const transformations = [
    {
      id: 1,
      before: "/images/B&A-w/B&A-ozempic-malaysia3.webp",
      after: "/images/B&A-w/B&A-ozempic-malaysia3.webp",
    },
    {
      id: 2,
      before: "/images/B&A-hair/B&A-prp-hair-treatment2.webp",
      after: "/images/B&A-hair/B&A-prp-hair-treatment2.webp",
    },
    {
      id: 3,
      before: "/images/B&A-skin/B&A-hydrafacial1.webp",
      after: "/images/B&A-skin/B&A-hydrafacial1.webp",
    },
  ];
  return (
    <div className="min-h-screen overflow-hidden bg-cream font-inter">
      <HeroSection t={t} />
      {/* <GalleryPage /> */}
      {/* <DoctorsSection /> */}
      <SectionBeforeAfter transformations={transformations} t={t} />
      <ServicesSection t={t} />
      <WhyChooseSection t={t} />
      <TestimonialsSection t={t} />
      <ContactSection t={t} />
      <FAQ data={faqData} />
    </div>
  );
}