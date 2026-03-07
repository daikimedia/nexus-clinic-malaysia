// app/[locale]/face/[slug]/page.tsx

import { languages } from "@/src/i18n/settings";
import { faceTreatmentsMetadata } from "@/src/config/faceTreatments";
import type { Metadata } from "next";

// Import all components
import DermalFiller from "@/src/views/faceTreatment/DermalFiller";
import LipFiller from "@/src/views/faceTreatment/LipFiller";
import ChinFiller from "@/src/views/faceTreatment/ChinFiller";
import JawlineFiller from "@/src/views/faceTreatment/JawlineFiller";
import MasseterBotox from "@/src/views/faceTreatment/MasseterBotox";
import NoseThreadLift from "@/src/views/faceTreatment/NoseThreadLift";
import SkinBooster from "@/src/views/faceTreatment/SkinBooster";
import NoseFiller from "@/src/views/faceTreatment/NoseFiller";
import CheekFiller from "@/src/views/faceTreatment/CheekFiller";
import TearTroughFiller from "@/src/views/faceTreatment/TearTroughFiller";
import UnderEyeFiller from "@/src/views/faceTreatment/UnderEyeFiller";

// Component map
const components = {
  DermalFiller,
  LipFiller,
  ChinFiller,
  JawlineFiller,
  MasseterBotox,
  NoseThreadLift,
  SkinBooster,
  NoseFiller,
  CheekFiller,
  TearTroughFiller,
  UnderEyeFiller,
} as const;

export async function generateStaticParams() {
  const paths = [];
  for (const locale of languages) {
    for (const treatment of faceTreatmentsMetadata) {
      paths.push({ locale, slug: treatment.slug });
    }
  }
  return paths;
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const treatment = faceTreatmentsMetadata.find(t => t.slug === slug);
  
  if (!treatment) return {};
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nexusclinic.my';
  const url = locale === 'en' 
    ? `${baseUrl}/face/${slug}` 
    : `${baseUrl}/${locale}/face/${slug}`;

  return {
    title: treatment.title,
    description: treatment.description,
    alternates: { canonical: url },
    openGraph: {
      title: treatment.title,
      description: treatment.description,
      url,
      siteName: 'Nexus Clinic',
    },
  };
}

export default async function FaceTreatmentPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params;
  
  const treatment = faceTreatmentsMetadata.find(t => t.slug === slug);
  if (!treatment) return <div>Treatment not found</div>;
  
  const Component = components[treatment.component as keyof typeof components];
  
  return <Component locale={locale} />;
}