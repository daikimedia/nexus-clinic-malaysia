export const dynamic = "force-static";
import HairHub from '@/src/views/hairTreatment/HairHub';
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: " Hair Loss Treatment in KL for Stronger Hair | Nexus",
  description: "Treat hair loss with PRP, mesotherapy & doctor-led solutions in KL. Restore thicker, healthier hair with personalised treatment plans.",
  alternates: {
    canonical: `${baseurl}/hair`,
  },
};
export default async function HairPage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <HairHub locale={locale} />;
}       