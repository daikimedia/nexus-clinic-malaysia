import { languages } from "@/src/i18n/settings";
import PShotLanding from "@/src/views/regenerative/PShotMalaysia";

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <PShotLanding />;
}
