export default async function HairPage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <div>Hair page for locale: {locale}</div>;
}       