import { languages } from "@/src/i18n/settings";
import PageProfileDoctor from "@/src/views/HomeLanding/PageDoctors";
import React from "react";

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

const Page = () => {
  return <PageProfileDoctor />;
};

export default Page;