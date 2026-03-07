// app/[locale]/hair/[slug]/page.tsx

import { languages } from "@/src/i18n/settings";
import { hairTreatmentsMetadata } from "@/src/config/hairTreatments";
import type { Metadata } from "next";

// Import all components
import HairTransplant from "@/src/views/hairTreatment/HairTransplant";
import FUEHairTransplant from "@/src/views/hairTreatment/FUEHairTransplant";
import PRPHair from "@/src/views/hairTreatment/PRPHair";
import HairLossTreatment from "@/src/views/hairTreatment/HairLossTreatment";
import BeardTreatment from "@/src/views/hairTreatment/BeardTreatment";
import HairMesotherapy from "@/src/views/hairTreatment/HairMesotherapy";
import ExosomeHair from "@/src/views/hairTreatment/ExosomeHair";
import MinoxidilTreatment from "@/src/views/hairTreatment/MinoxidilTreatment";
import Finasteride from "@/src/views/hairTreatment/Finasteride";
import Default from "@/src/views/hairTreatment/Default";

const components: Record<string, React.ComponentType<{ locale: string }>> = {
  HairTransplant,
  FUEHairTransplant,
  PRPHair,
  HairLossTreatment,
  BeardTreatment,
  HairMesotherapy,
  ExosomeHair,
  MinoxidilTreatment,
  Finasteride,
};

export async function generateStaticParams() {
  const paths = [];
  for (const locale of languages) {
    for (const treatment of hairTreatmentsMetadata) {
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
  const treatment = hairTreatmentsMetadata.find(t => t.slug === slug);
  
  if (!treatment) return {};
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nexusclinic.my';
  const url = locale === 'en' 
    ? `${baseUrl}/hair/${slug}` 
    : `${baseUrl}/${locale}/hair/${slug}`;

  return {
    title: treatment.title,
    description: treatment.description,
    alternates: { canonical: url },
    openGraph: {
      title: treatment.title,
      description: treatment.description,
      url,
      siteName: 'Nexus Clinic',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function HairTreatmentPage({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}) {
  const { locale, slug } = await params;
  
  const treatment = hairTreatmentsMetadata.find(t => t.slug === slug);
  if (!treatment) return <Default locale={locale} />;
  
  const Component = components[treatment.component] || Default;
  
  return <Component locale={locale} />;
}