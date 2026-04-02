
import WeightLossHub from '@/src/views/weightlossTreatment/WeightLossHub';

export default async function WeightLossPage({
  params,
}: {    params: Promise<{ locale: string }>;       
}) {
  const { locale } = await params;
  return <WeightLossHub locale={locale} />;
}  
