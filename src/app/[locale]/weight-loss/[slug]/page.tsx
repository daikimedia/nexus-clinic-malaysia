import { languages } from "@/src/i18n/settings";
import { weightlossTreatmentsMetadata } from "@/src/config/weightlossTreatments";
import type { Metadata } from "next";

// Import all components (create these files)
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
import Default from "@/src/views/weightlossTreatment/Default";
import PageOzempicMalaysia from "@/src/views/weightlossTreatment/PageOzempicMalaysia";
import GLP1LandingPage from "@/src/views/weightlossTreatment/GLP";
import SimaglutideLanding from "@/src/views/weightlossTreatment/SimaglutideInjection";
import TirzepatideLanding from "@/src/views/weightlossTreatment/Tirzepatide";

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
  SimaglutideLanding,
  TirzepatideLanding,
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

  if (!treatment) return {};

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://nexusclinic.my";
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
  if (!treatment) return <Default locale={locale} />;

  const Component = components[treatment.component] || Default;

  return <Component locale={locale} />;
}
