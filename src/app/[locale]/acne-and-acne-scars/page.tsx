import PageActiveAcne from "@/src/views/PageActiveAcne";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Acne & Scar Treatment in KL | Nexus Clinic",
  description: "Treat acne and acne scars in KL with doctor-led laser and medical treatments. Clear skin, reduced scarring – book your consultation today.",
  alternates: {
    canonical: `${baseurl}/acne-and-acne-scars`,
  },
};
export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <PageActiveAcne locale={locale} />;
}
