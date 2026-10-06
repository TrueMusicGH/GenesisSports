import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://genesissports.co.in";
  const routes = [
    "",
    "/about",
    "/what-we-do",
    "/approach",
    "/why-genesis",
    "/our-work",
    "/our-work/bengal-tigers",
    "/our-work/club-fitness-challenge",
    "/partnerships",
    "/contact",
  ];
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));
}
