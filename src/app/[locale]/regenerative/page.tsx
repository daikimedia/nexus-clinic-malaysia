import RegenerativeHub from '@/src/views/regenerative/RegenerativeHub'
export default async function RegenerativePage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <RegenerativeHub locale={locale} />;
}