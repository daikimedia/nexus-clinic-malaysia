import { MetadataRoute } from "next";
import { languages } from "@/src/i18n/settings";

import { faceTreatmentsMetadata } from "@/src/config/faceTreatments";
import { hairTreatmentsMetadata } from "@/src/config/hairTreatments";
import { skinTreatmentsMetadata } from "@/src/config/skinTreatments";
import { regenerativeTreatmentsMetadata } from "@/src/config/regenerativeTreatments";
import { weightlossTreatmentsMetadata } from "@/src/config/weightlossTreatments";

import { wordpressService } from "@/src/services/wordpress";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.BASE_URL;

  const staticRoutes = [
    "",
    "/about-us",
    "/contact-us",
    "/doctors",
    "/gallery",
    "/products",
    "/privacy-policy",
    "/terms-of-use",
    "/face",
    "/hair",
    "/skin",
    "/regenerative",
    "/weight-loss",
    "/blogs",
    // content relavant pages
    "/acne-and-acne-scars",
    "/chemical-peel",
    "/dermal-fillers",
    "/fraqtional-laser-resurfacing",
    
  ];

  const staticUrls = languages.flatMap((locale) =>
    staticRoutes.map((route) => ({
      url:
        locale === "en"
          ? `${baseUrl}${route}`
          : `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
    }))
  );

  // ✅ Helper for dynamic sections
  const generateDynamicUrls = (
    items: { slug: string }[],
    basePath: string
  ) => {
    return languages.flatMap((locale) =>
      items.map((item) => ({
        url:
          locale === "en"
            ? `${baseUrl}/${basePath}/${item.slug}`
            : `${baseUrl}/${locale}/${basePath}/${item.slug}`,
        lastModified: new Date(),
      }))
    );
  };

  // ✅ All dynamic sections
  const faceUrls = generateDynamicUrls(faceTreatmentsMetadata, "face");
  const hairUrls = generateDynamicUrls(hairTreatmentsMetadata, "hair");
  const skinUrls = generateDynamicUrls(skinTreatmentsMetadata, "skin");
  const regenerativeUrls = generateDynamicUrls(regenerativeTreatmentsMetadata,"regenerative");
  const weightLossUrls = generateDynamicUrls(weightlossTreatmentsMetadata,"weight-loss");

  let blogUrls: MetadataRoute.Sitemap = [];

  try {
    const posts = await wordpressService.getAllPosts();

    blogUrls = posts.map((post: any) => ({
      url: `${baseUrl}/blogs/${post.slug}`,
      lastModified: new Date(post.modified || post.date),
    }));
  } catch (err) {
    console.error("Blog sitemap error:", err);
  }

  // ✅ FINAL MERGE
  return [
    ...staticUrls,
    ...faceUrls,
    ...hairUrls,
    ...skinUrls,
    ...regenerativeUrls,
    ...weightLossUrls,
    ...blogUrls,
  ];
}
