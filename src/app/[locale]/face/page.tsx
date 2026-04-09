export const dynamic = "force-static";
import FaceHub from '@/src/views/faceTreatment/FaceHub';
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: " Face Treatments in KL for Natural Results | Nexus",
  description: "Enhance facial features with Botox, fillers & lifting treatments in KL. Doctor-led care for natural, balanced and refined results.",
  alternates: {
    canonical: `${baseurl}/face`,
  },
};

export default async function FacePage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <FaceHub locale={locale} />;
}       