import PageSaxendaMalaysia from "@/src/views/PageSexandaMalaysia";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Saxenda for Weight Loss in KL | Doctor-Led | Nexus Clinic",
  description: "Get Saxenda in KL for safe, doctor-led weight loss. Effective appetite control for sustainable fat loss. Book your consultation today.",
  alternates: {
    canonical: `${baseurl}/saxenda-malaysia`,
  },
};
export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function Page() {
  return <PageSaxendaMalaysia />;
}
