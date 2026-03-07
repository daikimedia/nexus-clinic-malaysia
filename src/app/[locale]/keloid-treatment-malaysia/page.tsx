import { languages } from "@/src/i18n/settings";
import KeloidLandingPage from "@/src/views/skinTreatment/KeloidTreatment";

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <KeloidLandingPage />;
}
