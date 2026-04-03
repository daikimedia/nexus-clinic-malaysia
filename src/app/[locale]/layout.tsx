import Navbar from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { FloatingWhatsapp } from "@/src/components/Whatsapp";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navbar locale={locale} />
      {children}
      <Footer locale={locale} />
      <FloatingWhatsapp isActive={true} hideOnMobile={false} />
    </>
  );
}