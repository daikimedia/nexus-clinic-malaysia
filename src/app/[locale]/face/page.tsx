export default async function FacePage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <div>Face page for locale: {locale}</div>;
}       