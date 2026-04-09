export const dynamic = "force-static";
import WeightLossHub from '@/src/views/weightlossTreatment/WeightLossHub';
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Doctor-Led Weight Loss Treatment in KL | Nexus",
  description: " Safe, doctor-led weight loss in KL with Ozempic, Mounjaro & personalised programs for sustainable fat loss. Book your consultation today.",
  alternates: {
    canonical: `${baseurl}/weight-loss`,
  },
};
export default async function WeightLossPage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <WeightLossHub locale={locale} />;
}  
