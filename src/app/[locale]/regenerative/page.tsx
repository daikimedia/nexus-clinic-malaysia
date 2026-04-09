export const dynamic = "force-static";
import RegenerativeHub from '@/src/views/regenerative/RegenerativeHub'
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: " Regenerative Treatments in KL | Skin & Hair Repair",
  description: "Boost collagen and repair skin with regenerative treatments in KL like PRP and exosomes. Doctor-led solutions for long-term rejuvenation.",
  alternates: {
    canonical: `${baseurl}/regenerative`,
  },
};
export default async function RegenerativePage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <RegenerativeHub locale={locale} />;
}