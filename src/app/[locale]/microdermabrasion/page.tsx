import PageMicroderMabrasion from "@/src/views/PageMicroderMabrasion";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Microdermabrasion in KL for Smoother Skin | Nexus Clinic",
  description: "Exfoliate dull skin with microdermabrasion in KL. Treat rough texture, fine lines & clogged pores. Gentle, doctor-led care for radiant results.",
  alternates: {
    canonical: `${baseurl}/microdermabrasion`,
  },
};
export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function Page() {
  return <PageMicroderMabrasion />;
}
