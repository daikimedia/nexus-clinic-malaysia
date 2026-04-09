import { languages } from "@/src/i18n/settings";
import type { Metadata } from "next";

import { weightlossTreatmentsMetadata } from "@/src/config/weightlossTreatments";
import CoolSculpting from "@/src/views/weightlossTreatment/Coolsculpting";
import FatFreezing from "@/src/views/weightlossTreatment/FatFreezing";
import Ozempic from "@/src/views/weightlossTreatment/PageOzempicMalaysia";
import Mounjaro from "@/src/views/weightlossTreatment/Mounjaro";
import Wegovy from "@/src/views/weightlossTreatment/PageWegovyMalaysia";
import DoctorMonitored from "@/src/views/weightlossTreatment/DoctorMonitored";
import HCGWeightLoss from "@/src/views/weightlossTreatment/HCG";
import Duromine from "@/src/views/weightlossTreatment/Duromine";
import Zepbound from "@/src/views/weightlossTreatment/ZepBound";
import IVDrip from "@/src/views/weightlossTreatment/IVDrip";
import PageOzempicMalaysia from "@/src/views/weightlossTreatment/PageOzempicMalaysia";
import GLP1LandingPage from "@/src/views/weightlossTreatment/GLP";
// import SimaglutideLanding from "@/src/views/weightlossTreatment/SimaglutideInjection";
// import TirzepatideLanding from "@/src/views/weightlossTreatment/Tirzepatide";
import { notFound } from "next/navigation";

const components: Record<string, React.ComponentType<{ locale: string }>> = {
  CoolSculpting,
  FatFreezing,
  Ozempic,
  Mounjaro,
  Wegovy,
  DoctorMonitored,
  HCGWeightLoss,
  Duromine,
  Zepbound,
  PageOzempicMalaysia,
  GLP1LandingPage,
  // SimaglutideLanding,
  // TirzepatideLanding,
    IVDrip,
};

export async function generateStaticParams() {
  const paths = [];
  for (const locale of languages) {
    for (const treatment of weightlossTreatmentsMetadata) {
      paths.push({ locale, slug: treatment.slug });
    }
  }
  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const treatment = weightlossTreatmentsMetadata.find((t) => t.slug === slug);

  if (!treatment) {
    return {
      title: "Page Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }


  const baseUrl = process.env.BASE_URL|| "https://www.nexus-clinic.com";
  const url =
    locale === "en"
      ? `${baseUrl}/weight-loss/${slug}`
      : `${baseUrl}/${locale}/weight-loss/${slug}`;

  return {
    title: treatment.title,
    description: treatment.description,
    alternates: { canonical: url },
    openGraph: {
      title: treatment.title,
      description: treatment.description,
      url,
      siteName: "Nexus Clinic",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function WeightLossTreatmentPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  const treatment = weightlossTreatmentsMetadata.find((t) => t.slug === slug);
  if (!treatment) notFound();
  const Component = components[treatment.component];
  
    if (!Component) notFound();
  return <Component locale={locale} />;
}
