 import HairHub from '@/src/views/hairTreatment/HairHub';

export default async function HairPage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <HairHub locale={locale} />;
}       