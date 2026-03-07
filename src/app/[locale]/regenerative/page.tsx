export default async function RegenerativePage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <div>Regenerative page for locale: {locale}</div>;
}