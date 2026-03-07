// app/[locale]/skin/[slug]/page.tsx

import { languages } from "@/src/i18n/settings";
import { skinTreatmentsMetadata } from "@/src/config/skinTreatments";
import type { Metadata } from "next";

// Import all components (create these files with minimal return)
import AcneTreatment from "@/src/views/skinTreatment/AcneTreatment";
import AcneScarTreatment from "@/src/views/skinTreatment/AcneScarTreatment";
import PigmentationTreatment from "@/src/views/skinTreatment/PigmentationTreatment";
import MelasmaTreatment from "@/src/views/skinTreatment/MelasmaTreatment";
import MoleRemoval from "@/src/views/skinTreatment/MoleRemoval";
// import Hydrafacial from "@/src/views/skinTreatment/Hydrafacial";
import PicoLaser from "@/src/views/skinTreatment/PicoLaser";
import DarkEyeCircleTreatment from "@/src/views/skinTreatment/DarkEyeCircleTreatment";
import SkinWhitening from "@/src/views/skinTreatment/SkinWhitening";
// import EczemaTreatment from "@/src/views/skinTreatment/EczemaTreatment";
import KeloidTreatment from "@/src/views/skinTreatment/KeloidTreatment";
import RosaceaTreatment from "@/src/views/skinTreatment/RosaceaTreatment";
// import StretchMarkRemoval from "@/src/views/skinTreatment/StretchMarkRemoval";
import LaserHairRemoval from "@/src/views/skinTreatment/LaserHairRemoval";
import TattooRemoval from "@/src/views/skinTreatment/TattooRemoval";
import Default from "@/src/views/skinTreatment/Default";

const components: Record<string, React.ComponentType<{ locale: string }>> = {
  AcneTreatment,
  AcneScarTreatment,
  PigmentationTreatment,
  MelasmaTreatment,
  MoleRemoval,
//   Hydrafacial,
  PicoLaser,
  DarkEyeCircleTreatment,
  SkinWhitening,
//   EczemaTreatment,
  KeloidTreatment,
  RosaceaTreatment,
//   StretchMarkRemoval,
  LaserHairRemoval,
  TattooRemoval,
};

export async function generateStaticParams() {
  const paths = [];
  for (const locale of languages) {
    for (const treatment of skinTreatmentsMetadata) {
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
  const treatment = skinTreatmentsMetadata.find(t => t.slug === slug);
  
  if (!treatment) return {};
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nexusclinic.my';
  const url = locale === 'en' 
    ? `${baseUrl}/skin/${slug}` 
    : `${baseUrl}/${locale}/skin/${slug}`;

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

export default async function SkinTreatmentPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params;
  
  const treatment = skinTreatmentsMetadata.find(t => t.slug === slug);
  if (!treatment) return <Default locale={locale} />;
  
  const Component = components[treatment.component] || Default;
  
  return <Component locale={locale} />;
}