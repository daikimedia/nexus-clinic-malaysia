"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

import {
  ChevronRight,
  Star,
  Award,
  Instagram,
  Stethoscope,
  GraduationCap,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "Dr. Amirah Sofea",
    title: "Medical Director & Aesthetic Physician",
    photo: "/images/main/doctor1.png",
    specialisation: "Advanced Laser Therapy & Skin Rejuvenation",
    qualifications: [
      "MBBS (UM), Malaysia",
      "Diploma in Aesthetic Medicine (AAM)",
      "Fellowship in Laser Dermatology, Seoul",
    ],
    awards: [
      "Best Aesthetic Clinic Award 2023",
      "Top 10 Aesthetic Physicians Malaysia 2022",
    ],
    bio: "With over 12 years of clinical excellence, Dr. Amirah leads Nexus Clinic with a philosophy rooted in science, artistry, and personalised care. She has trained extensively in Seoul and Paris, bringing world-class techniques to her patients.",
    instagram: "#",
    linkedin: "#",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Harith Danial",
    title: "Senior Aesthetic Physician",
    photo: "/images/main/doctor2.png",
    specialisation: "Body Contouring & Regenerative Medicine",
    qualifications: [
      "MBBS (UKM), Malaysia",
      "Certified Injector — Allergan & Galderma",
      "Post-Graduate in Regenerative Medicine, Germany",
    ],
    awards: ["Excellence in Patient Care 2023", "Allergan Master Trainer 2021"],
    bio: "Dr. Harith is renowned for his precision in facial harmonisation and body sculpting. His regenerative medicine expertise positions him at the forefront of next-generation aesthetic treatments in Malaysia.",
    instagram: "#",
    linkedin: "#",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Nurul Farhana",
    title: "Aesthetic & Wellness Physician",
    photo: "/images/main/doctor3.png",
    specialisation: "Anti-Ageing & Holistic Skincare",
    qualifications: [
      "MBBS (IMU), Malaysia",
      "Diploma in Nutritional Medicine",
      "Certified in Thread Lift Procedures, Taiwan",
    ],
    awards: [
      "Rising Star Aesthetic Physician 2022",
      "Wellness Advocate of the Year 2023",
    ],
    bio: "Dr. Farhana takes an integrative approach, combining aesthetic medicine with holistic wellness to deliver transformations that go beyond skin deep. Her warm and meticulous style makes every patient feel truly seen.",
    instagram: "#",
    linkedin: "#",
    rating: 5,
  },
];

function DoctorCard({
  doctor,
  index,
}: {
  item?: never;
  doctor: (typeof doctors)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-taupe/10 flex flex-col"
    >
      {/* Photo */}
      <div className="relative w-full aspect-3/4 overflow-hidden bg-cream">
        <Image
          src={doctor.photo}
          alt={`Portrait of ${doctor.name}`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            // Fallback gradient when image missing
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-brown/60 via-transparent to-transparent" />

        {/* Name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className="font-georgia text-cream text-xl leading-tight">
            {doctor.name}
          </h3>
          <p className="text-cream/80 text-xs tracking-wide mt-0.5">
            {doctor.title}
          </p>
        </div>

        {/* Rating badge */}
        <div className="absolute top-4 right-4 bg-glass backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1">
          {Array.from({ length: doctor.rating }).map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-wine text-wine" />
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Specialisation */}
        <div className="flex items-center gap-2 mb-4">
          <Stethoscope className="w-4 h-4 text-wine shrink-0" />
          <span className="text-rose text-sm font-medium">
            {doctor.specialisation}
          </span>
        </div>

        {/* Bio */}
        <p className="text-taupe text-sm leading-relaxed mb-5">{doctor.bio}</p>

        {/* Qualifications toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-wine text-sm font-semibold hover:text-brown transition-colors mb-3 group/btn"
          aria-expanded={expanded}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Qualifications &amp; Awards</span>
          <ChevronRight
            className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-90" : ""}`}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="space-y-1.5 mb-4">
                {doctor.qualifications.map((q) => (
                  <li
                    key={q}
                    className="flex items-start gap-2 text-taupe text-xs"
                  >
                    <span className="w-1 h-1 rounded-full bg-wine mt-1.5 shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
              <div className="border-t border-taupe/20 pt-3">
                {doctor.awards.map((award) => (
                  <div
                    key={award}
                    className="flex items-start gap-2 text-taupe text-xs mb-1.5"
                  >
                    <Award className="w-3.5 h-3.5 text-wine shrink-0 mt-0.5" />
                    {award}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social */}
        <div className="mt-auto pt-4 flex items-center gap-3 border-t border-taupe/20">
          <a
            href={doctor.instagram}
            aria-label={`${doctor.name} on Instagram`}
            className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-taupe hover:text-wine hover:bg-wine/10 transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={doctor.linkedin}
            aria-label={`${doctor.name} on LinkedIn`}
            className="w-8 h-8 rounded-full bg-cream flex items-center justify-center text-taupe hover:text-wine hover:bg-wine/10 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#consultation"
            className="ml-auto text-xs font-semibold tracking-wide text-cream bg-wine hover:bg-brown transition-colors px-4 py-2 rounded-full"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function DoctorsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-light py-24 md:py-32 overflow-hidden"
      id="doctors"
      aria-labelledby="doctors-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-wine uppercase tracking-[0.25em] text-xs font-semibold mb-4"
          >
            Our Specialists
          </motion.p>
          <motion.h2
            id="doctors-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-georgia text-brown text-4xl md:text-5xl leading-tight mb-5"
          >
            Meet the Physicians
            <br />
            <span className="text-wine italic">Behind Your Glow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-taupe max-w-xl mx-auto text-base leading-relaxed"
          >
            Our team of internationally trained aesthetic physicians combines
            clinical precision with an artistic eye — dedicated to revealing
            your most confident self.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 mx-auto w-16 h-0.5 bg-wine origin-left"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc, i) => (
            <DoctorCard key={doc.id} doctor={doc} index={i} />
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { value: "12+", label: "Years of Excellence" },
            { value: "8,000+", label: "Treatments Performed" },
            { value: "98%", label: "Patient Satisfaction" },
            { value: "3", label: "Award-Winning Physicians" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 rounded-2xl bg-cream border border-taupe/10"
            >
              <p className="font-georgia text-wine text-3xl mb-1">
                {stat.value}
              </p>
              <p className="text-taupe text-xs uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}