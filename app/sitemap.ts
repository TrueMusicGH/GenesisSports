import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://genesissports.co.in";
  const routes = [
    "",
    "/about",
    "/what-we-do",
    "/approach",
    "/why-genesis",
    "/our-projects",
    "/our-projects/bengal-tigers",
    "/our-projects/club-fitness-challenge",
    "/partnerships",
    "/contact",
  ];
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));
}
