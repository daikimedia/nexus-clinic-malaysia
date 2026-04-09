import PagePeelChemical from "@/src/views/PagePeelChimical";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Chemical Peel in KL for Brighter Skin | Nexus Clinic",
  description: "Revitalise dull skin with chemical peels in KL. Treat pigmentation, acne scars & uneven texture. Doctor-led care for safe, glowing results.",
  alternates: {
    canonical: `${baseurl}/chemical-peel`,
  },
};
export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function Page() {
  return <PagePeelChemical />;
}
