import PageSubcision from "@/src/views/PageSubcision";
import { languages } from "@/src/i18n/settings";
import { Metadata } from "next";

const baseurl = process.env.BASE_URL || "https://www.nexus-clinic.com"
export const metadata: Metadata = {
  title: "Subcision for Acne Scars in KL | Nexus Clinic",
  description: "Treat deep acne scars with subcision in KL. Doctor-led procedure to release tethered scars for smoother, even skin. Book a consultation today.",
  alternates: {
    canonical: `${baseurl}/subcision`,
  },
};
export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default function Page() {
  return <PageSubcision />;
}
