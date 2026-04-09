import PageDermalFiler from "@/src/views/PageDermalFiler";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Best Dermal Fillers Malaysia | Effective Treatment With Award Winning Doctors at Nexus Clinic Kuala Lumpur",
  description: "Trusted results. Award-winning injectors and aesthetic doctors at Nexus Clinic KL deliver expert dermal filler in Kuala Lumpur. Natural volume, sharper contours, zero surgery. Book your free consultation today.",
  alternates: {
    canonical: `${baseurl}/dermal-fillers`,
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

  return <PageDermalFiler locale={locale} />;
}