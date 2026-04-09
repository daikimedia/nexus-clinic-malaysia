export const dynamic = "force-static";
import SkinHub from '@/src/views/skinTreatment/SkinHub'
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Skin Treatments in KL for Clear, Healthy Skin",
  description: "Treat acne, scars, pigmentation & dull skin with advanced laser and medical treatments in KL. Safe, effective and personalised care.",
  alternates: {
    canonical: `${baseurl}/skin`,
  },
};
export default async function SkinTreatmentPage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <SkinHub locale={locale} />;
}  
