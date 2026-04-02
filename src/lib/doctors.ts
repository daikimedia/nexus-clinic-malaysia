// ─────────────────────────────────────────────────────────────
// Nexus Clinic Malaysia — Doctor Profile Data
// ─────────────────────────────────────────────────────────────

export interface Doctor {
  id: number;
  slug: string;
  name: string;
  title: string;
  photoSrc: string;
  photoAlt: string;
  specialisation: string;
  tag: string;
  bio: string;
  extendedBio: string;
  qualifications: string[];
  awards: string[];
  languages: string[];
  rating: number;
  reviewCount: number;
  instagram: string;
  linkedin: string;
  treatments: string[];
}

export const doctors: Doctor[] = [
  {
    id: 1,
    slug: "dr-amirah-sofea",
    name: "Dr. Amirah Sofea",
    title: "Medical Director & Aesthetic Physician",
    photoSrc: "/images/doctors/dr-amirah-sofea.webp",
    photoAlt:
      "Portrait of Dr. Amirah Sofea, Medical Director and Aesthetic Physician at Nexus Clinic Malaysia",
    specialisation: "Advanced Laser Therapy & Skin Rejuvenation",
    tag: "Medical Director",
    bio: "With over 12 years of clinical excellence, Dr. Amirah leads Nexus Clinic with a philosophy rooted in science, artistry, and truly personalised care.",
    extendedBio:
      "Dr. Amirah trained extensively in Seoul and Paris, immersing herself in the world's most advanced laser and skin rejuvenation programmes. She pioneered Nexus Clinic's signature 'Inside-Out' protocol — a holistic approach combining medical aesthetics with nutritional and wellness medicine to deliver transformations that are deep, lasting, and natural-looking. A respected speaker at the Asian Aesthetic Medicine Congress, she regularly contributes to peer-reviewed journals on photobiomodulation and skin microbiome science.",
    qualifications: [
      "MBBS, University of Malaya (UM)",
      "Diploma in Aesthetic Medicine, Academy of Aesthetic Medicine Malaysia (AAM)",
      "Fellowship in Laser Dermatology, Yonsei University, Seoul",
      "Advanced Injectables Masterclass, Paris Dermatology Institute",
    ],
    awards: [
      "Best Aesthetic Physician Malaysia, APAC Beauty Awards 2023",
      "Top 10 Aesthetic Physicians Malaysia, Healthcare Asia 2022",
      "Excellence in Laser Medicine, Malaysian Medical Association 2021",
    ],
    languages: ["English", "Bahasa Malaysia", "Mandarin"],
    rating: 5,
    reviewCount: 312,
    instagram: "#",
    linkedin: "#",
    treatments: [
      "PicoSure Laser",
      "Fractional CO₂ Laser",
      "HIFU Ultherapy",
      "Glutathione IV Drip",
      "Personalised Skincare Protocol",
    ],
  },
  {
    id: 2,
    slug: "dr-harith-danial",
    name: "Dr. Harith Danial",
    title: "Senior Aesthetic Physician",
    photoSrc: "/images/doctors/dr-harith-danial.webp",
    photoAlt:
      "Portrait of Dr. Harith Danial, Senior Aesthetic Physician specialising in body contouring at Nexus Clinic Malaysia",
    specialisation: "Body Contouring & Regenerative Medicine",
    tag: "Senior Physician",
    bio: "Renowned for his precision in facial harmonisation and body sculpting, Dr. Harith brings next-generation regenerative medicine to his patients.",
    extendedBio:
      "Dr. Harith completed his post-graduate training in Regenerative Medicine at the University of Heidelberg, Germany, before returning to Malaysia to join Nexus Clinic. He is a certified Allergan and Galderma master trainer, mentoring a network of injectors across Southeast Asia. His meticulous approach to facial proportions — guided by the golden ratio and three-dimensional assessment — produces results that are consistently praised for their naturalness and longevity.",
    qualifications: [
      "MBBS, Universiti Kebangsaan Malaysia (UKM)",
      "Allergan & Galderma Certified Master Injector",
      "Post-Graduate Diploma in Regenerative Medicine, University of Heidelberg, Germany",
      "CoolSculpting University Graduate, ZELTIQ Aesthetics",
    ],
    awards: [
      "Excellence in Patient Care, Nexus Clinic Internal Awards 2023",
      "Allergan Master Trainer of the Year, Southeast Asia 2021",
      "Body Contouring Innovator Award, Malaysian Aesthetic Forum 2022",
    ],
    languages: ["English", "Bahasa Malaysia"],
    rating: 5,
    reviewCount: 248,
    instagram: "#",
    linkedin: "#",
    treatments: [
      "CoolSculpting Elite",
      "Dermal Filler (Juvederm, Restylane)",
      "PRP Therapy",
      "Microneedling RF",
      "Botulinum Toxin",
    ],
  },
  {
    id: 3,
    slug: "dr-nurul-farhana",
    name: "Dr. Nurul Farhana",
    title: "Aesthetic & Wellness Physician",
    photoSrc: "/images/doctors/dr-nurul-farhana.webp",
    photoAlt:
      "Portrait of Dr. Nurul Farhana, Aesthetic and Wellness Physician at Nexus Clinic Malaysia, specialist in anti-ageing and holistic skincare",
    specialisation: "Anti-Ageing & Holistic Skincare",
    tag: "Wellness Specialist",
    bio: "Dr. Farhana takes an integrative approach, combining aesthetic medicine with holistic wellness to deliver transformations that go beyond skin deep.",
    extendedBio:
      "Dr. Farhana earned her thread lift certification in Taipei and holds a Diploma in Nutritional Medicine, enabling her to craft 360° wellness plans that pair aesthetic treatments with dietary and lifestyle optimisation. Her warm, unhurried consultation style — combined with her meticulous technical execution — has earned her a devoted following among clients seeking comprehensive, preventive anti-ageing care. She leads Nexus Clinic's Women's Wellness programme, addressing hormonal skin changes, post-partum recovery, and menopausal skin management.",
    qualifications: [
      "MBBS, International Medical University (IMU), Malaysia",
      "Diploma in Nutritional Medicine, College of Naturopathic Medicine, UK",
      "Thread Lift Certification, Academia Sinica, Taiwan",
      "Certificate in Aesthetic Dermatology, IMCAS Paris",
    ],
    awards: [
      "Rising Star Aesthetic Physician, Malaysian Medical Association 2022",
      "Wellness Advocate of the Year, Health & Beauty Asia Awards 2023",
      "Patient's Choice Award, Nexus Clinic Internal Survey 2022 & 2023",
    ],
    languages: ["English", "Bahasa Malaysia", "Arabic"],
    rating: 5,
    reviewCount: 289,
    instagram: "#",
    linkedin: "#",
    treatments: [
      "HIFU & Thread Lift",
      "PDT Blue Light Therapy",
      "Medical-Grade Chemical Peel",
      "Nutritional IV Therapy",
      "Hormonal Skin Management",
    ],
  },
];