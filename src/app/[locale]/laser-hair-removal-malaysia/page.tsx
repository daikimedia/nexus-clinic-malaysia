import { languages } from "@/src/i18n/settings";
import LaserHairRemovalLanding from "@/src/views/skinTreatment/LaserHairRemoval";

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <LaserHairRemovalLanding />;
}
