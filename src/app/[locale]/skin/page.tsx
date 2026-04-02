import SkinHub from '@/src/views/skinTreatment/SkinHub'

export default async function SkinTreatmentPage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <SkinHub locale={locale} />;
}  
