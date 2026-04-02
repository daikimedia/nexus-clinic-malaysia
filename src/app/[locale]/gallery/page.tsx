import { languages } from "@/src/i18n/settings";
import GalleryPage from "@/src/views/SliderGallery";
import React from "react";

export async function generateStaticParams() {
  return languages.map((locale: string) => ({ locale }));
}

const Page = () => {
  return <GalleryPage />;
};

export default Page;